import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { MockERC20, MockERC20Interface } from "../MockERC20";
type MockERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockERC20__factory extends ContractFactory {
    constructor(...args: MockERC20ConstructorParams);
    getDeployTransaction(name: string, symbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(name: string, symbol: string, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<MockERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): MockERC20__factory;
    static readonly bytecode = "0x608060405234801562000010575f80fd5b5060405162000a4338038062000a4383398101604081905262000033916200011e565b818160036200004383826200020e565b5060046200005282826200020e565b5050505050620002da565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000081575f80fd5b81516001600160401b03808211156200009e576200009e6200005d565b604051601f8301601f19908116603f01168101908282118183101715620000c957620000c96200005d565b8160405283815260209250866020858801011115620000e6575f80fd5b5f91505b83821015620001095785820183015181830184015290820190620000ea565b5f602085830101528094505050505092915050565b5f806040838503121562000130575f80fd5b82516001600160401b038082111562000147575f80fd5b620001558683870162000071565b935060208501519150808211156200016b575f80fd5b506200017a8582860162000071565b9150509250929050565b600181811c908216806200019957607f821691505b602082108103620001b857634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200020957805f5260205f20601f840160051c81016020851015620001e55750805b601f840160051c820191505b8181101562000206575f8155600101620001f1565b50505b505050565b81516001600160401b038111156200022a576200022a6200005d565b62000242816200023b845462000184565b84620001be565b602080601f83116001811462000278575f8415620002605750858301515b5f19600386901b1c1916600185901b178555620002d2565b5f85815260208120601f198616915b82811015620002a85788860151825594840194600190910190840162000287565b5085821015620002c657878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b61075b80620002e85f395ff3fe608060405234801561000f575f80fd5b506004361061009b575f3560e01c806340c10f191161006357806340c10f191461011457806370a082311461012957806395d89b4114610151578063a9059cbb14610159578063dd62ed3e1461016c575f80fd5b806306fdde031461009f578063095ea7b3146100bd57806318160ddd146100e057806323b872dd146100f2578063313ce56714610105575b5f80fd5b6100a76101a4565b6040516100b491906105b5565b60405180910390f35b6100d06100cb36600461061c565b610234565b60405190151581526020016100b4565b6002545b6040519081526020016100b4565b6100d0610100366004610644565b61024d565b604051601281526020016100b4565b61012761012236600461061c565b610270565b005b6100e461013736600461067d565b6001600160a01b03165f9081526020819052604090205490565b6100a761027e565b6100d061016736600461061c565b61028d565b6100e461017a36600461069d565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6060600380546101b3906106ce565b80601f01602080910402602001604051908101604052809291908181526020018280546101df906106ce565b801561022a5780601f106102015761010080835404028352916020019161022a565b820191905f5260205f20905b81548152906001019060200180831161020d57829003601f168201915b5050505050905090565b5f3361024181858561029a565b60019150505b92915050565b5f3361025a8582856102ac565b61026585858561032c565b506001949350505050565b61027a8282610389565b5050565b6060600480546101b3906106ce565b5f3361024181858561032c565b6102a783838360016103bd565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f198114610326578181101561031857604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61032684848484035f6103bd565b50505050565b6001600160a01b03831661035557604051634b637e8f60e11b81525f600482015260240161030f565b6001600160a01b03821661037e5760405163ec442f0560e01b81525f600482015260240161030f565b6102a783838361048f565b6001600160a01b0382166103b25760405163ec442f0560e01b81525f600482015260240161030f565b61027a5f838361048f565b6001600160a01b0384166103e65760405163e602df0560e01b81525f600482015260240161030f565b6001600160a01b03831661040f57604051634a1406b160e11b81525f600482015260240161030f565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561032657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161048191815260200190565b60405180910390a350505050565b6001600160a01b0383166104b9578060025f8282546104ae9190610706565b909155506105299050565b6001600160a01b0383165f908152602081905260409020548181101561050b5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161030f565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b03821661054557600280548290039055610563565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105a891815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b818110156105e1578581018301518582016040015282016105c5565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610617575f80fd5b919050565b5f806040838503121561062d575f80fd5b61063683610601565b946020939093013593505050565b5f805f60608486031215610656575f80fd5b61065f84610601565b925061066d60208501610601565b9150604084013590509250925092565b5f6020828403121561068d575f80fd5b61069682610601565b9392505050565b5f80604083850312156106ae575f80fd5b6106b783610601565b91506106c560208401610601565b90509250929050565b600181811c908216806106e257607f821691505b60208210810361070057634e487b7160e01b5f52602260045260245ffd5b50919050565b8082018082111561024757634e487b7160e01b5f52601160045260245ffdfea26469706673582212204aefb9a065099460d707234550fee9e420f5eb203c6b423b9a3c93e3494476d164736f6c63430008180033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "symbol";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "allowance";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
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
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "account";
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
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mint";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "ERC20InsufficientAllowance";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "allowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "needed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "needed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InvalidApprover";
        readonly inputs: readonly [{
            readonly name: "approver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InvalidReceiver";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InvalidSender";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InvalidSpender";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): MockERC20Interface;
    static connect(address: string, runner?: ContractRunner | null): MockERC20;
}
export {};
