// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "./interfaces/ICampaignFactory.sol";
import "./StealthLaunchCampaign.sol";

contract StealthLaunchFactory is ICampaignFactory {
    /**
     * @dev Creates a new StealthLaunchCampaign.
     * @param owner Address of the owner of the new campaign.
     * @param data Encoded data containing initialization parameters for the campaign.
     * @return ICampaign The address of the newly created StealthLaunchCampaign.
     */
    function createCampaign(address owner, bytes memory data) external override returns (ICampaign) {
        // Create a new StealthLaunchCampaign and return its address
        return new StealthLaunchCampaign(owner, data);
    }
}
