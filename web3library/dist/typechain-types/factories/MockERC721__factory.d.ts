import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { MockERC721, MockERC721Interface } from "../MockERC721";
type MockERC721ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockERC721__factory extends ContractFactory {
    constructor(...args: MockERC721ConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<MockERC721 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): MockERC721__factory;
    static readonly bytecode = "0x608060405234801561000f575f80fd5b50610f1d8061001d5f395ff3fe6080604052600436106100d9575f3560e01c80636352211e1161007c578063a22cb46511610057578063a22cb46514610238578063b88d4fde14610257578063c87b56dd1461026a578063e985e9c51461028a575f80fd5b80636352211e146101d857806370a08231146101f757806395d89b4114610224575f80fd5b8063095ea7b3116100b7578063095ea7b31461017e57806323b872dd1461019357806342842e0e146101a65780634cd88b76146101b9575f80fd5b806301ffc9a7146100dd57806306fdde0314610111578063081812fc14610132575b5f80fd5b3480156100e8575f80fd5b506100fc6100f7366004610a08565b6102d1565b60405190151581526020015b60405180910390f35b34801561011c575f80fd5b50610125610322565b6040516101089190610a6d565b34801561013d575f80fd5b5061016661014c366004610a7f565b5f908152600460205260409020546001600160a01b031690565b6040516001600160a01b039091168152602001610108565b61019161018c366004610aac565b6103b1565b005b6101916101a1366004610ad4565b610495565b6101916101b4366004610ad4565b610688565b3480156101c4575f80fd5b506101916101d3366004610bb2565b610773565b3480156101e3575f80fd5b506101666101f2366004610a7f565b6107e6565b348015610202575f80fd5b50610216610211366004610c12565b61083c565b604051908152602001610108565b34801561022f575f80fd5b5061012561089d565b348015610243575f80fd5b50610191610252366004610c2b565b6108ac565b610191610265366004610c64565b610917565b348015610275575f80fd5b50610125610284366004610a7f565b50606090565b348015610295575f80fd5b506100fc6102a4366004610cdb565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f6301ffc9a760e01b6001600160e01b03198316148061030157506380ac58cd60e01b6001600160e01b03198316145b8061031c5750635b5e139f60e01b6001600160e01b03198316145b92915050565b60605f805461033090610d0c565b80601f016020809104026020016040519081016040528092919081815260200182805461035c90610d0c565b80156103a75780601f1061037e576101008083540402835291602001916103a7565b820191905f5260205f20905b81548152906001019060200180831161038a57829003601f168201915b5050505050905090565b5f818152600260205260409020546001600160a01b0316338114806103f857506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff165b61043a5760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064015b60405180910390fd5b5f8281526004602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b5f818152600260205260409020546001600160a01b038481169116146104ea5760405162461bcd60e51b815260206004820152600a60248201526957524f4e475f46524f4d60b01b6044820152606401610431565b6001600160a01b0382166105345760405162461bcd60e51b81526020600482015260116024820152701253959053125117d49150d25412515395607a1b6044820152606401610431565b336001600160a01b038416148061056d57506001600160a01b0383165f90815260056020908152604080832033845290915290205460ff165b8061058d57505f818152600460205260409020546001600160a01b031633145b6105ca5760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b6044820152606401610431565b6001600160a01b0383165f9081526003602052604081208054916105ed83610d58565b90915550506001600160a01b0382165f90815260036020526040812080549161061583610d6d565b90915550505f81815260026020908152604080832080546001600160a01b038088166001600160a01b031992831681179093556004909452828520805490911690559051849391928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610693838383610495565b813b158061072f5750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401525f608484015290919084169063150b7a029060a4016020604051808303815f875af11580156106ff573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107239190610d85565b6001600160e01b031916145b61076e5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b6044820152606401610431565b505050565b60065460ff16156107bc5760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b6044820152606401610431565b5f6107c78382610deb565b5060016107d48282610deb565b50506006805460ff1916600117905550565b5f818152600260205260409020546001600160a01b0316806108375760405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b6044820152606401610431565b919050565b5f6001600160a01b0382166108825760405162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b6044820152606401610431565b506001600160a01b03165f9081526003602052604090205490565b60606001805461033090610d0c565b335f8181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610922848484610495565b823b15806109ab5750604051630a85bd0160e11b808252906001600160a01b0385169063150b7a029061095f903390899088908890600401610eab565b6020604051808303815f875af115801561097b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061099f9190610d85565b6001600160e01b031916145b6109ea5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b6044820152606401610431565b50505050565b6001600160e01b031981168114610a05575f80fd5b50565b5f60208284031215610a18575f80fd5b8135610a23816109f0565b9392505050565b5f81518084525f5b81811015610a4e57602081850181015186830182015201610a32565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f610a236020830184610a2a565b5f60208284031215610a8f575f80fd5b5035919050565b80356001600160a01b0381168114610837575f80fd5b5f8060408385031215610abd575f80fd5b610ac683610a96565b946020939093013593505050565b5f805f60608486031215610ae6575f80fd5b610aef84610a96565b9250610afd60208501610a96565b9150604084013590509250925092565b634e487b7160e01b5f52604160045260245ffd5b5f67ffffffffffffffff80841115610b3b57610b3b610b0d565b604051601f8501601f19908116603f01168101908282118183101715610b6357610b63610b0d565b81604052809350858152868686011115610b7b575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f830112610ba3575f80fd5b610a2383833560208501610b21565b5f8060408385031215610bc3575f80fd5b823567ffffffffffffffff80821115610bda575f80fd5b610be686838701610b94565b93506020850135915080821115610bfb575f80fd5b50610c0885828601610b94565b9150509250929050565b5f60208284031215610c22575f80fd5b610a2382610a96565b5f8060408385031215610c3c575f80fd5b610c4583610a96565b915060208301358015158114610c59575f80fd5b809150509250929050565b5f805f8060808587031215610c77575f80fd5b610c8085610a96565b9350610c8e60208601610a96565b925060408501359150606085013567ffffffffffffffff811115610cb0575f80fd5b8501601f81018713610cc0575f80fd5b610ccf87823560208401610b21565b91505092959194509250565b5f8060408385031215610cec575f80fd5b610cf583610a96565b9150610d0360208401610a96565b90509250929050565b600181811c90821680610d2057607f821691505b602082108103610d3e57634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b5f81610d6657610d66610d44565b505f190190565b5f60018201610d7e57610d7e610d44565b5060010190565b5f60208284031215610d95575f80fd5b8151610a23816109f0565b601f82111561076e57805f5260205f20601f840160051c81016020851015610dc55750805b601f840160051c820191505b81811015610de4575f8155600101610dd1565b5050505050565b815167ffffffffffffffff811115610e0557610e05610b0d565b610e1981610e138454610d0c565b84610da0565b602080601f831160018114610e4c575f8415610e355750858301515b5f19600386901b1c1916600185901b178555610ea3565b5f85815260208120601f198616915b82811015610e7a57888601518255948401946001909101908401610e5b565b5085821015610e9757878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90610edd90830184610a2a565b969550505050505056fea2646970667358221220ea50af51e50ae71f744ebf0bdbf51505cf151ac6a7b655c2d5cd87282105763964736f6c63430008180033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getApproved";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "name_";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "symbol_";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isApprovedForAll";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "ownerOf";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "safeTransferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "safeTransferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForAll";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "tokenURI";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_approved";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_tokenId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ApprovalForAll";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_operator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_approved";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_tokenId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): MockERC721Interface;
    static connect(address: string, runner?: ContractRunner | null): MockERC721;
}
export {};
