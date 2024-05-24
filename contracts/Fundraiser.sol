// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "./interfaces/IVesting.sol";
import "./interfaces/INonfungiblePositionManager.sol";
import "./interfaces/ICampaign.sol";

contract Fundraiser is Ownable, Initializable {
    using SafeERC20 for IERC20;

    // Public state variables
    string public projectName;
    string public description;
    string public websiteLink;
    uint256 public vestingStartDelta;
    uint256 public vestingDuration; // Set to 0 for no vesting
    
    uint256 public raisedAmount; // Total raised amount in raised tokens
    uint256 public soldAmount; // Total amount of tokens sold
    bool public finalized;
    bool public failed;
    uint256 public finalizedTimestamp;
    
    bool public swapPairCreated;

    IERC20 public saleToken;
    IERC20 public raiseToken;
    ICampaign public campaign;
    IVesting public vesting;
    INonfungiblePositionManager public positionManager;

    mapping(address => uint256) public contributions;
    mapping(address => uint256) public purchasedTokens;
    mapping(address => bool) public claimed; // To track if a participant has claimed their tokens

    // Events
    event Contribution(address indexed contributor, uint256 amount);
    event Finalized();
    event Claimed(address indexed claimer, uint256 amount);
    event FundsClaimed(address indexed claimer, uint256 amount);
    event Failed();
    event SwapPairInitialized(uint256 tokenId);

    /**
     * @dev Constructor to initialize the fundraiser contract
     * @param owner Owner of the fundraiser
    */
    constructor(address owner)
    Ownable(owner) {
    }

    /**
     * @dev Initializes the fundraiser contract
     * Typically called by the factory contract
     * @param _saleToken The token to be sold
     * @param _raiseToken The token to be raised
     * @param _projectName The name of the project
     * @param _description The description of the project
     * @param _websiteLink The website link of the project
     * @param _campaign The campaign contract to be used
     * @param _vestingStartDelta The start of the vesting in seconds after the end of the fundraising
     * @param _vestingDuration The duration of the vesting in seconds
     * @param _positionManager The Uniswap V3 position manager contract
     * @param _vesting The vesting contract that is created only if vesting is enabled
    */
    function initialize(
        address _saleToken,
        address _raiseToken,
        string memory _projectName,
        string memory _description,
        string memory _websiteLink,
        ICampaign _campaign,
        uint256 _vestingStartDelta,
        uint256 _vestingDuration,
        address _positionManager,
        IVesting _vesting
    ) public initializer {

        // Sanitize inputs
        require(_saleToken != address(0), "Sale token address cannot be zero");
        require(_raiseToken != address(0), "Raise token address cannot be zero");
        require(_positionManager != address(0), "Position manager address cannot be zero");
        require(_campaign != ICampaign(address(0)), "Campaign address cannot be zero");
        require(_vestingDuration == 0 || _vesting != IVesting(address(0)), "Vesting address cannot be zero if vesting is enabled");

        saleToken = IERC20(_saleToken);
        raiseToken = IERC20(_raiseToken);
        projectName = _projectName;
        description = _description;
        websiteLink = _websiteLink;
        campaign = _campaign;
        positionManager = INonfungiblePositionManager(_positionManager);

        vestingDuration = _vestingDuration;
        vestingStartDelta = _vestingStartDelta;
        vesting = IVesting(_vesting);
    }

    /**
     * @dev Contribute to the fundraising campaign
     * @param amount The amount of raise tokens to contribute
    */
    function contribute(uint256 amount) public {
        uint256 tokens = campaign.contribute(amount, msg.sender);
        
        raiseToken.safeTransferFrom(msg.sender, address(this), amount);
        contributions[msg.sender] += amount;
        purchasedTokens[msg.sender] += tokens;
        raisedAmount += amount;
        soldAmount += tokens;

        emit Contribution(msg.sender, amount);
    }

    /**
     * @dev Finalize the fundraising campaign when the goal is reached
    */
    function finalize() public onlyOwner {
        require(!finalized, "Already finalized");
        require(!failed, "Fundraising failed");
        campaign.handleFinalization(); // Check if the campaign is successful
        finalized = true;
        // Transfer raised tokens to the owner
        raiseToken.safeTransfer(owner(), raisedAmount);
        // Transfer remaining sale tokens to the owner
        uint256 saleTokenBalance = saleToken.balanceOf(address(this));
        if(saleTokenBalance > soldAmount) {
            saleToken.safeTransfer(owner(), saleTokenBalance - soldAmount);
        }
        // If vesting is enabled transfer sold tokens to the vesting contract
        if (vestingDuration > 0) {
            saleToken.safeTransfer(address(vesting), soldAmount);
        }
        finalizedTimestamp = block.timestamp;
        emit Finalized();
    }

    /**
     * @dev Set the fundraising as failed if the campaign type allows so
    */
    function setFailed() public onlyOwner {
        require(!finalized, "Fundraising already finalized");
        campaign.handleFailure();
        failed = true;
        // Send back the sale tokens to the owner
        uint256 saleTokenBalance = saleToken.balanceOf(address(this));
        saleToken.safeTransfer(owner(), saleTokenBalance);
        emit Failed();
    }

    /**
     * @dev Claim raise tokens back if the fundraising is set as failed
    */
    function claimFunds() public {
        require(failed, "Raise not failed");
        require(!claimed[msg.sender], "Funds already claimed");
        claimed[msg.sender] = true;

        uint256 contributionAmount = contributions[msg.sender];
        raiseToken.safeTransfer(msg.sender, contributionAmount);
        emit FundsClaimed(msg.sender, contributionAmount);
    }

    /**
     * @dev Claim the tokens after the fundraising is finalized
    */
    function claimTokens() public {
        require(finalized, "Fundraising not finalized");
        require(swapPairCreated, "Swap pair not created");
        require(!claimed[msg.sender], "Tokens already claimed");
        claimed[msg.sender] = true;
        
        uint256 tokenAmount = purchasedTokens[msg.sender];
        // If vesting is enabled, add the vesting schedule
        if(vestingDuration > 0) {
            vesting.addVestingSchedule(msg.sender, finalizedTimestamp + vestingStartDelta, vestingDuration, tokenAmount);
        } else {
            // Transfer the tokens to the claimer
            saleToken.safeTransfer(msg.sender, tokenAmount);
        }
        
        emit Claimed(msg.sender, tokenAmount);
    }

    /**
     * @dev Initialize the swap pair after the fundraising is finalized
     * @param poolFee The fee to be charged by the pool
     * @param tickLower The lower tick of the pool
     * @param tickUpper The upper tick of the pool
    */
    function initSwapPair(uint24 poolFee, int24 tickLower, int24 tickUpper) public onlyOwner {
        require(finalized, "Fundraising not finalized");
        require(!swapPairCreated, "Swap pair already created");
        swapPairCreated = true;

        uint256 saleTokenBalance = saleToken.balanceOf(address(this));
        uint256 raiseTokenBalance = raiseToken.balanceOf(address(this));
        // In case vesting is not enabled the sale tokens are still in the contract
        if(vestingDuration == 0) {
            require(saleTokenBalance > soldAmount, "Not enough sale tokens to create the swap pair");
            saleTokenBalance -= soldAmount; // The liquidity of sale token used to create the pair is the one added on top of the sold tokens
        }

        require(saleTokenBalance > 0 && raiseTokenBalance > 0, "Not enough liquidity to create the swap pair");

        // Approve the position manager to manage tokens
        saleToken.safeIncreaseAllowance(address(positionManager), saleTokenBalance);
        raiseToken.safeIncreaseAllowance(address(positionManager), raiseTokenBalance);

        // Create the pool and add liquidity
        INonfungiblePositionManager.MintParams memory params = INonfungiblePositionManager.MintParams({
            token0: address(saleToken),
            token1: address(raiseToken),
            fee: poolFee,
            tickLower: tickLower,
            tickUpper: tickUpper,
            amount0Desired: saleTokenBalance,
            amount1Desired: raiseTokenBalance,
            amount0Min: 0,
            amount1Min: 0,
            recipient: owner(),
            deadline: block.timestamp
        });

        (uint256 tokenId,,,) = positionManager.mint(params);

        emit SwapPairInitialized(tokenId);
    }
}
