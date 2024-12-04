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
    connected: boolean;

    constructor(factoryAddr: string) {
        if (!factoryAddr) {
            throw new Error("Factory address is required");
        }
        this.fundraiserFactory = FundraiserFactory__factory.connect(factoryAddr);
        this.pending = [];
        this.connected = false;
    }

    public async performConnectionCheck() {
        return this.safeExecute(async () => {
            await this.fundraiserFactory.fundraiserID();
        });
    }

    /**
     * Connects the library to a JSON-RPC provider.
     * @param url - The RPC URL of the Ethereum node.
     */
    public async connect(url: string) {
        this.provider = new JsonRpcProvider(url);
        this.fundraiserFactory = this.fundraiserFactory.connect(this.provider);
        await this.performConnectionCheck();
        this.connected = true;
    }

    /**
     * Connects the library to a pre-configured provider.
     * @param provider - An existing ethers.js provider instance.
     */
    public async connectWithProvider(provider: Provider) {
        this.provider = provider;
        this.fundraiserFactory = this.fundraiserFactory.connect(this.provider);
        await this.performConnectionCheck();
        this.connected = true;
    }

    /**
     * Disconnects the library from the current provider.
     */
    public disconnect() {
        this.provider.removeAllListeners();
    }

    /**
     * Internal utility to safely execute asynchronous calls and handle errors.
     */
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

    /**
     * Creates a new stealth launch fundraiser.
     * @param signer - The signer instance for transaction signing.
     * @param params - Parameters for the fundraiser creation.
     * @param campaignParams - Campaign-specific parameters.
     */
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

    /**
     * Creates a new fair launch fundraiser.
     * @param signer - The signer instance for transaction signing.
     * @param params - Parameters for the fundraiser creation.
     * @param campaignParams - Campaign-specific parameters.
     */
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

    /**
     * Approves an ERC20 token for spending by a specific address.
     * @param signer - The signer instance for transaction signing.
     * @param tokenAddr - Address of the ERC20 token.
     * @param spenderAddr - Address allowed to spend the token.
     * @param amount - Amount of tokens to approve.
     */
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

    /**
     * Checks the allowance of a spender for a specific ERC20 token.
     * @param signer - The signer instance for transaction signing.
     * @param tokenAddr - Address of the ERC20 token.
     * @param spenderAddr - Address of the spender.
     * @returns The current allowance as a BigNumber.
     */
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
    
    /**
     * Contributes to a fundraiser by transferring the specified amount.
     * @param signer - The signer instance for transaction signing.
     * @param fundraiserAddr - Address of the fundraiser contract.
     * @param amount - Amount to contribute.
     */
    public async contribute(signer: Signer, fundraiserAddr: string, amount: BigNumberish) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const raiseToken = await fundraiser.raiseToken();
            const weth = await fundraiser.WETH();
            if(raiseToken === weth) {
                const tx = await fundraiser.contribute(0, {value: amount});
                return await this.addTx(tx);
            } else {
                const tx = await fundraiser.contribute(amount);
                return await this.addTx(tx);
            }
            
        });
    }

    /**
     * Fetches the amount already contributed to a fundraiser by a specific address.
     * @param signer - The signer of the contributor
     * @param fundraiserAddr - Address of the fundraiser contract.
     */
    public async getContribution(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);
            const userAddr = await signer.getAddress();
            const contribution = await fundraiser.contributions(userAddr);
            return contribution;
        });
    }

    /**
     * Claims tokens from a finalized fundraiser.
     * @param signer - The signer instance for transaction signing.
     * @param fundraiserAddr - Address of the fundraiser contract.
     */
    public async claimTokens(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.claimTokens();
            return await this.addTx(tx);
        });
    }

    /**
     * Claims funds from a failed fundraiser.
     * @param signer - The signer instance for transaction signing.
     * @param fundraiserAddr - Address of the fundraiser contract.
     */
    public async claimFunds(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.claimFunds();
            return await this.addTx(tx);
        });
    }

    /**
     * Retrieves vesting information for a user in a specific fundraiser.
     * @param signer - The signer instance for transaction signing.
     * @param fundraiserAddr - Address of the fundraiser contract.
     * @returns An object containing releasable amount and vesting schedules.
     */
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

    /**
     * Claims vested tokens for a user.
     * @param signer - The signer instance for transaction signing.
     * @param fundraiserAddr - Address of the fundraiser contract.
     */
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

    /**
     * Finalizes a fundraiser, locking it and enabling token claims.
     * @param signer - The signer instance for transaction signing.
     * @param fundraiserAddr - Address of the fundraiser contract.
     */
    public async finalizeFundraiser(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.finalize();
            return await this.addTx(tx);
        });
    }

    /**
     * Cancels a fundraiser, marking it as failed.
     * @param signer - The signer instance for transaction signing.
     * @param fundraiserAddr - Address of the fundraiser contract.
     */
    public async cancelFundraiser(signer: Signer, fundraiserAddr: string) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.setFailed();
            return await this.addTx(tx);
        });
    }

    /**
     * Retrieves liquidity information for initializing the swap pair.
     * @param fundraiserAddr - Address of the fundraiser contract.
     * @param initialRaiseTokenLiquidity - Initial amount of raise tokens to be provided.
     * @returns The required sale token liquidity.
     */
    public async getSaleTokenLiquidityInfo(fundraiserAddr: string, initialRaiseTokenLiquidity: BigNumberish) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);

        let liquidityInfo = await fundraiser.getRequiredAmountsForLiquidity(initialRaiseTokenLiquidity);
        return liquidityInfo.requiredSaleTokens;
    }

    /**
     * Initializes a swap pair for a finalized fundraiser.
     * @param signer - The signer instance for transaction signing.
     * @param fundraiserAddr - Address of the fundraiser contract.
     * @param tickLower - Lower tick range for the pool.
     * @param tickUpper - Upper tick range for the pool.
     */
    public async initSwapPair(signer: Signer, fundraiserAddr: string, tickLower: number, tickUpper: number) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.initSwapPair(tickLower, tickUpper);
            return await this.addTx(tx);
        });
    }

    /**
     * Fetches detailed information about a fundraiser's state.
     * @param fundraiserAddr - Address of the fundraiser contract.
     * @returns An object containing fundraiser details such as state, tokens, and balances.
     */
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
            const config = await campaignContract.getConfig();

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
                raiseTokenBalance,
                config
            };
        });
    }

    /**
     * Fetches detailed information about a token
     * @param tokenAddr - Address of the erc20 token
     * @returns An object containing details
     */
    public async getTokenInfo(tokenAddr: string) {
        return this.safeExecute(async () => {
            const tokenContract = ERC20__factory.connect(tokenAddr, this.provider);
            const name = await tokenContract.name();
            const symbol = await tokenContract.symbol();
            const decimals = await tokenContract.decimals();
            return {
                name,
                symbol,
                decimals
            };
        });
    }

    /**
     * Fetches all fundraisers created by the factory.
     */
    public async getFundraisersCount() {
        return this.safeExecute(async () => {
            return await this.fundraiserFactory.fundraiserID();
        });
    }

    /**
     * Fetches all fundraisers created by the factory.
     * @param startID - The ID of the first fundraiser to fetch. Use 0 to start from the beginning.
     * @param endID - The ID of the last fundraiser to fetch. Use 0 to fetch all fundraisers.
     * @param type - The type of fundraisers to fetch. Use 0 for active fundraisers, 1 for finalized, 2 for failed, 3 for claimable. 
     */
    public async getAllFundraisers(startID: number, endID: number, type: number) {
        return this.safeExecute(async () => {
            return await this.fundraiserFactory.listFundraisers(startID, endID, type);
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
