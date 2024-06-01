// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "openzeppelin-contracts/token/ERC20/IERC20.sol";
import "openzeppelin-contracts/token/ERC20/utils/SafeERC20.sol";
import "openzeppelin-contracts/access/Ownable.sol";
import "openzeppelin-contracts/utils/ReentrancyGuard.sol";
import "openzeppelin-contracts-upgradeable/proxy/utils/Initializable.sol";
import "openzeppelin-contracts/utils/math/Math.sol";

import "./interfaces/IVesting.sol";
import "./interfaces/INonfungiblePositionManager.sol";
import "./interfaces/ICampaign.sol";

contract Fundraiser is Ownable, Initializable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    struct ProjectInformation {
        string projectName;
        string description;
        string websiteLink;
    }

    struct FundraiserParams {
        address saleToken;
        address raiseToken;
        string projectName;
        string description;
        string websiteLink;
        ICampaign campaign;
        uint256 vestingStartDelta;
        uint256 vestingDuration;
        address positionManager;
        IVesting vesting;
        uint24 poolFee;
    }

    // Public state variables
    ProjectInformation public info;
    uint256 public vestingStartDelta;
    uint256 public vestingDuration; // Set to 0 for no vesting
    
    uint256 public raisedAmount; // Total raised amount in raised tokens
    uint256 public soldAmount; // Total amount of tokens sold
    uint256 public finalizedTimestamp;
    
    IERC20 public saleToken;
    IERC20 public raiseToken;
    ICampaign public campaign;
    IVesting public vesting;
    INonfungiblePositionManager public positionManager;

    mapping(address => uint256) public contributions;
    mapping(address => uint256) public purchasedTokens;
    mapping(address => bool) public claimed; // To track if a participant has claimed their tokens

    // Enum to track the state of the contract
    enum FundraiserState { Active, Finalized, Failed, SwapPairCreated }
    FundraiserState public state;
    uint24 public poolFee;

    // Events
    event Contribution(address indexed contributor, uint256 amount);
    event Finalized();
    event Claimed(address indexed claimer, uint256 amount);
    event FundsClaimed(address indexed claimer, uint256 amount);
    event Failed();
    event SwapPairInitialized(uint256 tokenId, uint256 liquidity);
    event LiquidityMintingFailed();

    /**
     * @dev Constructor to initialize the fundraiser contract
     * @param owner_ Owner of the fundraiser
    */
    constructor(address owner_)
    Ownable(owner_) {
    }

    /**
     * @dev Initializes the fundraiser contract
     * Typically called by the factory contract
     * @param params The parameters for initializing the fundraiser
    */
    function initialize(FundraiserParams memory params) public initializer {
        // Sanitize inputs
        require(params.saleToken != address(0), "Sale token address cannot be zero");
        require(params.raiseToken != address(0), "Raise token address cannot be zero");
        require(params.positionManager != address(0), "Position manager address cannot be zero");
        require(params.campaign != ICampaign(address(0)), "Campaign address cannot be zero");
        require(params.vestingDuration == 0 || params.vesting != IVesting(address(0)),
        "Vesting address cannot be zero if vesting is enabled");
        require(params.poolFee == 10000 || params.poolFee == 3000 || params.poolFee == 500, "Invalid pool fee");

        saleToken = IERC20(params.saleToken);
        raiseToken = IERC20(params.raiseToken);
        info = ProjectInformation(params.projectName, params.description, params.websiteLink);
        campaign = params.campaign;
        positionManager = INonfungiblePositionManager(params.positionManager);

        vestingDuration = params.vestingDuration;
        vestingStartDelta = params.vestingStartDelta;
        vesting = IVesting(params.vesting);
        state = FundraiserState.Active;
        poolFee = params.poolFee;

        // init the pool here to prevent malicious actors from creating the pool with wrong values

        // compute initial sqrtPriceX96 and create the pool using dummy values
        (uint256 saleTokensAmount, ) = getRequiredAmountsForLiquidity(1000 * 10**18);

        // this is not order agnostic
        (address token0,
        address token1,
        uint256 token0Amount,
        uint256 token1Amount) = _getTokenOrder(
            address(saleToken),
            address(raiseToken),
            saleTokensAmount,
            1000 * 10**18);

        // Compute sqrtPriceX96 and init the pool
        positionManager.createAndInitializePoolIfNecessary(
            token0,
            token1,
            poolFee,
            uint160(_computeSqrtPriceX96(token0Amount, token1Amount)));
    }

    /**
     * @dev Contribute to the fundraising campaign
     * @param amount The amount of raise tokens to contribute
    */
    function contribute(uint256 amount) public nonReentrant() {
        require(state == FundraiserState.Active, "Fundraising is not active");
        uint256 tokens = campaign.contribute(amount, msg.sender);
        contributions[msg.sender] += amount;
        purchasedTokens[msg.sender] += tokens;
        raisedAmount += amount;
        soldAmount += tokens;
        
        raiseToken.safeTransferFrom(msg.sender, address(this), amount);
        emit Contribution(msg.sender, amount);
    }

    /**
     * @dev Finalize the fundraising campaign when the goal is reached
    */
    function finalize() public onlyOwner nonReentrant() {
        require(state == FundraiserState.Active, "Fundraising not active");
        state = FundraiserState.Finalized;
        campaign.handleFinalization(); // Check if the campaign is successful
        
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
     * or if liquidity minting failed
    */
    function setFailed() public onlyOwner nonReentrant() {
        require(state == FundraiserState.Active, "Fundraising not active");
        campaign.handleFailure();
        state = FundraiserState.Failed;
        // Send back the sale tokens to the owner
        uint256 saleTokenBalance = saleToken.balanceOf(address(this));
        emit Failed();
        saleToken.safeTransfer(owner(), saleTokenBalance);
    }

    /**
     * @dev Claim raise tokens back if the fundraising is set as failed
    */
    function claimFunds() public {
        require(state == FundraiserState.Failed, "Raise not failed");
        require(!claimed[msg.sender], "Funds already claimed");
        claimed[msg.sender] = true;

        uint256 contributionAmount = contributions[msg.sender];
        emit FundsClaimed(msg.sender, contributionAmount);
        raiseToken.safeTransfer(msg.sender, contributionAmount);
    }

    /**
     * @dev Claim the tokens after the fundraising is finalized
    */
    function claimTokens() public nonReentrant() {
        require(state == FundraiserState.SwapPairCreated, "Swap pair not created");
        require(!claimed[msg.sender], "Tokens already claimed");
        claimed[msg.sender] = true;
        
        uint256 tokenAmount = purchasedTokens[msg.sender];
        // If vesting is enabled, add the vesting schedule
        if(vestingDuration > 0) {
            vesting.addVestingSchedule(msg.sender,
                                        finalizedTimestamp + vestingStartDelta,
                                        vestingDuration, tokenAmount);
        } else {
            // Transfer the tokens to the claimer
            saleToken.safeTransfer(msg.sender, tokenAmount);
        }
        
        emit Claimed(msg.sender, tokenAmount);
    }

    /**
     * @dev View function to compute the required amounts of both tokens to create the pair
     * @param raiseTokenAmount The amount of raise tokens to be used for liquidity
     * @return requiredSaleTokens The amount of sale tokens required
     * @return raiseTokenAmount The amount of raise tokens to be used
     */
    function getRequiredAmountsForLiquidity(uint256 raiseTokenAmount) public view 
    returns (uint256 requiredSaleTokens, uint256) {
        uint256 pricePerToken = campaign.pricePerToken();
        require(pricePerToken > 0, "Price per token must be greater than zero");

        requiredSaleTokens = (raiseTokenAmount * (10**18)) / pricePerToken;
        return (requiredSaleTokens, raiseTokenAmount);
    }

    function _getTokenOrder(address tokenA, address tokenB, uint256 tokenAAmount, uint256 tokenBAmount)
    private pure returns (address token0_, address token1_, uint256 token0Amount_, uint256 token1Amount_) {
        require(tokenA != tokenB, "Tokens must be different");

        // Determine token0 and token1 based on the address comparison
        if (tokenA < tokenB) {
            token0_ = tokenA;
            token1_ = tokenB;
            token0Amount_ = tokenAAmount;
            token1Amount_ = tokenBAmount;
        } else {
            token0_ = tokenB;
            token1_ = tokenA;
            token0Amount_ = tokenBAmount;
            token1Amount_ = tokenAAmount;
        }
    }

    /**
    * @dev Initialize the swap pair after the fundraising is finalized
    * @param tickLower The lower tick of the pool
    * @param tickUpper The upper tick of the pool
    */
    function initSwapPair(int24 tickLower, int24 tickUpper) public onlyOwner nonReentrant() {
        require(state == FundraiserState.Finalized, "Fundraising not finalized");
        state = FundraiserState.SwapPairCreated;

        uint256 saleTokenBalance = saleToken.balanceOf(address(this));
        uint256 raiseTokenBalance = raiseToken.balanceOf(address(this));
        uint256 availableSaleTokens = saleTokenBalance;

        // In case vesting is not enabled the sale tokens are still in the contract
        if (vestingDuration == 0) {
            require(saleTokenBalance > soldAmount, "Not enough sale tokens to create the swap pair");
            availableSaleTokens = saleTokenBalance - soldAmount;
        }

        (uint256 requiredSaleTokens, uint256 requiredRaiseTokens) = getRequiredAmountsForLiquidity(raiseTokenBalance);
        require(requiredSaleTokens <= availableSaleTokens, "Not enough liquidity to create the swap pair");

        // Get the token order and use the token0 and 1 format after that
        (address token0,
        address token1,
        uint256 token0Amount,
        uint256 token1Amount) = _getTokenOrder(
            address(saleToken),
            address(raiseToken),
            requiredSaleTokens,
            requiredRaiseTokens);

        // Approve the position manager to manage tokens
        IERC20(token0).safeIncreaseAllowance(address(positionManager), token0Amount);
        IERC20(token1).safeIncreaseAllowance(address(positionManager), token1Amount);

        // add liquidity
        INonfungiblePositionManager.MintParams memory params = INonfungiblePositionManager.MintParams({
            token0: token0,
            token1: token1,
            fee: poolFee,
            tickLower: tickLower,
            tickUpper: tickUpper,
            amount0Desired: token0Amount,
            amount1Desired: token1Amount,
            amount0Min: 0,
            amount1Min: 0,
            recipient: msg.sender,
            deadline: block.timestamp
        });

        (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1) = positionManager.mint(params);
        // reimburse unutilized tokens
        if(amount0 < token0Amount)
            IERC20(token0).safeTransfer(msg.sender, token0Amount - amount0);
        if(amount1 < token1Amount)
            IERC20(token1).safeTransfer(msg.sender, token1Amount - amount1);

        emit SwapPairInitialized(tokenId, liquidity);
    }

    /**
     * @dev Internal function to compute the sqrtPriceX96
     * @param token0Amount Amount of token0
     * @param token1Amount Amount of token1
     * @return sqrtPriceX96 The computed sqrtPriceX96
    */
    function _computeSqrtPriceX96(uint256 token0Amount, uint256 token1Amount) internal pure returns (uint160) {
        uint256 ratioX96 = (token1Amount << 96) / token0Amount;
        uint160 sqrtPriceX96 = uint160(Math.sqrt(ratioX96) << 48); // Shift by 48 to get the sqrtPriceX96 format
        return sqrtPriceX96;
    }
}
