// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/StealthLaunchCampaign.sol";

contract StealthLaunchCampaignTest is Test {
    StealthLaunchCampaign private campaign;
    address private owner;
    address private contributor;
    uint256 private maxCap;
    uint256 private pricePerToken;
    bytes private data;

    function setUp() public {
        owner = address(this);
        contributor = address(0x123);
        maxCap = 10000 * 10**18; // Max cap of 10000 tokens
        pricePerToken = 1 * 10**18; // 1 ETH per token
        data = abi.encode(maxCap, pricePerToken);

        campaign = new StealthLaunchCampaign(owner, data);
    }

    function testInitialization() public {
        assertEq(campaign.MAX_CAP(), maxCap, "Max cap mismatch");
        assertEq(campaign.pricePerToken(), pricePerToken, "Price per token mismatch");
    }

    function testContribute() public {
        uint256 contribution = 500 * 10**18; // Contributing 500 ETH
        vm.prank(owner);
        uint256 tokens = campaign.contribute(contribution, contributor);

        uint256 expectedTokens = contribution * 10**18 / pricePerToken;
        assertEq(tokens, expectedTokens, "Token allocation mismatch");
        assertEq(campaign.raisedAmount(), contribution, "Raised amount mismatch");
    }

    function testIsCampaignSuccessful() public {
        bool isSuccessful = campaign.isCampaignSuccessful();
        assertTrue(isSuccessful, "StealthLaunchCampaign should always be successful");
    }

    function testHandleFinalization() public {
        // Check that handleFinalization does not revert
        vm.prank(owner);
        campaign.handleFinalization();
    }

    function testHandleFailure() public {
        // Check that handleFailure does not revert
        vm.prank(owner);
        campaign.handleFailure();
    }

    function testGetCampaignDetails() public {
        (string memory name, string memory description, string memory details) = campaign.getCampaignDetails();
        assertEq(name, "Stealth Launch", "Campaign name mismatch");
        assertEq(description, "Stealth Launch Campaign", "Campaign description mismatch");
        assertEq(details, "N/A", "Campaign details mismatch");
    }

    function testContributeNonOwner() public {
        uint256 contribution = 500 * 10**18; // Contributing 500 ETH
        vm.prank(contributor);
        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", contributor));
        campaign.contribute(contribution, contributor);
    }

    function testHandleFinalizationNonOwner() public {
        // Check that handleFinalization reverts if called by non-owner
        vm.prank(contributor);
        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", contributor));
        campaign.handleFinalization();
    }

    function testHandleFailureNonOwner() public {
        // Check that handleFailure reverts if called by non-owner
        vm.prank(contributor);
        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", contributor));
        campaign.handleFailure();
    }
}
