// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./interfaces/ICampaignFactory.sol";
import "./FairLaunchCampaign.sol";

contract FairLaunchFactory is ICampaignFactory {
    /**
     * @dev Creates a new FairLaunchCampaign.
     * @param owner Address of the owner of the new campaign.
     * @param data Encoded data containing initialization parameters for the campaign.
     * @return ICampaign The address of the newly created FairLaunchCampaign.
     */
    function createCampaign(address owner, bytes memory data) external override returns (ICampaign) {
        // Create a new FairLaunchCampaign and return its address
        return new FairLaunchCampaign(owner, data);
    }
}
