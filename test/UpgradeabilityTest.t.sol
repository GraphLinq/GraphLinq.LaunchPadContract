// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

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
import "../src/test/FundraiserFactoryV2.sol";
import "forge-std/console.sol";
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import { Upgrades } from "openzeppelin-foundry-upgrades/Upgrades.sol";

contract UpgradeabilityTest is Test {
    FundraiserFactory private factory;
    StealthLaunchFactory private stealthFactory;
    FairLaunchFactory private fairFactory;
    MockERC20 private saleToken;
    MockERC20 private raiseToken;
    address private owner;
    uint8 private stealthLaunchID;
    uint8 private fairLaunchID;
    ERC1967Proxy proxy;

    // Set up the test environment before running tests
    function setUp() public {
        owner = vm.addr(1);
        vm.startPrank(owner);

        // Deploy the factories
        factory = new FundraiserFactory();
        stealthFactory = new StealthLaunchFactory();
        fairFactory = new FairLaunchFactory();

        // Deploy the proxy and initialize the contract through the proxy
        proxy = new ERC1967Proxy(address(factory), abi.encodeCall(factory.initialize, ()));
        factory = FundraiserFactory(address(proxy));
        
        // Register the campaign factories
        stealthLaunchID = factory.campaignID();
        factory.registerCampaign(ICampaignFactory(address(stealthFactory)));

        fairLaunchID = factory.campaignID();
        factory.registerCampaign(ICampaignFactory(address(fairFactory)));

        // Deploy mock tokens
        saleToken = new MockERC20("Sale Token", "SALE");
        raiseToken = new MockERC20("Raise Token", "RAISE");

        vm.stopPrank();
    }

    // Test the basic functionality of creating a fundraiser
    function testCreateFundraiser() public {
        // Prepare parameters for the fundraiser
        bytes memory fundraiserParams = abi.encode(
            "Test Project",
            "This is a test project.",
            "https://testproject.com",
            "https://logourl",
            address(saleToken),
            address(raiseToken),
            3600,  // Vesting starts 1 hour after finalization
            86400, // Vesting duration of 24 hours
            3000   // Pool fee
        );

        bytes memory campaignParams = abi.encode(
            block.timestamp + 3600, // End time 1 hour from now
            1000 * 10**18, // Minimum goal of 1000 tokens
            1 * 10**18     // 1 ETH per token
        );

        // Create the fundraiser
        address payable fundraiserAddress = payable(factory.createFundraiser(fundraiserParams, campaignParams, fairLaunchID));

        // Assertions
        Fundraiser fundraiser = Fundraiser(fundraiserAddress);
        (string memory projectName, string memory description, string memory websiteLink, string memory logoUrl) = fundraiser.info();
        assertEq(projectName, "Test Project");
        assertEq(description, "This is a test project.");
        assertEq(websiteLink, "https://testproject.com");
        assertEq(logoUrl, "https://logourl");
    }

    // Test the upgradeability of the FundraiserFactory contract
    function testUpgradeability() public {

        // Upgrade the proxy to the new implementation
        vm.startPrank(owner);
        Upgrades.upgradeProxy(address(proxy), "FundraiserFactoryV2.sol:FundraiserFactoryV2", "", owner);
        vm.stopPrank();

        // Check that the upgrade was successful by calling a function from the new implementation
        FundraiserFactory upgradedFactory = FundraiserFactory(address(proxy));
        assertEq(upgradedFactory.owner(), owner);
    }
}
