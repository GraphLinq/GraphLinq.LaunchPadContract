import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface IERC721MetadataInterface extends Interface {
    getFunction(nameOrSignature: "approve" | "balanceOf" | "getApproved" | "isApprovedForAll" | "name" | "ownerOf" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "supportsInterface" | "symbol" | "tokenURI" | "transferFrom"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Approval" | "ApprovalForAll" | "Transfer"): EventFragment;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [AddressLike, AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
export declare namespace ApprovalEvent {
    type InputTuple = [
        _owner: AddressLike,
        _approved: AddressLike,
        _tokenId: BigNumberish
    ];
    type OutputTuple = [
        _owner: string,
        _approved: string,
        _tokenId: bigint
    ];
    interface OutputObject {
        _owner: string;
        _approved: string;
        _tokenId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ApprovalForAllEvent {
    type InputTuple = [
        _owner: AddressLike,
        _operator: AddressLike,
        _approved: boolean
    ];
    type OutputTuple = [
        _owner: string,
        _operator: string,
        _approved: boolean
    ];
    interface OutputObject {
        _owner: string;
        _operator: string;
        _approved: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferEvent {
    type InputTuple = [
        _from: AddressLike,
        _to: AddressLike,
        _tokenId: BigNumberish
    ];
    type OutputTuple = [_from: string, _to: string, _tokenId: bigint];
    interface OutputObject {
        _from: string;
        _to: string;
        _tokenId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IERC721Metadata extends BaseContract {
    connect(runner?: ContractRunner | null): IERC721Metadata;
    waitForDeployment(): Promise<this>;
    interface: IERC721MetadataInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    approve: TypedContractMethod<[
        _approved: AddressLike,
        _tokenId: BigNumberish
    ], [
        void
    ], "payable">;
    balanceOf: TypedContractMethod<[_owner: AddressLike], [bigint], "view">;
    getApproved: TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;
    isApprovedForAll: TypedContractMethod<[
        _owner: AddressLike,
        _operator: AddressLike
    ], [
        boolean
    ], "view">;
    name: TypedContractMethod<[], [string], "view">;
    ownerOf: TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;
    "safeTransferFrom(address,address,uint256)": TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _tokenId: BigNumberish
    ], [
        void
    ], "payable">;
    "safeTransferFrom(address,address,uint256,bytes)": TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _tokenId: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "payable">;
    setApprovalForAll: TypedContractMethod<[
        _operator: AddressLike,
        _approved: boolean
    ], [
        void
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceID: BytesLike
    ], [
        boolean
    ], "view">;
    symbol: TypedContractMethod<[], [string], "view">;
    tokenURI: TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;
    transferFrom: TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _tokenId: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        _approved: AddressLike,
        _tokenId: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[_owner: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getApproved"): TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "isApprovedForAll"): TypedContractMethod<[
        _owner: AddressLike,
        _operator: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "ownerOf"): TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "safeTransferFrom(address,address,uint256)"): TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _tokenId: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "safeTransferFrom(address,address,uint256,bytes)"): TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _tokenId: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "setApprovalForAll"): TypedContractMethod<[
        _operator: AddressLike,
        _approved: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceID: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tokenURI"): TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        _from: AddressLike,
        _to: AddressLike,
        _tokenId: BigNumberish
    ], [
        void
    ], "payable">;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "ApprovalForAll"): TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    filters: {
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "ApprovalForAll(address,address,bool)": TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
        ApprovalForAll: TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    };
}
