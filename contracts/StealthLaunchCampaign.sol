// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "./interfaces/ICampaign.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StealthLaunchCampaign is ICampaign, Ownable {
    // Public state variables
    uint256 public maxCap;
    uint256 public pricePerToken;
    uint256 public raisedAmount;

    /**
     * @dev Constructor to initialize the StealthLaunchCampaign
     * @param owner The address of the owner of the campaign
     * @param data Encoded data containing maxCap and pricePerToken
    */
    constructor(address owner, bytes memory data)
    Ownable(owner) {
        (maxCap, pricePerToken) = abi.decode(data, (uint256, uint256));
    }

    /**
     * @dev Contribute to the campaign
     * @param contribution The amount of raise tokens to contribute
     * @return tokens The number of tokens purchased with the contribution
    */
    function contribute(uint256 contribution, address /*contributor*/) external override onlyOwner returns (uint256 tokens) {
        tokens = contribution / pricePerToken;
        raisedAmount += tokens;
    }

    /**
     * @dev Check if the campaign is successful
     * @return True always as StealthLaunchCampaign is always considered successful
    */
    function isCampaignSuccessful() external pure override returns (bool) {
        return true;
    }

    /**
     * @dev Handle the finalization of the campaign
     * This function does nothing in StealthLaunchCampaign
    */
    function handleFinalization() external override {
        // No action needed for StealthLaunchCampaign
    }

    /**
     * @dev Handle the failure of the campaign
     * This function does nothing in StealthLaunchCampaign
    */
    function handleFailure() external override {
        // No action needed for StealthLaunchCampaign
    }

    /**
     * @dev Get the details of the campaign
     * @return The name, description, and additional details of the campaign
    */
    function getCampaignDetails() external pure override returns (string memory, string memory, string memory) {
        return ("Stealth Launch", "Stealth Launch Campaign", "N/A");
    }
}
