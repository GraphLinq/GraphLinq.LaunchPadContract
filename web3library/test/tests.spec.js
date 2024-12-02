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

  const factoryAddress = '0xCC9676b9bf25cE45a3a5F88205239aFdDeCF1BC7'; // Replace with the actual deployed factory address
  const ownerPrivateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
  const contributorPrivateKey = '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d';

  before(async function () {
    const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545'); // Local node
    owner = new ethers.Wallet(ownerPrivateKey, provider);
    contributor = new ethers.Wallet(contributorPrivateKey, provider);

    // Connect to the deployed FundraiserFactory contract
    factory = FundraiserFactory__factory.connect(factoryAddress, owner);

    // Deploy mock ERC20 tokens
    const mockERC20Factory = new MockERC20__factory(owner);
    saleToken = await mockERC20Factory.connect(owner).deploy('Sale Token', 'SALE');
    raiseToken = await mockERC20Factory.connect(owner).deploy('Raise Token', 'RAISE');
    await saleToken.waitForDeployment();
    await raiseToken.waitForDeployment();

    // Initialize the library and connect it to the provider
    library = new FundraiserWeb3Connect(factoryAddress);
    await library.connectWithProvider(provider);
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

      const campaignParams = {
        endTime: 0,
        minimumGoal: 0,
        pricePerToken: BigInt("1000000000000000000"),
      }

      let tx = await library.createFundraiserFairLaunch(owner, fundraiserParams, campaignParams);
      await tx.wait();

      // Query the FundraiserCreated event
      const events = await factory.queryFilter(factory.filters.FundraiserCreated());
      expect(events).to.have.lengthOf.at.least(1);

      console.log("Fundraiser address", events[events.length-1].args[0]);

      fundraiser = Fundraiser__factory.connect(events[events.length-1].args[0], owner);

      tx = await saleToken.mint(await fundraiser.getAddress(), ethers.parseEther('1000'));
      await tx.wait();

      // Verify the fundraiser info
      const info = await fundraiser.info();
      expect(info.projectName).to.equal(projectName);
      expect(info.description).to.equal(description);
      expect(info.websiteLink).to.equal(websiteLink);
    });

    it('should allow contributions to the fundraiser', async function () {
      const amount = ethers.parseEther('1');
      let fundraiserAddress = await fundraiser.getAddress();
      console.log("STEP1")
      let tx = await raiseToken.connect(owner).mint(contributor.address, amount);
      await tx.wait();
      console.log("STEP2")
      tx = await library.approveERC20(contributor, await raiseToken.getAddress(), fundraiserAddress, amount);
      await tx.wait();
      console.log("STEP3")
      let allowance = await library.checkAllowance(contributor, await raiseToken.getAddress(), fundraiserAddress);
      console.log("Allowance: ", allowance.toString());

      tx = await library.contribute(contributor, fundraiserAddress, amount);
      await tx.wait();

      const contribution = await fundraiser.contributions(await contributor.getAddress());
      expect(contribution).to.equal(amount);
    });

    it('should finalize the fundraiser', async function () {
      const tx = await library.finalizeFundraiser(owner, await fundraiser.getAddress());
      await tx.wait();

      const state = await fundraiser.state();
      expect(state).to.equal(BigInt(1)); // Finalized
    });

    it('should init the swap pair', async function () {
      const raiseTokenLiquidity = ethers.parseEther('10');
      let saleTokenLiquidity = library.getSaleTokenLiquidityInfo(await fundraiser.getAddress(), raiseTokenLiquidity);
      let tx = await saleToken.mint(await fundraiser.getAddress(), saleTokenLiquidity);
      await tx.wait();
      tx = await raiseToken.mint(await fundraiser.getAddress(), raiseTokenLiquidity);
      await tx.wait();
      tx = await library.initSwapPair(owner, await fundraiser.getAddress(), -887220, 887220);
      await tx.wait();

      const state = await fundraiser.state();
      expect(state).to.equal(BigInt(3)); // Swap pair created
    });

    it('should fetch info about the fundraiser', async function () {
      const state = await library.getFundraiserState(await fundraiser.getAddress());
      console.log(state);
    });

    it('should allow claiming of tokens after finalization', async function () {
      const tx = await library.claimTokens(contributor, await fundraiser.getAddress());
      await tx.wait();

      const claimed = await fundraiser.claimed(await contributor.getAddress());
      expect(claimed).to.be.true;
    });

    it('should query vesting data after claiming', async function () {
      let vestingInfo = await library.getVestingInfo(contributor, await fundraiser.getAddress());
      console.log(vestingInfo);
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

      const campaignParams = {
        maxCap: 0,
        pricePerToken: BigInt("1000000000000000000"),
      }

      const tx = await library.createFundraiserStealthLaunch(owner, fundraiserParams, campaignParams);
      await tx.wait();

      const events = await factory.queryFilter(factory.filters.FundraiserCreated());
      expect(events).to.have.lengthOf.at.least(2);

      console.log("Fundraiser address", events[events.length-1].args[0]);

      const newFundraiser = Fundraiser__factory.connect(events[events.length-1].args[0], owner);

      const failTx = await library.cancelFundraiser(owner, await newFundraiser.getAddress());
      await failTx.wait();

      const state = await newFundraiser.state();
      expect(state).to.equal(BigInt(2)); // Failed
    });

    it('should be able to claim sale token back on failed fundraisers', async function () {
      const events = await factory.queryFilter(factory.filters.FundraiserCreated());
      const failedFundraiserAddr = events[events.length-1].args[0];
      let tx = await library.claimFunds(owner, failedFundraiserAddr);
      await tx.wait();
    });
  });
});
