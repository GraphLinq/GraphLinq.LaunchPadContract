// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./ICampaign.sol";

interface ICampaignFactory {
    function createCampaign(address owner, bytes memory data) external returns (ICampaign);
}
