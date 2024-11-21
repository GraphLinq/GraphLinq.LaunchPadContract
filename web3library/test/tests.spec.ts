import { ethers, JsonRpcProvider, Signer, Contract } from 'ethers';
import { expect } from 'chai';
import { Fundraiser, Fundraiser__factory, FundraiserFactory, FundraiserFactory__factory, IVesting, IVesting__factory, ERC20, MockERC20__factory, Vesting__factory, ICampaign, ICampaign__factory, INonfungiblePositionManager } from "../typechain-types";
import { FundraiserWeb3Connect } from '../index';

describe('FundraiserWeb3Connect', () => {
  let owner: Signer;
  let contributor: Signer;
  let factory: FundraiserFactory;
  let fundraiser: Fundraiser;
  let saleToken: ERC20;
  let raiseToken: ERC20;
  let library: FundraiserWeb3Connect;

  const projectName = "Test Project";
  const description = "This is a test project.";
  const websiteLink = "https://testproject.com";
  const vestingStartDelta = 3600; // 1 hour
  const vestingDuration = 86400; // 24 hours
  const poolFee = 3000;

  const factoryAddress = "0x50cf1849e32E6A17bBFF6B1Aa8b1F7B479Ad6C12"; // Deployed factory address

  before(async () => {
    const provider = new JsonRpcProvider("http://127.0.0.1:8545"); // Local node
    [owner, contributor] = await provider.listAccounts();

    // Connect to existing FundraiserFactory
    factory = FundraiserFactory__factory.connect(factoryAddress, owner);

    // Deploy mock tokens
    saleToken = await new MockERC20__factory(owner).deploy("Sale Token", "SALE");
    raiseToken = await new MockERC20__factory(owner).deploy("Raise Token", "RAISE");

    // Initialize the library and connect it to the provider
    library = new FundraiserWeb3Connect(factoryAddress);
    library.connectWithProvider(provider);
  });

  describe('Fundraiser Management', () => {
    it('should create a new fundraiser', async () => {
      const fundraiserParams = {
        projectName,
        description,
        websiteLink,
        saleToken: await saleToken.getAddress(),
        raiseToken: await raiseToken.getAddress(),
        vestingStartDelta,
        vestingDuration,
        poolFee,
      };

      const campaignParams = "0x"; // Replace with actual campaign parameters
      const campaignID = 0; // Replace with actual campaign ID

      const tx = await library.createFundraiser(owner, fundraiserParams, campaignParams, campaignID);
      await tx.wait();

      const events = await factory.queryFilter(factory.filters.FundraiserCreated());
      fundraiser = Fundraiser__factory.connect(events[0].args[0], owner);

      const info = await fundraiser.info();
      expect(info.projectName).to.equal(projectName);
      expect(info.description).to.equal(description);
      expect(info.websiteLink).to.equal(websiteLink);
    });

  //   it('should contribute to the fundraiser', async () => {
  //     const amount = ethers.parseEther("10");

  //     await raiseToken.connect(contributor).approve(fundraiser.address, amount);
  //     const tx = await library.contribute(contributor, fundraiser.address, amount);
  //     await tx.wait();

  //     const contribution = await fundraiser.contributions(await contributor.getAddress());
  //     expect(contribution).to.equal(amount);
  //   });

  //   it('should finalize the fundraiser', async () => {
  //     const tx = await library.finalizeFundraiser(owner, fundraiser.address);
  //     await tx.wait();

  //     const state = await fundraiser.state();
  //     expect(state).to.equal(1); // Finalized
  //   });

  //   it('should claim tokens after finalization', async () => {
  //     const tx = await library.claimTokens(contributor, fundraiser.address);
  //     await tx.wait();

  //     const claimed = await fundraiser.claimed(await contributor.getAddress());
  //     expect(claimed).to.be.true;
  //   });

  //   it('should set the fundraiser as failed', async () => {
  //     const fundraiserParams = {
  //       projectName,
  //       description,
  //       websiteLink,
  //       saleToken: saleToken.address,
  //       raiseToken: raiseToken.address,
  //       vestingStartDelta,
  //       vestingDuration,
  //       poolFee,
  //     };

  //     const campaignParams = "0x"; // Replace with actual campaign parameters
  //     const campaignID = 0; // Replace with actual campaign ID

  //     const tx = await library.createFundraiser(owner, fundraiserParams, campaignParams, campaignID);
  //     await tx.wait();

  //     const events = await factory.queryFilter(factory.filters.FundraiserCreated());
  //     const newFundraiser = Fundraiser__factory.connect(events[1].args[0], owner);

  //     const failTx = await library.setFailed(owner, newFundraiser.address);
  //     await failTx.wait();

  //     const state = await newFundraiser.state();
  //     expect(state).to.equal(2); // Failed
  //   });

  //   it('should claim raise tokens if failed', async () => {
  //     const tx = await library.claimFunds(contributor, fundraiser.address);
  //     await tx.wait();

  //     const claimed = await fundraiser.claimed(await contributor.getAddress());
  //     expect(claimed).to.be.true;
  //   });
  // });

  // describe('Vesting Management', () => {
  //   it('should claim vested tokens', async () => {
  //     const tx = await library.claimVestedTokens(contributor, vesting.address);
  //     await tx.wait();

  //     const vestedAmount = await vesting.claimable(await contributor.getAddress());
  //     expect(vestedAmount).to.equal(0); // Assuming all vested tokens have been claimed
  //   });
  // });

  // describe('Fetch Fundraiser Information', () => {
  //   it('should fetch fundraiser information', async () => {
  //     const info = await library.getFundraiserInfo(fundraiser.address);

  //     expect(info).to.deep.include({
  //       projectName,
  //       description,
  //       websiteLink,
  //       campaignType: 0, // Replace with the actual campaign type
  //       raisedAmount: ethers.utils.parseEther("10"),
  //     });
  //   });
   });
});
