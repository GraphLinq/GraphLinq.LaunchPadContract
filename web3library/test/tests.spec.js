import { ethers } from 'ethers';
import { expect } from 'chai';
import {
  Fundraiser__factory,
  FundraiserFactory__factory,
  MockERC20__factory,
} from '../dist/fundraiserlib.es.js'; // Ensure the file extension is .js
import { FundraiserWeb3Connect } from '../dist/fundraiserlib.es.js';

describe('FundraiserWeb3Connect', function () {
  let owner;
  let contributor;
  let factory;
  let fundraiser;
  let saleToken;
  let raiseToken;
  let library;

  const projectName = 'Test Project';
  const description = 'This is a test project.';
  const websiteLink = 'https://testproject.com';
  const vestingStartDelta = 3600; // 1 hour
  const vestingDuration = 86400; // 24 hours
  const poolFee = 3000;

  const factoryAddress = '0x50cf1849e32E6A17bBFF6B1Aa8b1F7B479Ad6C12'; // Replace with the actual deployed factory address

  before(async function () {
    const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545'); // Local node
    const accounts = await provider.listAccounts();
    owner = provider.getSigner(accounts[0]);
    contributor = provider.getSigner(accounts[1]);

    // Connect to the deployed FundraiserFactory contract
    factory = FundraiserFactory__factory.connect(factoryAddress, owner);

    // Deploy mock ERC20 tokens
    const mockERC20Factory = new MockERC20__factory(owner);
    saleToken = await mockERC20Factory.deploy('Sale Token', 'SALE');
    await saleToken.deployed();
    raiseToken = await mockERC20Factory.deploy('Raise Token', 'RAISE');
    await raiseToken.deployed();

    // Initialize the library and connect it to the provider
    library = new FundraiserWeb3Connect(factoryAddress);
    library.connectWithProvider(provider);
  });

  describe('Fundraiser Management', function () {
    it('should create a new fundraiser', async function () {
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

      const campaignParams = '0x'; // Replace with actual campaign parameters
      const campaignID = 0; // Replace with actual campaign ID

      const tx = await library.createFundraiser(owner, fundraiserParams, campaignParams, campaignID);
      await tx.wait();

      // Query the FundraiserCreated event
      const events = await factory.queryFilter(factory.filters.FundraiserCreated());
      expect(events).to.have.lengthOf.at.least(1);

      fundraiser = Fundraiser__factory.connect(events[0].args[0], owner);

      // Verify the fundraiser info
      const info = await fundraiser.info();
      expect(info.projectName).to.equal(projectName);
      expect(info.description).to.equal(description);
      expect(info.websiteLink).to.equal(websiteLink);
    });

    it('should allow contributions to the fundraiser', async function () {
      const amount = ethers.parseEther('10');

      await raiseToken.connect(contributor).approve(await fundraiser.getAddress(), amount);
      const tx = await library.contribute(contributor, await fundraiser.getAddress(), amount);
      await tx.wait();

      const contribution = await fundraiser.contributions(await contributor.getAddress());
      expect(contribution).to.equal(amount);
    });

    it('should finalize the fundraiser', async function () {
      const tx = await library.finalizeFundraiser(owner, await fundraiser.getAddress());
      await tx.wait();

      const state = await fundraiser.state();
      expect(state).to.equal(1); // Finalized
    });

    it('should allow claiming of tokens after finalization', async function () {
      const tx = await library.claimTokens(contributor, await fundraiser.getAddress());
      await tx.wait();

      const claimed = await fundraiser.claimed(await contributor.getAddress());
      expect(claimed).to.be.true;
    });

    it('should handle failed fundraisers', async function () {
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

      const campaignParams = '0x'; // Replace with actual campaign parameters
      const campaignID = 1; // New campaign ID

      const tx = await library.createFundraiser(owner, fundraiserParams, campaignParams, campaignID);
      await tx.wait();

      const events = await factory.queryFilter(factory.filters.FundraiserCreated());
      expect(events).to.have.lengthOf.at.least(2);

      const newFundraiser = Fundraiser__factory.connect(events[1].args[0], owner);

      const failTx = await library.setFailed(owner, await newFundraiser.getAddress());
      await failTx.wait();

      const state = await newFundraiser.state();
      expect(state).to.equal(2); // Failed
    });
  });
});
