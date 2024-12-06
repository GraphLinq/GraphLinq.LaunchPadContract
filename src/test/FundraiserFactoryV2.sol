// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

import "../Fundraiser.sol";
import "../Vesting.sol";

import "../interfaces/ICampaignFactory.sol";
import "../interfaces/ICampaign.sol";

/// @custom:oz-upgrades-from FundraiserFactory
contract FundraiserFactoryV2 is Initializable, OwnableUpgradeable, UUPSUpgradeable {
    // Events
    event FundraiserCreated(address indexed fundraiser);
    event CampaignRegistered(uint8 id);

    // State variables
    uint8 public campaignID;
    address constant public POSITION_MANAGER = 0xC36442b4a4522E871399CD717aBDD847Ab11FE88;

    mapping(uint8 => ICampaignFactory) public campaigns;

    mapping(uint256 => address) public fundraisers;
    uint256 public fundraiserID;

    /**
     * @dev Struct to hold parameters for the Fundraiser initialization
     */
    struct FundraiserParams {
        address saleToken;
        address raiseToken;
        string projectName;
        string description;
        string websiteLink;
        ICampaign campaign;
        uint256 vestingStartDelta;
        uint256 vestingDuration;
        address positionManager;
        IVesting vesting;
        uint24 poolFee;
    }

    /**
     * @dev Initializes the factory contract
     * Sets the initial owner
    */
    function initialize() public initializer {
        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}

    /**
     * @dev Register a new campaign
     * @param factory The campaign factory contract
    */
    function registerCampaign(ICampaignFactory factory) public onlyOwner {
        campaigns[campaignID] = factory;
        emit CampaignRegistered(campaignID++);
    }

    /**
     * @dev Creates a new fundraiser
     * @param fundraiserParams Encoded parameters for the fundraiser
     * @param campaignParams Encoded parameters for the campaign
     * @param campaignTypeID The ID of the campaign type to use
     * @return The address of the created fundraiser
    */
    function createFundraiser(
        bytes memory fundraiserParams,
        bytes memory campaignParams,
        uint8 campaignTypeID
    ) public returns (address) {
        (
            string memory projectName,
            string memory description,
            string memory websiteLink,
            address saleToken,
            address raiseToken,
            uint256 vestingStartDelta,
            uint256 vestingDuration,
            uint24 poolFee
        ) = abi.decode(fundraiserParams, (string, string, string, address, address, uint256, uint256, uint24));

        require(campaignTypeID < campaignID, "Invalid campaign type");

        // Create a new Fundraiser instance
        Fundraiser fundraiser = new Fundraiser(msg.sender);

        // Create a new campaign using the specified campaign factory
        ICampaign campaign = campaigns[campaignTypeID].createCampaign(address(fundraiser), campaignParams);

        // Initialize the vesting contract if vesting is enabled
        IVesting vesting = IVesting(address(0));
        if (vestingDuration > 0) {
            vesting = IVesting(new Vesting(saleToken, address(fundraiser)));
        }

        // Initialize the parameters struct
        Fundraiser.FundraiserParams memory params = Fundraiser.FundraiserParams({
            saleToken: saleToken,
            raiseToken: raiseToken,
            projectName: projectName,
            description: description,
            websiteLink: websiteLink,
            campaign: campaign,
            vestingStartDelta: vestingStartDelta,
            vestingDuration: vestingDuration,
            positionManager: POSITION_MANAGER,
            vesting: vesting,
            poolFee: poolFee
        });

        // Initialize the fundraiser
        fundraiser.initialize(params);

        emit FundraiserCreated(address(fundraiser));
        return address(fundraiser);
    }
}
