// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

import "./interfaces/IVesting.sol";
import "./interfaces/INonfungiblePositionManager.sol";
import "./interfaces/ICampaign.sol";
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';

/// @title Interface for WETH9
interface IWETH9 is IERC20 {
    /// @notice Deposit ether to get wrapped ether
    function deposit() external payable;

    /// @notice Withdraw wrapped ether to get ether
    function withdraw(uint256) external;
}

contract Fundraiser is Ownable, Initializable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    struct ProjectInformation {
        string projectName;
        string description;
        string websiteLink;
        string logoUrl;
    }

    struct FundraiserParams {
        address saleToken;
        address raiseToken;
        string projectName;
        string description;
        string websiteLink;
        string logoUrl;
        ICampaign campaign;
        uint256 vestingStartDelta;
        uint256 vestingDuration;
        address positionManager;
        IVesting vesting;
        uint24 poolFee;
        uint8 poolLiquidity; //% of liquidity to be used for the pool
        uint256 liquidityLockDuration;
    }

    // Public state variables
    ProjectInformation public info;
    uint256 public vestingStartDelta;
    uint256 public vestingDuration; // Set to 0 for no vesting
    
    uint256 public raisedAmount; // Total raised amount in raised tokens
    uint256 public soldAmount; // Total amount of tokens sold
    uint256 public participantsCount;
    uint256 public finalizedTimestamp;
    uint256 public createdTimestamp;
    
    IERC20 public saleToken;
    IERC20 public raiseToken;
    ICampaign public campaign;
    IVesting public vesting;
    INonfungiblePositionManager public positionManager;
    IWETH9 public immutable WETH = IWETH9(0xbeED106D0f2e6950BFa1Eec74E1253CA0a643442);
    address public pool;

    mapping(address => uint256) public contributions;
    mapping(address => uint256) public purchasedTokens;
    mapping(address => bool) public claimed; // To track if a participant has claimed their tokens

    // Enum to track the state of the contract
    enum FundraiserState { Active, Finalized, Failed }
    FundraiserState public state;
    uint24 public poolFee;
    uint8 public poolLiquidity;
    uint256 public liquidityLockDuration;
    uint256 public liquidityTokenId;

    // Events
    event Contribution(address indexed contributor, uint256 amount);
    event Finalized();
    event Claimed(address indexed claimer, uint256 amount);
    event FundsClaimed(address indexed claimer, uint256 amount);
    event Failed();
    event SwapPairInitialized(uint256 tokenId, uint256 liquidity);
    event LiquidityClaimed();

    /**
     * @dev Constructor to initialize the fundraiser contract
     * @param owner_ Owner of the fundraiser
    */
    constructor(address owner_)
    Ownable() {
        _transferOwnership(owner_);
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
        require(params.poolLiquidity <= 100, "Invalid liquidity percentage");

        saleToken = IERC20(params.saleToken);
        raiseToken = IERC20(params.raiseToken);
        info = ProjectInformation(params.projectName, params.description, params.websiteLink, params.logoUrl);
        campaign = params.campaign;
        positionManager = INonfungiblePositionManager(params.positionManager);

        vestingDuration = params.vestingDuration;
        vestingStartDelta = params.vestingStartDelta;
        vesting = IVesting(params.vesting);
        state = FundraiserState.Active;
        poolFee = params.poolFee;
        poolLiquidity = params.poolLiquidity;
        liquidityLockDuration = params.liquidityLockDuration;

        createdTimestamp = block.timestamp;

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
        pool = positionManager.createAndInitializePoolIfNecessary(
            token0,
            token1,
            poolFee,
            uint160(_computeSqrtPriceX96(token0Amount, token1Amount)));
    }

    /**
     * @dev Contribute to the fundraising campaign
     * @param amount The amount of raise tokens to contribute, 0 for GLQ
    */
    function contribute(uint256 amount) public payable nonReentrant {
        require(state == FundraiserState.Active, "Fundraising is not active");

        uint256 contributionAmount = amount;

        // If GLQ is sent, ensure it's the exact raiseToken and wrap it
        if (msg.value > 0) {
            require(address(raiseToken) == address(WETH), "GLW can only be used with WGLW as the raise token");
            require(amount == 0, "Cannot specify both ETH and token amount");
            contributionAmount = msg.value;

            // Wrap ETH into WETH
            WETH.deposit{value: msg.value}();
        } else {
            // Ensure sufficient allowance for token transfers
            uint256 allowance = raiseToken.allowance(msg.sender, address(this));
            require(allowance >= amount, "Insufficient allowance");

            // Transfer raiseToken from the contributor
            raiseToken.safeTransferFrom(msg.sender, address(this), amount);
        }

        // Process contribution
        uint256 tokens = campaign.contribute(contributionAmount, msg.sender);
        // count unique participants
        if(contributions[msg.sender] == 0) {
            participantsCount++;
        }
        contributions[msg.sender] += contributionAmount;
        purchasedTokens[msg.sender] += tokens;
        raisedAmount += contributionAmount;
        soldAmount += tokens;

        emit Contribution(msg.sender, contributionAmount);
    }


    /**
     * @dev Finalize the fundraising campaign when the goal is reached
     * @notice This fetches the sale tokens from the owner
     * @notice This transfers raised tokens to the owner
     * @notice This transfers unsold tokens to the owner
    */
    function finalize() public onlyOwner nonReentrant {
        require(state == FundraiserState.Active, "Fundraising not active");
        state = FundraiserState.Finalized;
        campaign.handleFinalization(); // Check if the campaign is successful
        uint256 saleTokenBalance = saleToken.balanceOf(address(this));
        if(poolLiquidity > 0) {
            // compute required raise token liquidity
            uint256 desiredRaiseTokenLiquidity = (poolLiquidity * raisedAmount) / 100;
            // compute required sale token liquidity
            (uint256 requiredSaleTokenLiquidity, ) = getRequiredAmountsForLiquidity(desiredRaiseTokenLiquidity);
            // procure the sale tokens from the owner for liquidity and for contributors
            if(saleTokenBalance < soldAmount + requiredSaleTokenLiquidity) {
                require(saleToken.allowance(owner(), address(this)) >= soldAmount - saleTokenBalance + requiredSaleTokenLiquidity, "Insufficient sale token allowance");
                saleToken.safeTransferFrom(owner(), address(this), soldAmount - saleTokenBalance + requiredSaleTokenLiquidity);
            }

            _initSwapPair(-887220, 887220, desiredRaiseTokenLiquidity, requiredSaleTokenLiquidity); // use wide range liquidity
        }

        // Transfer raised tokens to the owner
        if (address(raiseToken) == address(WETH)) {
            // Unwrap WETH into GLQ
            uint256 wGLQBalance = WETH.balanceOf(address(this));
            WETH.withdraw(wGLQBalance);
            payable(owner()).transfer(wGLQBalance);
        } else {
            raiseToken.safeTransfer(owner(), raiseToken.balanceOf(address(this)));
        }

        // Transfer remaining sale tokens to the owner
        saleTokenBalance = saleToken.balanceOf(address(this));
        if (saleTokenBalance > soldAmount) {
            saleToken.safeTransfer(owner(), saleTokenBalance - soldAmount);
        }

        // If vesting is enabled, transfer sold tokens to the vesting contract
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
        if(saleTokenBalance > 0) {
            saleToken.safeTransfer(owner(), saleTokenBalance);
        }
    }

    /**
     * @dev Claim raise tokens back if the fundraising is set as failed
    */
    function claimFunds() public {
        require(state == FundraiserState.Failed, "Raise not failed");
        require(!claimed[msg.sender], "Funds already claimed");
        claimed[msg.sender] = true;

        uint256 contributionAmount = contributions[msg.sender];

        if (address(raiseToken) == address(WETH)) {
            // Unwrap WETH into GLQ
            WETH.withdraw(contributionAmount);
            payable(msg.sender).transfer(contributionAmount);
        } else {
            // Transfer raiseToken
            raiseToken.safeTransfer(msg.sender, contributionAmount);
        }

        emit FundsClaimed(msg.sender, contributionAmount);
    }


    /**
     * @dev Claim the tokens after the fundraising is finalized
    */
    function claimTokens() public nonReentrant() {
        require(state == FundraiserState.Finalized, "Swap pair not created");
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
     * @dev Claim the liquidity token after locking duration is passed
    */
    function claimLiquidityToken() public onlyOwner {
        require(state == FundraiserState.Finalized, "Fundraising not finalized");
        require(liquidityTokenId != 0, "Liquidity token not minted");
        require(block.timestamp >= finalizedTimestamp + liquidityLockDuration, "Liquidity lock duration not passed");
        IERC721(address(positionManager)).transferFrom(address(this), owner(), liquidityTokenId);
        emit LiquidityClaimed();
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
    * @param raiseTokenLiquidity The amount of raise tokens to be used for liquidity
    * @param saleTokenLiquidity The amount of sale tokens to be used for liquidity
    */
    function _initSwapPair(int24 tickLower, int24 tickUpper, uint256 raiseTokenLiquidity, uint256 saleTokenLiquidity) private {
        // Get the token order and use the token0 and 1 format after that
        (address token0,
        address token1,
        uint256 token0Amount,
        uint256 token1Amount) = _getTokenOrder(
            address(saleToken),
            address(raiseToken),
            saleTokenLiquidity,
            raiseTokenLiquidity);

        // Approve the position manager to manage tokens
        IERC20(token0).safeIncreaseAllowance(address(positionManager), token0Amount);
        IERC20(token1).safeIncreaseAllowance(address(positionManager), token1Amount);

        // if liquidity is to be locked, store it in this contract
        address tokenDestination = owner();
        if (liquidityLockDuration > 0) {
            tokenDestination = address(this);
        }

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
            recipient: tokenDestination,
            deadline: block.timestamp
        });

        (uint256 tokenId, uint128 liquidity,,) = positionManager.mint(params);
        liquidityTokenId = tokenId; // Store the liquidity token ID

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

    receive() external payable {
        require(msg.sender == address(WETH), "Direct ETH deposits not allowed");
    }

    fallback() external payable {
        revert("Fallback function triggered");
    }

}
