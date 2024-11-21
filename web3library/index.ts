import { ContractTransactionResponse, JsonRpcProvider, Provider, TransactionResponse } from "ethers";
import { BigNumberish, Contract, ContractTransaction, ethers, Signer } from "ethers";
import { Fundraiser, Fundraiser__factory, FundraiserFactory, FundraiserFactory__factory, IVesting, IVesting__factory, ERC20, ICampaign, ICampaign__factory, INonfungiblePositionManager } from "./typechain-types";

export class FundraiserWeb3Connect {

    provider: Provider;
    fundraiserFactory: FundraiserFactory;
    pending: TransactionResponse[];

    constructor(factoryAddr: string) {
        if(!factoryAddr) {
            throw new Error("Factory address is required");
        }
        this.fundraiserFactory = FundraiserFactory__factory.connect(factoryAddr);
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
            
            ethers.AbiCoder.defaultAbiCoder().encode(
                ["string", "string", "string", "address", "address", "uint256", "uint256", "uint24"],
                [params.projectName, params.description, params.websiteLink, params.saleToken, params.raiseToken, params.vestingStartDelta, params.vestingDuration, params.poolFee]
            ),
            campaignParams,
            campaignID
        );
        return await this.addTx(tx);
    }

    public async contribute(signer: Signer, fundraiserAddr: string, amount: BigNumberish) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
        const tx = await fundraiser.contribute(amount);
        return await this.addTx(tx);
    }

    public async claimTokens(signer: Signer, fundraiserAddr: string) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
        const tx = await fundraiser.claimTokens();
        return await this.addTx(tx);
    }

    public async claimFunds(signer: Signer, fundraiserAddr: string) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
        const tx = await fundraiser.claimFunds();
        return await this.addTx(tx);
    }

    public async getFundraiserInfo(fundraiserAddr: string) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);
        const [projectName, description, websiteLink] = await fundraiser.info();
        const raisedAmount = await fundraiser.raisedAmount();
        const campaignAddr = await fundraiser.campaign();
        const campaign = ICampaign__factory.connect(campaignAddr, this.provider);
        const campaignType = await campaign.getCampaignDetails()[0];

        return {
            projectName,
            description,
            websiteLink,
            raisedAmount,
            campaignType
        };
    }

    public async finalizeFundraiser(signer: Signer, fundraiserAddr: string) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
        const tx = await fundraiser.finalize();
        return await this.addTx(tx);
    }

    public async setFailed(signer: Signer, fundraiserAddr: string) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
        const tx = await fundraiser.setFailed();
        return await this.addTx(tx);
    }

    public async initSwapPair(signer: Signer, fundraiserAddr: string, tickLower: number, tickUpper: number) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
        const tx = await fundraiser.initSwapPair(tickLower, tickUpper);
        return await this.addTx(tx);
    }

    public async claimVestedTokens(signer: Signer, vestingAddr: string) {
        const vesting = IVesting__factory.connect(vestingAddr, signer);
        const tx = await vesting.releaseFor(await signer.getAddress());
        return await this.addTx(tx);
    }

    public async getClaimableVestedTokens(signer: Signer, vestingAddr: string, beneficiary: string) {
        const vesting = IVesting__factory.connect(vestingAddr, signer);
        return await vesting.releasableAmount(beneficiary);
    }

    private async addTx(tx: ContractTransactionResponse) {
        this.pending.push(tx);
        return tx;
    }

    public async updatePendingTransactions(): Promise<void> {
        this.pending = await Promise.all(
            this.pending.map(async (tx) => {
                const confirmations = await tx.confirmations();
                if (confirmations === 0) {
                    // Fetch the updated transaction from the provider
                    const updatedTx = await this.provider.getTransaction(tx.hash);
                    if (updatedTx) {
                        return updatedTx;
                    }
                }
                return tx; // Keep the transaction as-is if it's already confirmed or not found
            })
        );
    }

    public async purgeMinedTransactions(): Promise<void> {
        const pendingTransactions = await Promise.all(
            this.pending.map(async (tx) => {
                const confirmations = await tx.confirmations();

                // If confirmations > 0, the transaction is mined
                return confirmations > 0 ? null : tx;
            })
        );

        // Filter out `null` values (mined transactions)
        this.pending = pendingTransactions.filter((tx): tx is TransactionResponse => tx !== null);
    }
}
