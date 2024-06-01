// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/FundraiserFactory.sol";
import "../src/Fundraiser.sol";
import "../src/Vesting.sol";
import "../src/StealthLaunchFactory.sol";
import "../src/FairLaunchFactory.sol";
import "../src/StealthLaunchCampaign.sol";
import "../src/FairLaunchCampaign.sol";
import "../src/interfaces/ICampaign.sol";
import "../src/interfaces/ICampaignFactory.sol";
import "../src/test/MockERC20.sol";
import "openzeppelin-contracts/token/ERC20/IERC20.sol";
import "openzeppelin-contracts/token/ERC20/ERC20.sol";
import "openzeppelin-contracts/access/Ownable.sol";
import "openzeppelin-contracts/token/ERC20/utils/SafeERC20.sol";

import "uniswap-v3-periphery/interfaces/IQuoter.sol";

contract FundraiserFactoryTest is Test {
    FundraiserFactory private factory;
    StealthLaunchFactory private stealthFactory;
    FairLaunchFactory private fairFactory;
    address private owner;
    MockERC20 private saleToken;
    MockERC20 private raiseToken;
    uint8 private stealthLaunchID;
    uint8 private fairLaunchID;
    IQuoter private quoter;

    function setUp() public {
        owner = address(this);

        // Deploy the factory contracts
        factory = new FundraiserFactory();
        stealthFactory = new StealthLaunchFactory();
        fairFactory = new FairLaunchFactory();

        // Initialize the factories
        factory.initialize();

        // Register the campaign factories
        stealthLaunchID = factory.campaignID();
        factory.registerCampaign(ICampaignFactory(address(stealthFactory)));

        fairLaunchID = factory.campaignID();
        factory.registerCampaign(ICampaignFactory(address(fairFactory)));

        // Deploy mock tokens
        saleToken = new MockERC20("Sale Token", "SALE");
        raiseToken = new MockERC20("Raise Token", "RAISE");

        // Initialize Uniswap V3 router and quoter
        quoter = IQuoter(address(0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6)); // Replace with the actual address on final chain
    }

    function testCreateStealthLaunchFundraiser() public {
        // Prepare parameters for the fundraiser
        bytes memory fundraiserParams = abi.encode(
            "Stealth Project",
            "This is a stealth launch project.",
            "https://stealthproject.com",
            address(saleToken),
            address(raiseToken),
            3600,  // Vesting starts 1 hour after finalization
            86400,  // Vesting duration of 24 hours
            3000    // pool fee
        );

        bytes memory campaignParams = abi.encode(
            10000 * 10**18,  // Max cap of 10000 tokens
            1 * 10**18  // 1 ETH per token
        );

        // Create the fundraiser
        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, stealthLaunchID);

        // Assertions
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);
        (string memory projectName, string memory description, string memory websiteLink) = fundraiser.info();
        assertEq(projectName, "Stealth Project");
        assertEq(description, "This is a stealth launch project.");
        assertEq(websiteLink, "https://stealthproject.com");
    }

    function testCreateFairLaunchFundraiser() public {
        // Prepare parameters for the fundraiser
        bytes memory fundraiserParams = abi.encode(
            "Fair Project",
            "This is a fair launch project.",
            "https://fairproject.com",
            address(saleToken),
            address(raiseToken),
            3600,  // Vesting starts 1 hour after finalization
            86400,  // Vesting duration of 24 hours
            3000    // pool fee
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp + 3600,  // End time 1 hour from now
            1000 * 10**18,  // Minimum goal of 1000 tokens
            1 * 10**18  // 1 ETH per token
        );

        // Create the fundraiser
        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID);

        // Assertions
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);
        (string memory projectName, string memory description, string memory websiteLink) = fundraiser.info();
        assertEq(projectName, "Fair Project");
        assertEq(description, "This is a fair launch project.");
        assertEq(websiteLink, "https://fairproject.com");
    }

    function testContributeToFundraiser() public {
        // Create a fundraiser with Stealth Launch Campaign
        bytes memory fundraiserParams = abi.encode(
            "Test Project",
            "This is a test project.",
            "https://testproject.com",
            address(saleToken),
            address(raiseToken),
            3600,  // Vesting starts 1 hour after finalization
            86400, // Vesting duration of 24 hours
            3000   // pool fee
        );

        bytes memory campaignParams = abi.encode(
            10000 * 10**18,  // Max cap of 10000 tokens
            1 * 10**18  // 1 ETH per token
        );

        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, stealthLaunchID);
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);

        // Mint sale tokens to the fundraiser
        saleToken.mint(fundraiserAddress, 10000 * 10**18);

        // Mint raise tokens to the contributor
        raiseToken.mint(address(this), 500 * 10**18);

        // Approve the fundraiser to spend raise tokens
        IERC20(address(raiseToken)).approve(fundraiserAddress, 500 * 10**18);

        // Contribute to the fundraiser
        fundraiser.contribute(500 * 10**18);

        // Assertions
        assertEq(fundraiser.raisedAmount(), 500 * 10**18, "Raised amount mismatch");
        assertEq(fundraiser.contributions(address(this)), 500 * 10**18, "Contribution amount mismatch");
    }

    function testFinalizeFundraiser() public {
        // Create a fundraiser with Fair Launch Campaign
        bytes memory fundraiserParams = abi.encode(
            "Test Project",
            "This is a test project.",
            "https://testproject.com",
            address(saleToken),
            address(raiseToken),
            3600,  // Vesting starts 1 hour after finalization
            86400,  // Vesting duration of 24 hours
            3000    // pool fee
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp + 3600,  // End time 1 hour from now
            1000 * 10**18,  // Minimum goal of 1000 tokens
            1 * 10**18  // 1 ETH per token
        );

        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID);
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);

        // Mint sale tokens to the fundraiser
        saleToken.mint(fundraiserAddress, 10000 * 10**18);

        // Mint raise tokens to the contributor
        raiseToken.mint(address(this), 1000 * 10**18);

        // Approve the fundraiser to spend raise tokens
        IERC20(address(raiseToken)).approve(fundraiserAddress, 1000 * 10**18);

        // Contribute to the fundraiser
        fundraiser.contribute(1000 * 10**18);

        // Fast forward time to after the campaign end time
        vm.warp(block.timestamp + 3600);

        // Finalize the fundraiser
        fundraiser.finalize();

        // Assertions
        assertEq(uint(fundraiser.state()), uint(Fundraiser.FundraiserState.Finalized), "Fundraiser should be finalized");
    }

    function testInitSwapPair() public {
        // Create a fundraiser with Fair Launch Campaign
        bytes memory fundraiserParams = abi.encode(
            "Test Project",
            "This is a test project.",
            "https://testproject.com",
            address(saleToken),
            address(raiseToken),
            3600,  // Vesting starts 1 hour after finalization
            86400,  // Vesting duration of 24 hours
            3000
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp + 3600,  // End time 1 hour from now
            1000 * 10**18,  // Minimum goal of 1000 tokens
            1 * 10**18  // 1 ETH per token
        );

        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID);
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);

        // Mint sale tokens to the fundraiser
        saleToken.mint(fundraiserAddress, 10000 * 10**18);

        // Mint raise tokens to the contributor
        raiseToken.mint(address(this), 1000 * 10**18);

        // Approve the fundraiser to spend raise tokens
        IERC20(address(raiseToken)).approve(fundraiserAddress, 1000 * 10**18);

        // Contribute to the fundraiser
        fundraiser.contribute(1000 * 10**18);

        // Fast forward time to after the campaign end time
        vm.warp(block.timestamp + 3600);

        // Finalize the fundraiser
        fundraiser.finalize();

        // Initialize the swap pair
        (uint256 requiredSaleTokens, ) = fundraiser.getRequiredAmountsForLiquidity(100 * 10**18);
        saleToken.mint(fundraiserAddress, requiredSaleTokens);
        raiseToken.mint(fundraiserAddress, 100 * 10**18);

        fundraiser.initSwapPair(-887220, 887220);
    }

    function testClaimTokens() public {
        // Create a fundraiser with Fair Launch Campaign
        bytes memory fundraiserParams = abi.encode(
            "Test Project",
            "This is a test project.",
            "https://testproject.com",
            address(saleToken),
            address(raiseToken),
            3600,  // Vesting starts 1 hour after finalization
            86400,  // Vesting duration of 24 hours
            3000    // pool fee
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp + 3600,  // End time 1 hour from now
            1000 * 10**18,  // Minimum goal of 1000 tokens
            1 * 10**18  // 1 ETH per token
        );

        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID);
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);

        // Mint sale tokens to the fundraiser
        saleToken.mint(fundraiserAddress, 10000 * 10**18);

        // Mint raise tokens to the contributor
        raiseToken.mint(address(this), 1000 * 10**18);

        // Approve the fundraiser to spend raise tokens
        IERC20(address(raiseToken)).approve(fundraiserAddress, 1000 * 10**18);

        // Contribute to the fundraiser
        fundraiser.contribute(1000 * 10**18);

        // Fast forward time to after the campaign end time
        vm.warp(block.timestamp + 3600);

        // Finalize the fundraiser
        fundraiser.finalize();

        // Initialize the swap pair
        (uint256 requiredSaleTokens, ) = fundraiser.getRequiredAmountsForLiquidity(100 * 10**18);
        saleToken.mint(fundraiserAddress, requiredSaleTokens);
        raiseToken.mint(fundraiserAddress, 100 * 10**18);

        fundraiser.initSwapPair(-887220, 887220);

        // Fast forward time to after the vesting start
        vm.warp(block.timestamp + 3600);

        // Claim tokens
        fundraiser.claimTokens();

        // Assertions
        assertTrue(fundraiser.claimed(address(this)), "Tokens should be claimed");
    }

    function testFailedFundraise() public {
        // Create a fundraiser with Fair Launch Campaign with a higher goal than will be met
        bytes memory fundraiserParams = abi.encode(
            "Failed Project",
            "This is a failed project.",
            "https://failedproject.com",
            address(saleToken),
            address(raiseToken),
            3600,  // Vesting starts 1 hour after finalization
            86400  // Vesting duration of 24 hours
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp + 3600,  // End time 1 hour from now
            10000 * 10**18,  // Minimum goal of 10000 tokens
            1 * 10**18  // 1 ETH per token
        );

        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID);
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);

        // Mint sale tokens to the fundraiser
        saleToken.mint(fundraiserAddress, 10000 * 10**18);

        // Mint raise tokens to the contributor
        raiseToken.mint(address(this), 500 * 10**18);

        // Approve the fundraiser to spend raise tokens
        IERC20(address(raiseToken)).approve(fundraiserAddress, 500 * 10**18);

        // Contribute to the fundraiser
        fundraiser.contribute(500 * 10**18);

        // Fast forward time to after the campaign end time
        vm.warp(block.timestamp + 3601);

        // Finalize the fundraiser
        fundraiser.setFailed();

        // Assertions
        assertEq(uint(fundraiser.state()), uint(Fundraiser.FundraiserState.Failed), "Fundraiser should be failed");

        // Claim funds
        uint256 initialBalance = raiseToken.balanceOf(address(this));
        fundraiser.claimFunds();
        uint256 finalBalance = raiseToken.balanceOf(address(this));
        assertEq(finalBalance, initialBalance + 500 * 10**18, "Funds should be returned");
    }

    // Test multiple contributions
    function testMultipleContributions() public {
        bytes memory fundraiserParams = abi.encode(
            "Multiple Contributions Test",
            "Testing multiple contributions",
            "https://example.com",
            address(saleToken),
            address(raiseToken),
            3600,
            86400,
            3000
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp + 3600,  // End time 1 hour from now
            1000 * 10**18,
            1 * 10**18
        );

        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID);
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);

        // Mint raise tokens to the contributor
        raiseToken.mint(address(this), 1500 * 10**18);

        // Approve the fundraiser to spend raise tokens
        IERC20(address(raiseToken)).approve(fundraiserAddress, 1500 * 10**18);

        // Contribute multiple times
        fundraiser.contribute(500 * 10**18);
        fundraiser.contribute(500 * 10**18);
        fundraiser.contribute(500 * 10**18);

        // Assertions
        assertEq(fundraiser.raisedAmount(), 1500 * 10**18, "Raised amount mismatch");
        assertEq(fundraiser.contributions(address(this)), 1500 * 10**18, "Contribution amount mismatch");
    }

    // Test claiming tokens with vesting
    function testClaimTokensWithVesting() public {
        bytes memory fundraiserParams = abi.encode(
            "Claim Tokens with Vesting Test",
            "Testing claiming tokens with vesting",
            "https://example.com",
            address(saleToken),
            address(raiseToken),
            3600,
            86400,
            3000
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp + 3600,
            1000 * 10**18,
            1 * 10**18
        );

        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID);
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);

        // Mint sale tokens to the fundraiser
        saleToken.mint(fundraiserAddress, 10000 * 10**18);

        // Mint raise tokens to the contributor
        raiseToken.mint(address(this), 1000 * 10**18);

        // Approve the fundraiser to spend raise tokens
        IERC20(address(raiseToken)).approve(fundraiserAddress, 1000 * 10**18);

        // Contribute to the fundraiser
        fundraiser.contribute(1000 * 10**18);

        // Fast forward time to after the campaign end time
        vm.warp(block.timestamp + 3600);

        // Finalize the fundraiser
        fundraiser.finalize();

        // Initialize the swap pair
        (uint256 requiredSaleTokens, ) = fundraiser.getRequiredAmountsForLiquidity(100 * 10**18);
        saleToken.mint(fundraiserAddress, requiredSaleTokens);
        raiseToken.mint(fundraiserAddress, 100 * 10**18);

        fundraiser.initSwapPair(-887220, 887220);

        // Fast forward time to after the vesting start
        vm.warp(block.timestamp + 3600);

        // Claim tokens
        fundraiser.claimTokens();

        // Assertions
        assertTrue(fundraiser.claimed(address(this)), "Tokens should be claimed");
    }

    // Test claiming tokens without vesting
    function testClaimTokensWithoutVesting() public {
        bytes memory fundraiserParams = abi.encode(
            "Claim Tokens without Vesting Test",
            "Testing claiming tokens without vesting",
            "https://example.com",
            address(saleToken),
            address(raiseToken),
            0,  // No vesting
            0,   // No vesting duration
            3000
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp + 3600,
            1000 * 10**18,
            1 * 10**18
        );

        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID);
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);

        // Mint sale tokens to the fundraiser
        saleToken.mint(fundraiserAddress, 10000 * 10**18);

        // Mint raise tokens to the contributor
        raiseToken.mint(address(this), 1000 * 10**18);

        // Approve the fundraiser to spend raise tokens
        IERC20(address(raiseToken)).approve(fundraiserAddress, 1000 * 10**18);

        // Contribute to the fundraiser
        fundraiser.contribute(1000 * 10**18);

        // Fast forward time to after the campaign end time
        vm.warp(block.timestamp + 3600);

        // Finalize the fundraiser
        fundraiser.finalize();

        // Initialize the swap pair
        (uint256 requiredSaleTokens, ) = fundraiser.getRequiredAmountsForLiquidity(100 * 10**18);
        saleToken.mint(fundraiserAddress, requiredSaleTokens);
        raiseToken.mint(fundraiserAddress, 100 * 10**18);

        fundraiser.initSwapPair(-887220, 887220);

        // Claim tokens
        fundraiser.claimTokens();

        // Assertions
        assertTrue(fundraiser.claimed(address(this)), "Tokens should be claimed");
    }

    function testInitSwapPairAndCheckPrice() public {

        uint256 snapshotId = vm.snapshot();
        // Create two fundraisers with tokens in different orders
        // Fundraiser 1: saleToken < raiseToken
        _testInitSwapPairAndCheckPrice(
            saleToken, 
            raiseToken, 
            1 * 10**18 // pricePerToken
        );

        vm.revertTo(snapshotId);

        // Fundraiser 2: saleToken > raiseToken
        _testInitSwapPairAndCheckPrice(
            raiseToken, 
            saleToken, 
            100 * 10**18 // pricePerToken
        );
    }

    function _testInitSwapPairAndCheckPrice(
        MockERC20 sale, 
        MockERC20 raise, 
        uint256 pricePerToken
    ) internal {
        // Prepare parameters for the fundraiser
        bytes memory fundraiserParams = abi.encode(
            "Test Project",
            "This is a test project.",
            "https://testproject.com",
            address(sale), //sale
            address(raise), //rase
            3600,  // Vesting starts 1 hour after finalization
            86400,  // Vesting duration of 24 hours
            3000    // Pool fee
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp,  // End time is now
            0,  // Minimum goal of 0 tokens
            pricePerToken  // pricePerToken
        );

        // Create the fundraiser
        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID);
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);

        // Finalize the fundraiser
        fundraiser.finalize();

        // Mint tokens to the fundraiser
        sale.mint(fundraiserAddress, 10000 * 10**18);
        raise.mint(fundraiserAddress, 1000 * 10**18);

        // Initialize the swap pair
        fundraiser.initSwapPair(-887220, 887220);

        // Swap tokens to check the price
        uint256 amountIn = 1 * 10**18; // Amount to swap
        uint256 expectedAmountOut = quoter.quoteExactInputSingle(
                address(raise),
                address(sale),
                3000,
                amountIn,
                0
            );

        // Calculate the theoretical amount out using pricePerToken and accounting for the fee
        uint256 feePercentage = 3000; // Pool fee (3000 for 0.3%)
        uint256 feeDeductedAmountIn = (amountIn * (1000000 - feePercentage)) / 1000000;
        uint256 theoreticalAmountOut = (feeDeductedAmountIn * 10**18) / pricePerToken;

        // Assert that the expected amount out from the quoter matches the theoretical amount out
        assertApproxEqual(expectedAmountOut, theoreticalAmountOut, 0.01 * 10**18, "Quoter output does not match theoretical price");
    }

    function assertApproxEqual(uint256 a, uint256 b, uint256 tolerance, string memory errorMessage) internal {
        if (a > b) {
            require(a - b <= tolerance, errorMessage);
        } else {
            require(b - a <= tolerance, errorMessage);
        }
    }
}
