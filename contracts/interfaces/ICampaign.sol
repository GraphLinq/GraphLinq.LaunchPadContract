// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ICampaign {
    function isCampaignSuccessful() external view returns (bool);
    function handleFinalization() external;
    function handleFailure() external;
    function getCampaignDetails() external pure returns (string memory, string memory, string memory);
    function contribute(uint256 contribution, address contributor) external returns (uint256);
}
