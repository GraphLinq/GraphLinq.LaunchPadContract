import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../common";
import type { ERC1967Proxy, ERC1967ProxyInterface } from "../ERC1967Proxy";
type ERC1967ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1967Proxy__factory extends ContractFactory {
    constructor(...args: ERC1967ProxyConstructorParams);
    getDeployTransaction(implementation: AddressLike, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(implementation: AddressLike, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ERC1967Proxy & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC1967Proxy__factory;
    static readonly bytecode = "0x60806040526040516103f03803806103f08339810160408190526100229161025e565b61002c8282610033565b5050610341565b61003c82610091565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a280511561008557610080828261010c565b505050565b61008d61017f565b5050565b806001600160a01b03163b5f036100cb57604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60605f80846001600160a01b0316846040516101289190610326565b5f60405180830381855af49150503d805f8114610160576040519150601f19603f3d011682016040523d82523d5f602084013e610165565b606091505b5090925090506101768583836101a0565b95945050505050565b341561019e5760405163b398979f60e01b815260040160405180910390fd5b565b6060826101b5576101b0826101ff565b6101f8565b81511580156101cc57506001600160a01b0384163b155b156101f557604051639996b31560e01b81526001600160a01b03851660048201526024016100c2565b50805b9392505050565b80511561020f5780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b634e487b7160e01b5f52604160045260245ffd5b5f5b8381101561025657818101518382015260200161023e565b50505f910152565b5f806040838503121561026f575f80fd5b82516001600160a01b0381168114610285575f80fd5b60208401519092506001600160401b03808211156102a1575f80fd5b818501915085601f8301126102b4575f80fd5b8151818111156102c6576102c6610228565b604051601f8201601f19908116603f011681019083821181831017156102ee576102ee610228565b81604052828152886020848701011115610306575f80fd5b61031783602083016020880161023c565b80955050505050509250929050565b5f825161033781846020870161023c565b9190910192915050565b60a38061034d5f395ff3fe6080604052600a600c565b005b60186014601a565b6050565b565b5f604b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b365f80375f80365f845af43d5f803e8080156069573d5ff35b3d5ffdfea264697066735822122053aedeb77e65dc4a83b310a6b6273b3009a2a96dd052fed9acb95e03f1f659a964736f6c63430008180033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "Upgraded";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AddressEmptyCode";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1967InvalidImplementation";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1967NonPayable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FailedCall";
        readonly inputs: readonly [];
    }];
    static createInterface(): ERC1967ProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC1967Proxy;
}
export {};
