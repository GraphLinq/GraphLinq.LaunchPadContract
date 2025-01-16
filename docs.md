# Smart Contracts Summary

## 1. Fundraiser
The `Fundraiser` contract is the central contract for managing fundraising campaigns. It handles the following tasks:
- Accepting contributions in the raise token.
- Managing the sale of sale tokens.
- Finalizing the campaign when the goal is met or setting it as failed.
- Initializing a Uniswap V3 pool for the tokens.
- Managing vesting schedules for the sale tokens.
- Allowing contributors to claim their tokens or funds back in case of failure.

### Key Functions:
- `initialize(FundraiserParams memory params)`: Initializes the fundraiser with the given parameters.
- `contribute(uint256 amount)`: Allows users to contribute to the fundraiser.
- `finalize()`: Finalizes the fundraiser when the goal is met.
- `setFailed()`: Marks the fundraiser as failed.
- `claimFunds()`: Allows users to claim their funds back if the fundraiser fails.
- `claimTokens()`: Allows users to claim their purchased tokens after the fundraiser is finalized.

## 2. FundraiserFactory
The `FundraiserFactory` contract is responsible for creating and managing fundraisers. It registers different campaign types and creates fundraisers based on the specified campaign type.

### Key Functions:
- `initialize()`: Initializes the factory.
- `registerCampaign(ICampaignFactory campaignFactory)`: Registers a new campaign factory.
- `createFundraiser(bytes memory fundraiserParams, bytes memory campaignParams, uint8 campaignTypeID)`: Creates a new fundraiser with the given parameters.

## 3. Vesting
The `Vesting` contract manages the vesting schedules for the sale tokens. It allows tokens to be released to the contributors over a specified period.

### Key Functions:
- `addVestingSchedule(address beneficiary, uint256 start, uint256 duration, uint256 amount)`: Adds a new vesting schedule for a beneficiary.

## 4. StealthLaunchFactory
The `StealthLaunchFactory` contract creates `StealthLaunchCampaign` contracts. It interacts with the `FundraiserFactory` to register and create stealth launch campaigns.

### Key Functions:
- `createCampaign(address fundraiser, bytes memory campaignParams)`: Creates a new stealth launch campaign.

## 5. StealthLaunchCampaign
The `StealthLaunchCampaign` contract implements the `ICampaign` interface for stealth launch fundraising. It defines the specific logic for a stealth launch campaign.

### Key Functions:
- `contribute(uint256 amount, address contributor)`: Handles contributions for the stealth launch campaign.
- `handleFinalization()`: Handles the finalization logic for the stealth launch campaign.
- `handleFailure()`: Handles the failure logic for the stealth launch campaign.
- `pricePerToken()`: Returns the price per token for the campaign.

## 6. FairLaunchFactory
The `FairLaunchFactory` contract creates `FairLaunchCampaign` contracts. It interacts with the `FundraiserFactory` to register and create fair launch campaigns.

### Key Functions:
- `createCampaign(address fundraiser, bytes memory campaignParams)`: Creates a new fair launch campaign.

## 7. FairLaunchCampaign
The `FairLaunchCampaign` contract implements the `ICampaign` interface for fair launch fundraising. It defines the specific logic for a fair launch campaign.

### Key Functions:
- `contribute(uint256 amount, address contributor)`: Handles contributions for the fair launch campaign.
- `handleFinalization()`: Handles the finalization logic for the fair launch campaign.
- `handleFailure()`: Handles the failure logic for the fair launch campaign.
- `pricePerToken()`: Returns the price per token for the campaign.

## Interaction and Extensibility
The architecture allows adding more campaign models by following these steps:
1. Implement a new campaign contract that adheres to the `ICampaign` interface.
2. Create a factory contract for the new campaign type that implements the `ICampaignFactory` interface.
3. Register the new campaign factory with the `FundraiserFactory`.

### Example:
To add a new campaign model, say "ExclusiveLaunch":
1. Implement `ExclusiveLaunchCampaign`:
    ```solidity
    contract ExclusiveLaunchCampaign is ICampaign {
        // Implement the required functions
    }
    ```
2. Implement `ExclusiveLaunchFactory`:
    ```solidity
    contract ExclusiveLaunchFactory is ICampaignFactory {
        function createCampaign(address fundraiser, bytes memory campaignParams) public override returns (address) {
            // Create and return the new ExclusiveLaunchCampaign
        }
    }
    ```
3. Register the new factory with the `FundraiserFactory`:
    ```solidity
    factory.registerCampaign(ICampaignFactory(address(new ExclusiveLaunchFactory())));
    ```

This modular architecture allows the seamless addition of new campaign types without altering the core fundraiser logic.