// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "./interfaces/ICampaign.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FairLaunchCampaign is ICampaign, Ownable {
    // State variables
    uint256 immutable public END_TIME;
    uint256 immutable public MINIMUM_GOAL;
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
     * @dev Constructor for initializing the FairLaunchCampaign.
     * @param owner_ Address of the owner of the campaign.
     * @param data Encoded data containing END_TIME, MINIMUM_GOAL, and PRICE_PER_TOKEN.
     */
    constructor(address owner_, bytes memory data) Ownable(owner_) {
        // Decode the data to initialize the campaign parameters
        (END_TIME, MINIMUM_GOAL, PRICE_PER_TOKEN) = abi.decode(data, (uint256, uint256, uint256));
    }

    function pricePerToken() external view override returns (uint256) {
        return PRICE_PER_TOKEN;
    }

    function getRaisedAmount() external view override returns (uint256) {
        return raisedAmount;
    }

    function getConfig() external view override returns (uint256[] memory params) {
        params = new uint256[](3);
        params[0] = END_TIME;
        params[1] = MINIMUM_GOAL;
        params[2] = PRICE_PER_TOKEN;
    }

    /**
     * @dev Contribute to the campaign.
     * @param contribution Amount of contribution in terms of raiseToken.
     * @return tokens Number of tokens allocated for the contribution.
     */
    function contribute(uint256 contribution, address) external override onlyOwner returns (uint256 tokens) {
        // Calculate the number of tokens to be given based on the contribution and price per token
        tokens = (contribution * 10**18) / PRICE_PER_TOKEN;
        // Update the total amount of tokens raised
        raisedAmount += contribution;
    }

    /**
     * @dev Check if the campaign is successful.
     * @return bool True if the campaign is successful, false otherwise.
     */
    function isCampaignSuccessful() external view override returns (bool) {
        // Campaign is successful if the current time is past the end time
        // and the raised amount meets or exceeds the minimum goal
        return block.timestamp >= END_TIME && raisedAmount >= MINIMUM_GOAL;
    }

    /**
     * @dev Handle the finalization of the campaign.
     */
    function handleFinalization() external view override onlyOwner {
        // Ensure the campaign is over
        require(block.timestamp >= END_TIME, "Fundraising still ongoing");
        // Ensure the minimum goal has been met
        require(raisedAmount >= MINIMUM_GOAL, "Minimum goal not met");
    }

    /**
     * @dev Handle the failure of the campaign.
     */
    function handleFailure() external view override onlyOwner {
        // Ensure the campaign is over
        require(block.timestamp > END_TIME, "Fundraising still ongoing");
        // Ensure the minimum goal has not been met
        require(raisedAmount < MINIMUM_GOAL, "Minimum goal met");
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
