// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/FairLaunchCampaign.sol";

contract FairLaunchCampaignTest is Test {
    FairLaunchCampaign private campaign;
    address private owner;
    address private contributor;
    uint256 private endTime;
    uint256 private minimumGoal;
    uint256 private pricePerToken;
    bytes private data;

    function setUp() public {
        owner = address(this);
        contributor = address(0x123);
        endTime = block.timestamp + 1 hours; // Campaign ends in 1 hour
        minimumGoal = 1000 * 10**18; // Minimum goal of 1000 tokens
        pricePerToken = 1 * 10**18; // 1 ETH per token
        data = abi.encode(endTime, minimumGoal, pricePerToken);

        campaign = new FairLaunchCampaign(owner, data);
    }

    function testInitialization() public {
        assertEq(campaign.END_TIME(), endTime, "End time mismatch");
        assertEq(campaign.MINIMUM_GOAL(), minimumGoal, "Minimum goal mismatch");
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
        // Fast forward time to after the campaign end time
        vm.warp(endTime + 1);

        // Initially, the campaign should not be successful
        bool isSuccessful = campaign.isCampaignSuccessful();
        assertFalse(isSuccessful, "Campaign should not be successful");

        // Contribute enough to meet the minimum goal
        uint256 contribution = minimumGoal;
        vm.prank(owner);
        campaign.contribute(contribution, contributor);

        isSuccessful = campaign.isCampaignSuccessful();
        assertTrue(isSuccessful, "Campaign should be successful");
    }

    function testHandleFinalization() public {
        // Fast forward time to after the campaign end time
        vm.warp(endTime + 1);

        // Contribute enough to meet the minimum goal
        uint256 contribution = minimumGoal;
        vm.prank(owner);
        campaign.contribute(contribution, contributor);

        // Check that finalization does not revert
        vm.prank(owner);
        campaign.handleFinalization();
    }

    function testHandleFailure() public {
        // Fast forward time to after the campaign end time
        vm.warp(endTime + 1);

        // Do not contribute anything

        // Check that handleFailure does not revert
        vm.prank(owner);
        campaign.handleFailure();
    }

    function testGetCampaignDetails() public {
        (string memory name, string memory description, string memory details) = campaign.getCampaignDetails();
        assertEq(name, "Fair Launch", "Campaign name mismatch");
        assertEq(description, "Fair Launch Campaign", "Campaign description mismatch");
        assertEq(details, "N/A", "Campaign details mismatch");
    }

    function testContributeNonOwner() public {
        uint256 contribution = 500 * 10**18; // Contributing 500 ETH
        vm.prank(contributor);
        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", contributor));
        campaign.contribute(contribution, contributor);
    }

    function testHandleFinalizationNonOwner() public {
        // Fast forward time to after the campaign end time
        vm.warp(endTime + 1);

        // Contribute enough to meet the minimum goal
        uint256 contribution = minimumGoal;
        vm.prank(owner);
        campaign.contribute(contribution, contributor);

        // Check that handleFinalization reverts if called by non-owner
        vm.prank(contributor);
        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", contributor));
        campaign.handleFinalization();
    }

    function testHandleFailureNonOwner() public {
        // Fast forward time to after the campaign end time
        vm.warp(endTime + 1);

        // Check that handleFailure reverts if called by non-owner
        vm.prank(contributor);
        vm.expectRevert(abi.encodeWithSignature("OwnableUnauthorizedAccount(address)", contributor));
        campaign.handleFailure();
    }
}
