// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "./interfaces/ICampaign.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FairLaunchCampaign is ICampaign, Ownable {
    // State variables
    uint256 public endTime;
    uint256 public minimumGoal;
    uint256 public pricePerToken;
    uint256 public raisedAmount;

    /**
     * @dev Constructor for initializing the FairLaunchCampaign.
     * @param owner Address of the owner of the campaign.
     * @param data Encoded data containing endTime, minimumGoal, and pricePerToken.
     */
    constructor(address owner, bytes memory data) Ownable(owner) {
        // Decode the data to initialize the campaign parameters
        (endTime, minimumGoal, pricePerToken) = abi.decode(data, (uint256, uint256, uint256));
    }

    /**
     * @dev Contribute to the campaign.
     * @param contribution Amount of contribution in terms of raiseToken.
     * @return tokens Number of tokens allocated for the contribution.
     */
    function contribute(uint256 contribution, address /*contributor*/) external override onlyOwner returns (uint256 tokens) {
        // Calculate the number of tokens to be given based on the contribution and price per token
        tokens = contribution / pricePerToken;
        // Update the total amount of tokens raised
        raisedAmount += tokens;
    }

    /**
     * @dev Check if the campaign is successful.
     * @return bool True if the campaign is successful, false otherwise.
     */
    function isCampaignSuccessful() external view override returns (bool) {
        // Campaign is successful if the current time is past the end time and the raised amount meets or exceeds the minimum goal
        return block.timestamp > endTime && raisedAmount >= minimumGoal;
    }

    /**
     * @dev Handle the finalization of the campaign.
     */
    function handleFinalization() external view override onlyOwner {
        // Ensure the campaign is over
        require(block.timestamp > endTime, "Fundraising still ongoing");
        // Ensure the minimum goal has been met
        require(raisedAmount >= minimumGoal, "Minimum goal not met");
    }

    /**
     * @dev Handle the failure of the campaign.
     */
    function handleFailure() external view override onlyOwner {
        // Ensure the campaign is over
        require(block.timestamp > endTime, "Fundraising still ongoing");
        // Ensure the minimum goal has not been met
        require(raisedAmount < minimumGoal, "Minimum goal met");
    }

    /**
     * @dev Get the details of the campaign.
     * @return string Name of the campaign type.
     * @return string Description of the campaign.
     * @return string Additional details of the campaign.
     */
    function getCampaignDetails() external pure override returns (string memory, string memory, string memory) {
        // Return the static details of the campaign
        return ("Fair Launch", "Fair Launch Campaign", "N/A");
    }
}
