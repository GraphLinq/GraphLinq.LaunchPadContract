import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IProxyAdminInterface extends Interface {
    getFunction(nameOrSignature: "upgrade" | "upgradeAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "upgrade", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "upgradeAndCall", values: [AddressLike, AddressLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeAndCall", data: BytesLike): Result;
}
export interface IProxyAdmin extends BaseContract {
    connect(runner?: ContractRunner | null): IProxyAdmin;
    waitForDeployment(): Promise<this>;
    interface: IProxyAdminInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    upgrade: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        void
    ], "nonpayable">;
    upgradeAndCall: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BytesLike
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "upgrade"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "upgradeAndCall"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BytesLike
    ], [
        void
    ], "payable">;
    filters: {};
}
