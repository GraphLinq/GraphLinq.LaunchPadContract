import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export declare namespace INonfungiblePositionManager {
    type MintParamsStruct = {
        token0: AddressLike;
        token1: AddressLike;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Desired: BigNumberish;
        amount1Desired: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: AddressLike;
        deadline: BigNumberish;
    };
    type MintParamsStructOutput = [
        token0: string,
        token1: string,
        fee: bigint,
        tickLower: bigint,
        tickUpper: bigint,
        amount0Desired: bigint,
        amount1Desired: bigint,
        amount0Min: bigint,
        amount1Min: bigint,
        recipient: string,
        deadline: bigint
    ] & {
        token0: string;
        token1: string;
        fee: bigint;
        tickLower: bigint;
        tickUpper: bigint;
        amount0Desired: bigint;
        amount1Desired: bigint;
        amount0Min: bigint;
        amount1Min: bigint;
        recipient: string;
        deadline: bigint;
    };
}
export interface INonfungiblePositionManagerInterface extends Interface {
    getFunction(nameOrSignature: "createAndInitializePoolIfNecessary" | "mint"): FunctionFragment;
    encodeFunctionData(functionFragment: "createAndInitializePoolIfNecessary", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [INonfungiblePositionManager.MintParamsStruct]): string;
    decodeFunctionResult(functionFragment: "createAndInitializePoolIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
}
export interface INonfungiblePositionManager extends BaseContract {
    connect(runner?: ContractRunner | null): INonfungiblePositionManager;
    waitForDeployment(): Promise<this>;
    interface: INonfungiblePositionManagerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    createAndInitializePoolIfNecessary: TypedContractMethod<[
        token0: AddressLike,
        token1: AddressLike,
        fee: BigNumberish,
        sqrtPriceX96: BigNumberish
    ], [
        string
    ], "payable">;
    mint: TypedContractMethod<[
        params: INonfungiblePositionManager.MintParamsStruct
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            tokenId: bigint;
            liquidity: bigint;
            amount0: bigint;
            amount1: bigint;
        }
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "createAndInitializePoolIfNecessary"): TypedContractMethod<[
        token0: AddressLike,
        token1: AddressLike,
        fee: BigNumberish,
        sqrtPriceX96: BigNumberish
    ], [
        string
    ], "payable">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        params: INonfungiblePositionManager.MintParamsStruct
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            tokenId: bigint;
            liquidity: bigint;
            amount0: bigint;
            amount1: bigint;
        }
    ], "payable">;
    filters: {};
}
