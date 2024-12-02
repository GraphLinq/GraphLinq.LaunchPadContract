// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

interface ICampaign {
    function isCampaignSuccessful() external view returns (bool);
    function handleFinalization() external;
    function handleFailure() external;
    function getCampaignDetails() external pure returns (string memory, string memory, string memory);
    function contribute(uint256 contribution, address contributor) external returns (uint256);
    function pricePerToken() external view returns (uint256);
    function getRaisedAmount() external view returns (uint256);
    function getConfig() external view returns (uint256[] memory params);
}
