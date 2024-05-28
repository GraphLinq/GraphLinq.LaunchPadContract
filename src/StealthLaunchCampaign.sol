// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "./interfaces/ICampaign.sol";
import "openzeppelin-contracts/access/Ownable.sol";

contract StealthLaunchCampaign is ICampaign, Ownable {
    // Public state variables
    uint256 immutable public MAX_CAP;
    /**
    * @dev The price of one sale token in terms of raise tokens.
    * 
    * This variable represents the price per token with 18 decimal places for precision.
    * For example, if the price per token is set to 2 * 10**18, it means that 2 raise tokens 
    * are required to purchase 1 sale token. The calculation ensures that fractional prices
    * are accurately handled. When contributing to the campaign, the number of tokens purchased
    * is calculated using this price per token.
    */
    uint256 immutable public PRICE_PER_TOKEN;
    uint256 public raisedAmount;

    /**
     * @dev Constructor to initialize the StealthLaunchCampaign
     * @param owner_ The address of the owner of the campaign
     * @param data Encoded data containing MAX_CAP and PRICE_PER_TOKEN
    */
    constructor(address owner_, bytes memory data)
    Ownable(owner_) {
        (MAX_CAP, PRICE_PER_TOKEN) = abi.decode(data, (uint256, uint256));
    }

    function pricePerToken() external view override returns (uint256) {
        return PRICE_PER_TOKEN;
    }

    /**
     * @dev Contribute to the campaign
     * @param contribution The amount of raise tokens to contribute
     * @return tokens The number of tokens purchased with the contribution
    */
    function contribute(uint256 contribution, address) external override onlyOwner returns (uint256 tokens) {
        tokens = (contribution * 10**18) / PRICE_PER_TOKEN;
        raisedAmount += contribution;
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
    function handleFinalization() external override onlyOwner {
        // No action needed for StealthLaunchCampaign
    }

    /**
     * @dev Handle the failure of the campaign
     * This function does nothing in StealthLaunchCampaign
    */
    function handleFailure() external override onlyOwner {
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
