import { JsonRpcProvider, Provider, TransactionResponse } from "@ethersproject/providers";
import { BigNumber, BigNumberish, Contract, ContractTransaction, ethers, Signer, utils } from "ethers";
import { Fundraiser, FundraiserFactory, IVesting, ERC20, ICampaign, INonfungiblePositionManager } from "../typechain-types";
import { abi as FundraiserAbi } from "../artifacts/contracts/Fundraiser.sol/Fundraiser.json";
import { abi as FundraiserFactoryAbi } from "../artifacts/contracts/FundraiserFactory.sol/FundraiserFactory.json";
import { abi as ERC20Abi } from "../artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json";
import { abi as VestingAbi } from "../artifacts/contracts/Vesting.sol/Vesting.json";
import { abi as CampaignAbi } from "../artifacts/contracts/Campaign.sol/Campaign.json";
import { abi as PositionManagerAbi } from "../artifacts/@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol/INonfungiblePositionManager.json";

export class FundraiserWeb3Connect {

    provider: Provider;
    fundraiserFactory: FundraiserFactory;
    pending: TransactionResponse[];

    constructor(factoryAddr: string) {
        if(!factoryAddr) {
            throw new Error("Factory address is required");
        }
        this.fundraiserFactory = new Contract(factoryAddr, FundraiserFactoryAbi) as FundraiserFactory;
        this.pending = [];
    }

    public connect(url: string) {
        this.provider = new JsonRpcProvider(url);
        this.fundraiserFactory = this.fundraiserFactory.connect(this.provider);
    }

    public connectWithProvider(provider: Provider) {
        this.provider = provider;
        this.fundraiserFactory = this.fundraiserFactory.connect(this.provider);
    }

    public disconnect() {
        this.provider.removeAllListeners();
    }

    public async createFundraiser(
        signer: Signer,
        params: {
            projectName: string,
            description: string,
            websiteLink: string,
            saleToken: string,
            raiseToken: string,
            vestingStartDelta: number,
            vestingDuration: number,
            poolFee: number
        },
        campaignParams: string,
        campaignID: number
    ) {
        const tx = await this.fundraiserFactory.connect(signer).createFundraiser(
            utils.defaultAbiCoder.encode(
                ["string", "string", "string", "address", "address", "uint256", "uint256", "uint24"],
                [params.projectName, params.description, params.websiteLink, params.saleToken, params.raiseToken, params.vestingStartDelta, params.vestingDuration, params.poolFee]
            ),
            campaignParams,
            campaignID
        );
        return await this.addTx(tx);
    }

    public async contribute(signer: Signer, fundraiserAddr: string, amount: BigNumberish) {
        const fundraiser = new Contract(fundraiserAddr, FundraiserAbi, signer) as Fundraiser;
        const tx = await fundraiser.contribute(amount);
        return await this.addTx(tx);
    }

    public async claimTokens(signer: Signer, fundraiserAddr: string) {
        const fundraiser = new Contract(fundraiserAddr, FundraiserAbi, signer) as Fundraiser;
        const tx = await fundraiser.claimTokens();
        return await this.addTx(tx);
    }

    public async claimFunds(signer: Signer, fundraiserAddr: string) {
        const fundraiser = new Contract(fundraiserAddr, FundraiserAbi, signer) as Fundraiser;
        const tx = await fundraiser.claimFunds();
        return await this.addTx(tx);
    }

    public async getFundraiserInfo(fundraiserAddr: string) {
        const fundraiser = new Contract(fundraiserAddr, FundraiserAbi, this.provider) as Fundraiser;
        const [projectName, description, websiteLink] = await fundraiser.info();
        const raisedAmount = await fundraiser.raisedAmount();
        const campaignAddr = await fundraiser.campaign();
        const campaign = new Contract(campaignAddr, CampaignAbi, this.provider) as ICampaign;
        const campaignType = await campaign.campaignType();

        return {
            projectName,
            description,
            websiteLink,
            raisedAmount,
            campaignType
        };
    }

    public async finalizeFundraiser(signer: Signer, fundraiserAddr: string) {
        const fundraiser = new Contract(fundraiserAddr, FundraiserAbi, signer) as Fundraiser;
        const tx = await fundraiser.finalize();
        return await this.addTx(tx);
    }

    public async setFailed(signer: Signer, fundraiserAddr: string) {
        const fundraiser = new Contract(fundraiserAddr, FundraiserAbi, signer) as Fundraiser;
        const tx = await fundraiser.setFailed();
        return await this.addTx(tx);
    }

    public async initSwapPair(signer: Signer, fundraiserAddr: string, tickLower: number, tickUpper: number) {
        const fundraiser = new Contract(fundraiserAddr, FundraiserAbi, signer) as Fundraiser;
        const tx = await fundraiser.initSwapPair(tickLower, tickUpper);
        return await this.addTx(tx);
    }

    public async claimVestedTokens(signer: Signer, vestingAddr: string) {
        const vesting = new Contract(vestingAddr, VestingAbi, signer) as IVesting;
        const tx = await vesting.claim();
        return await this.addTx(tx);
    }

    public async getClaimableVestedTokens(signer: Signer, vestingAddr: string, beneficiary: string) {
        const vesting = new Contract(vestingAddr, VestingAbi, signer) as IVesting;
        return await vesting.claimable(beneficiary);
    }

    private async addTx(tx: ContractTransaction) {
        const transaction = await this.provider.getTransaction(tx.hash);
        this.pending.push(transaction);
        return transaction;
    }

    public async updatePendingTransactions() {
        this.pending = await Promise.all(this.pending.map(async tx => {
            return tx.confirmations == 0 ? await this.provider.getTransaction(tx.hash) : tx;
        }));
    }

    public purgeMinedTransactions() {
        this.pending = this.pending.filter(tx => tx.confirmations == 0);
    }
}
