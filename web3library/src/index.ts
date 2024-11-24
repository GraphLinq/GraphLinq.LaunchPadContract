import { BigNumberish, ContractTransactionResponse, JsonRpcProvider, Provider, TransactionResponse } from "ethers";
import { ethers, Signer } from "ethers";
import {
    Fundraiser,
    Fundraiser__factory,
    FundraiserFactory,
    FundraiserFactory__factory,
    IVesting,
    IVesting__factory,
    ERC20,
    ERC20__factory,
    ICampaign,
    ICampaign__factory,
    INonfungiblePositionManager,
} from "./typechain-types";

import { FundraiserError, UnknownError, mapRevertReasonToError } from './errors';

export { FundraiserFactory__factory, Fundraiser__factory, MockERC20__factory } from "./typechain-types";

export class FundraiserWeb3Connect {
    provider: Provider;
    fundraiserFactory: FundraiserFactory;
    pending: TransactionResponse[];

    constructor(factoryAddr: string) {
        if (!factoryAddr) {
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

    private async safeExecute<T>(
        action: () => Promise<T>
    ): Promise<T> {
        try {
            return await action();
        } catch (error: any) {
            if (error.reason) {
                throw mapRevertReasonToError(error.reason);
            } else if (error.data) {
                try {
                    const decodedReason = ethers.AbiCoder.defaultAbiCoder().decode(["string"], error.data)[0];
                    throw mapRevertReasonToError(decodedReason);
                } catch {
                    throw new UnknownError(`Revert data could not be decoded. Raw data: ${error.data}`);
                }
            } else {
                throw new UnknownError(error.message);
            }
        }
    }

    public async createFundraiserStealthLaunch(
        signer: Signer,
        params: {
            projectName: string;
            description: string;
            websiteLink: string;
            saleToken: string;
            raiseToken: string;
            vestingStartDelta: number;
            vestingDuration: number;
            poolFee: number;
        },
        campaignParams: {
            maxCap: BigNumberish;
            pricePerToken: BigNumberish;
        }
    ) {
        return this.safeExecute(async () => {
            const tx = await this.fundraiserFactory.connect(signer).createFundraiser(
                ethers.AbiCoder.defaultAbiCoder().encode(
                    ["string", "string", "string", "address", "address", "uint256", "uint256", "uint24"],
                    [
                        params.projectName,
                        params.description,
                        params.websiteLink,
                        params.saleToken,
                        params.raiseToken,
                        params.vestingStartDelta,
                        params.vestingDuration,
                        params.poolFee,
                    ]
                ),
                ethers.AbiCoder.defaultAbiCoder().encode(["uint256", "uint256"], [campaignParams.maxCap, campaignParams.pricePerToken]),
                0
            );
            return await this.addTx(tx);
        });
    }

    public async createFundraiserFairLaunch(
        signer: Signer,
        params: {
            projectName: string;
            description: string;
            websiteLink: string;
            saleToken: string;
            raiseToken: string;
            vestingStartDelta: number;
            vestingDuration: number;
            poolFee: number;
        },
        campaignParams: {
            endTime: number;
            minimumGoal: BigNumberish;
            pricePerToken: BigNumberish;
        }
    ) {
        return this.safeExecute(async () => {
            const tx = await this.fundraiserFactory.connect(signer).createFundraiser(
                ethers.AbiCoder.defaultAbiCoder().encode(
                    ["string", "string", "string", "address", "address", "uint256", "uint256", "uint24"],
                    [
                        params.projectName,
                        params.description,
                        params.websiteLink,
                        params.saleToken,
                        params.raiseToken,
                        params.vestingStartDelta,
                        params.vestingDuration,
                        params.poolFee,
                    ]
                ),
                ethers.AbiCoder.defaultAbiCoder().encode(["uint256", "uint256", "uint256"], [campaignParams.endTime, campaignParams.minimumGoal, campaignParams.pricePerToken]),
                1
            );
            return await this.addTx(tx);
        });
    }

    public async approveERC20(
        signer: Signer,
        tokenAddr: string,
        spenderAddr: string,
        amount: BigNumberish
    ) {
        return this.safeExecute(async () => {
            // Connect to the ERC20 contract using the signer
            const tokenContract = new ethers.Contract(
                tokenAddr,
                [
                    // Minimal ERC20 ABI for approve function
                    "function approve(address spender, uint256 amount) public returns (bool)"
                ],
                signer
            );
    
            // Call the `approve` function on the token contract
            const tx = await tokenContract.approve(spenderAddr, amount);
    
            // Add transaction to pending
            return await this.addTx(tx);
        });
    }

    //similar function to approveERC20 to check the allowance
    public async checkAllowance(
        signer: Signer,
        tokenAddr: string,
        spenderAddr: string
    ) {
        return this.safeExecute(async () => {
            // Connect to the ERC20 contract using the signer
            const tokenContract = new ethers.Contract(
                tokenAddr,
                [
                    // Minimal ERC20 ABI for approve function
                    "function allowance(address owner, address spender) public view returns (uint256)"
                ],
                signer
            );
    
            // Call the `allowance` function on the token contract
            const allowance = await tokenContract.allowance(signer.getAddress(), spenderAddr);
            return allowance;
        });
    }
    

    public async contribute(signer: Signer, fundraiserAddr: string, amount: BigNumberish) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.contribute(amount);
            return await this.addTx(tx);
        });
    }

    public async claimTokens(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.claimTokens();
            return await this.addTx(tx);
        });
    }

    public async claimFunds(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.claimFunds();
            return await this.addTx(tx);
        });
    }

    public async getVestingInfo(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const userAddr = await signer.getAddress();
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);
            const vestingAddr = await fundraiser.vesting();
            const vesting = IVesting__factory.connect(vestingAddr, this.provider);
            const releasableAmount = await vesting.releasableAmount(userAddr);
            const vestingInfo = await vesting.vestingSchedules(userAddr);

            return {
                releasableAmount,
                vestingInfo
            };
        });
    }

    public async claimVested(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const userAddr = await signer.getAddress();
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);
            const vestingAddr = await fundraiser.vesting();
            const vesting = IVesting__factory.connect(vestingAddr, signer);
            const tx = await vesting.releaseFor(userAddr);
            return await this.addTx(tx);
        });
    }

    public async finalizeFundraiser(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.finalize();
            return await this.addTx(tx);
        });
    }

    public async cancelFundraiser(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.setFailed();
            return await this.addTx(tx);
        });
    }

    public async getSaleTokenLiquidityInfo(fundraiserAddr: string, initialRaiseTokenLiquidity: BigNumberish) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);

        let liquidityInfo = await fundraiser.getRequiredAmountsForLiquidity(initialRaiseTokenLiquidity);
        return liquidityInfo.requiredSaleTokens;
    }

    public async initSwapPair(signer: Signer, fundraiserAddr: string, tickLower: number, tickUpper: number) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.initSwapPair(tickLower, tickUpper);
            return await this.addTx(tx);
        });
    }

    public async setFailed(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.setFailed();
            return await this.addTx(tx);
        });
    }

    public async getFundraiserState(fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);
            let vestingStartDelta = await fundraiser.vestingStartDelta();
            let vestingDuration = await fundraiser.vestingDuration();
            let raisedAmount = await fundraiser.raisedAmount();
            let soldAmount = await fundraiser.soldAmount();
            let finalizedTimestamp = await fundraiser.finalizedTimestamp();
            let createdTimestamp = await fundraiser.createdTimestamp();
            let saleToken = await fundraiser.saleToken();
            let raiseToken = await fundraiser.raiseToken();
            let state = await fundraiser.state();
            let poolFee = await fundraiser.poolFee();
            let projetInfo = await fundraiser.info();
            let campaign = await fundraiser.campaign();
            const campaignContract = ICampaign__factory.connect(campaign, this.provider);
            const campaignDetails = await campaignContract.getCampaignDetails();
            const pricePerToken = await campaignContract.pricePerToken();

            // check how many sale tokens are left in fundraiser
            const saleTokenContract = ERC20__factory.connect(saleToken, this.provider);
            const saleTokenBalance = await saleTokenContract.balanceOf(fundraiserAddr);

            const raiseTokenContract = ERC20__factory.connect(raiseToken, this.provider);
            const raiseTokenBalance = await raiseTokenContract.balanceOf(fundraiserAddr);

            // create a custom state string based on the state number
            let stateString = "";
            switch (state) {
                case BigInt(0):
                    stateString = "Active";
                    break;
                case BigInt(1):
                    stateString = "Finalized";
                    break;
                case BigInt(2):
                    stateString = "Failed";
                    break;
                case BigInt(3):
                    stateString = "SwapPairCreated";
                    break;
                default:
                    stateString = "Unknown";
            }

            return {
                vestingStartDelta,
                vestingDuration,
                raisedAmount,
                soldAmount,
                createdTimestamp,
                finalizedTimestamp,
                saleToken,
                raiseToken,
                stateString,
                poolFee,
                projetInfo,
                campaignDetails,
                pricePerToken,
                saleTokenBalance,
                raiseTokenBalance
            };
        });
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
                    const updatedTx = await this.provider.getTransaction(tx.hash);
                    if (updatedTx) {
                        return updatedTx;
                    }
                }
                return tx;
            })
        );
    }

    public async purgeMinedTransactions(): Promise<void> {
        const pendingTransactions = await Promise.all(
            this.pending.map(async (tx) => {
                const confirmations = await tx.confirmations();
                return confirmations > 0 ? null : tx;
            })
        );
        this.pending = pendingTransactions.filter((tx): tx is TransactionResponse => tx !== null);
    }
}
