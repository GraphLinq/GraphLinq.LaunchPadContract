// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/FundraiserFactory.sol";
import "../src/StealthLaunchFactory.sol";
import "../src/FairLaunchFactory.sol";

contract DeployScript is Script {
    function run() public {
        // Start broadcasting transactions to the network
        vm.startBroadcast();

        // Deploy the FundraiserFactory
        FundraiserFactory fundraiserFactory = new FundraiserFactory();
        fundraiserFactory.initialize();

        // Deploy the StealthLaunchFactory
        StealthLaunchFactory stealthLaunchFactory = new StealthLaunchFactory();

        // Deploy the FairLaunchFactory
        FairLaunchFactory fairLaunchFactory = new FairLaunchFactory();

        // Register the campaign factories
        fundraiserFactory.registerCampaign(ICampaignFactory(address(stealthLaunchFactory)));
        fundraiserFactory.registerCampaign(ICampaignFactory(address(fairLaunchFactory)));

        // End broadcasting transactions
        vm.stopBroadcast();
    }
}
