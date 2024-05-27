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
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract FundraiserFactoryTest is Test {
    FundraiserFactory private factory;
    StealthLaunchFactory private stealthFactory;
    FairLaunchFactory private fairFactory;
    address private owner;
    MockERC20 private saleToken;
    MockERC20 private raiseToken;
    uint8 private stealthLaunchID;
    uint8 private fairLaunchID;

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
            86400  // Vesting duration of 24 hours
        );

        bytes memory campaignParams = abi.encode(
            10000 * 10**18,  // Max cap of 10000 tokens
            1 * 10**18  // 1 ETH per token
        );

        // Create the fundraiser
        address fundraiserAddress = factory.createFundraiser(fundraiserParams, campaignParams, stealthLaunchID);

        // Assertions
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);
        assertEq(fundraiser.projectName(), "Stealth Project");
        assertEq(fundraiser.description(), "This is a stealth launch project.");
        assertEq(fundraiser.websiteLink(), "https://stealthproject.com");
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
            86400  // Vesting duration of 24 hours
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
        assertEq(fundraiser.projectName(), "Fair Project");
        assertEq(fundraiser.description(), "This is a fair launch project.");
        assertEq(fundraiser.websiteLink(), "https://fairproject.com");
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
            86400  // Vesting duration of 24 hours
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
            86400  // Vesting duration of 24 hours
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
        assertTrue(fundraiser.finalized(), "Fundraiser should be finalized");
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
            86400  // Vesting duration of 24 hours
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

        fundraiser.initSwapPair(3000, -887220, 887220);

        // Assertions
        assertTrue(fundraiser.swapPairCreated(), "Swap pair should be created");
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
            86400  // Vesting duration of 24 hours
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

        fundraiser.initSwapPair(3000, -887220, 887220);

        // Fast forward time to after the vesting start
        vm.warp(block.timestamp + 3600);

        // Claim tokens
        fundraiser.claimTokens();

        // Assertions
        assertTrue(fundraiser.claimed(address(this)), "Tokens should be claimed");
    }
}
