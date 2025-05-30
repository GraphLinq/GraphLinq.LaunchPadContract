// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/FundraiserFactory.sol";
import "../src/StealthLaunchFactory.sol";
import "../src/FairLaunchFactory.sol";
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();
        // Deploy the factories
        FundraiserFactory fundraiserFactoryImplementation = new FundraiserFactory();
        StealthLaunchFactory stealthLaunchFactory = new StealthLaunchFactory();
        FairLaunchFactory fairLaunchFactory = new FairLaunchFactory();

        // Deploy the proxy and initialize the FundraiserFactory contract through the proxy
        ERC1967Proxy proxy = new ERC1967Proxy(
            address(fundraiserFactoryImplementation), 
            abi.encodeCall(fundraiserFactoryImplementation.initialize, ())
        );

        // Cast the proxy as FundraiserFactory
        FundraiserFactory fundraiserFactory = FundraiserFactory(address(proxy));

        // Register the campaign factories
        fundraiserFactory.registerCampaign(ICampaignFactory(address(stealthLaunchFactory)));
        fundraiserFactory.registerCampaign(ICampaignFactory(address(fairLaunchFactory)));

        console.log("Proxy address:", address(proxy));
        console.log("FundraiserFactory address:", address(fundraiserFactoryImplementation));
        console.log("StealthLaunchFactory address:", address(stealthLaunchFactory));
        console.log("FairLaunchFactory address:", address(fairLaunchFactory));
    
        vm.stopBroadcast();
    }
}
