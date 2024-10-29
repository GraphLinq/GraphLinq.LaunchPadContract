import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Contract, Signer, BigNumber } from 'ethers';
import { FundraiserWeb3Connect } from '../index';
import { abi as FundraiserFactoryAbi } from '../out/FundraiserFactory.sol/FundraiserFactory.json';
import { abi as FundraiserAbi } from '../out/Fundraiser.sol/Fundraiser.json';
import { abi as ERC20Abi } from '../out/ERC20/ERC20.json';
import { abi as VestingAbi } from '../out/Vesting.sol/Vesting.json';

describe('FundraiserWeb3Connect', () => {
  let owner: Signer;
  let contributor: Signer;
  let factory: Contract;
  let fundraiser: Contract;
  let saleToken: Contract;
  let raiseToken: Contract;
  let vesting: Contract;
  let library: FundraiserWeb3Connect;

  const projectName = "Test Project";
  const description = "This is a test project.";
  const websiteLink = "https://testproject.com";
  const vestingStartDelta = 3600;  // 1 hour
  const vestingDuration = 86400;  // 24 hours
  const poolFee = 3000;

  before(async () => {
    [owner, contributor] = await ethers.getSigners();

    // Deploy mock tokens
    const ERC20 = await ethers.getContractFactory("ERC20Mock");
    saleToken = await ERC20.deploy("Sale Token", "SALE", BigNumber.from("10000000000000000000000"));
    raiseToken = await ERC20.deploy("Raise Token", "RAISE", BigNumber.from("10000000000000000000000"));

    // Deploy vesting contract
    const Vesting = await ethers.getContractFactory("Vesting");
    vesting = await Vesting.deploy();

    // Deploy fundraiser factory
    const FundraiserFactory = await ethers.getContractFactory("FundraiserFactory");
    factory = await FundraiserFactory.deploy();
    await factory.initialize();

    // Deploy the library and connect it to the provider
    library = new FundraiserWeb3Connect(factory.address);
    library.connectWithProvider(ethers.provider);
  });

  describe('Fundraiser Management', () => {
    it('should create a new fundraiser', async () => {
      const fundraiserParams = {
        projectName,
        description,
        websiteLink,
        saleToken: saleToken.address,
        raiseToken: raiseToken.address,
        vestingStartDelta,
        vestingDuration,
        poolFee
      };

      const campaignParams = "0x"; // replace with actual campaign parameters
      const campaignID = 0; // replace with actual campaign ID

      const tx = await library.createFundraiser(owner, fundraiserParams, campaignParams, campaignID);
      await tx.wait();

      const events = await factory.queryFilter(factory.filters.FundraiserCreated());
      fundraiser = new ethers.Contract(events[0].args[0], FundraiserAbi, owner);

      expect(await fundraiser.info()).to.deep.include({ projectName, description, websiteLink });
    });

    it('should contribute to the fundraiser', async () => {
      const amount = ethers.utils.parseEther("10");

      await raiseToken.connect(contributor).approve(fundraiser.address, amount);
      const tx = await library.contribute(contributor, fundraiser.address, amount);
      await tx.wait();

      const contribution = await fundraiser.contributions(await contributor.getAddress());
      expect(contribution).to.equal(amount);
    });

    it('should finalize the fundraiser', async () => {
      const tx = await library.finalizeFundraiser(owner, fundraiser.address);
      await tx.wait();

      const state = await fundraiser.state();
      expect(state).to.equal(1); // Finalized
    });

    it('should claim tokens after finalization', async () => {
      const tx = await library.claimTokens(contributor, fundraiser.address);
      await tx.wait();

      const claimed = await fundraiser.claimed(await contributor.getAddress());
      expect(claimed).to.be.true;
    });

    it('should set the fundraiser as failed', async () => {
      // Create a new fundraiser to set as failed
      const fundraiserParams = {
        projectName,
        description,
        websiteLink,
        saleToken: saleToken.address,
        raiseToken: raiseToken.address,
        vestingStartDelta,
        vestingDuration,
        poolFee
      };

      const campaignParams = "0x"; // replace with actual campaign parameters
      const campaignID = 0; // replace with actual campaign ID

      const tx = await library.createFundraiser(owner, fundraiserParams, campaignParams, campaignID);
      await tx.wait();

      const events = await factory.queryFilter(factory.filters.FundraiserCreated());
      const newFundraiser = new ethers.Contract(events[1].args[0], FundraiserAbi, owner);

      const failTx = await library.setFailed(owner, newFundraiser.address);
      await failTx.wait();

      const state = await newFundraiser.state();
      expect(state).to.equal(2); // Failed
    });

    it('should claim raise tokens if failed', async () => {
      // Claim funds from the failed fundraiser
      const tx = await library.claimFunds(contributor, fundraiser.address);
      await tx.wait();

      const claimed = await fundraiser.claimed(await contributor.getAddress());
      expect(claimed).to.be.true;
    });
  });

  describe('Vesting Management', () => {
    it('should claim vested tokens', async () => {
      const tx = await library.claimVestedTokens(contributor, vesting.address);
      await tx.wait();

      const vestedAmount = await vesting.claimable(await contributor.getAddress());
      expect(vestedAmount).to.equal(0); // Assuming all vested tokens have been claimed
    });
  });

  describe('Fetch Fundraiser Information', () => {
    it('should fetch fundraiser information', async () => {
      const info = await library.getFundraiserInfo(fundraiser.address);

      expect(info).to.deep.include({
        projectName,
        description,
        websiteLink,
        campaignType: 0, // replace with the actual campaign type
        raisedAmount: ethers.utils.parseEther("10")
      });
    });
  });
});
