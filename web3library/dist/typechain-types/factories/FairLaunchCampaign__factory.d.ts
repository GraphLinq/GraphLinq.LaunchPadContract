import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { FairLaunchCampaign, FairLaunchCampaignInterface } from "../FairLaunchCampaign";
type FairLaunchCampaignConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FairLaunchCampaign__factory extends ContractFactory {
    constructor(...args: FairLaunchCampaignConstructorParams);
    getDeployTransaction(owner_: AddressLike, data: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(owner_: AddressLike, data: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<FairLaunchCampaign & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): FairLaunchCampaign__factory;
    static readonly bytecode = "0x60e060405234801561000f575f80fd5b5060405161098e38038061098e83398101604081905261002e916100ee565b816001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6100658161008b565b508080602001905181019061007a91906101cf565b60c05260a052608052506101fa9050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b5f52604160045260245ffd5b5f80604083850312156100ff575f80fd5b82516001600160a01b0381168114610115575f80fd5b602084810151919350906001600160401b0380821115610133575f80fd5b818601915086601f830112610146575f80fd5b815181811115610158576101586100da565b604051601f8201601f19908116603f01168101908382118183101715610180576101806100da565b816040528281528986848701011115610197575f80fd5b5f93505b828410156101b8578484018601518185018701529285019261019b565b5f8684830101528096505050505050509250929050565b5f805f606084860312156101e1575f80fd5b8351925060208401519150604084015190509250925092565b60805160a05160c05161073261025c5f395f81816101b6015281816101df01526102d101525f81816102390152818161029c015281816103b8015261049001525f818161014f0152818161027101528181610348015261042401526107325ff3fe608060405234801561000f575f80fd5b50600436106100cb575f3560e01c8063833b949911610088578063c59ee1dc11610063578063c59ee1dc14610223578063d54dff2d1461022c578063e518a47114610234578063f2fde38b1461025b575f80fd5b8063833b9499146101da5780638da5cb5b14610201578063a8d31c781461021b575f80fd5b80630c611f24146100cf57806337ba682d1461014a5780635d491abb1461017f57806360b0b0f014610197578063715018a6146101aa5780637b1b1de6146101b4575b5f80fd5b604080518082018252600b81526a08cc2d2e44098c2eadcc6d60ab1b6020808301919091528251808401845260148152732330b4b9102630bab731b41021b0b6b830b4b3b760611b818301528351808501855260038152624e2f4160e81b9281019290925292516101419391906105f2565b60405180910390f35b6101717f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610141565b61018761026e565b6040519015158152602001610141565b6101716101a536600461064f565b6102c6565b6101b261032b565b005b7f0000000000000000000000000000000000000000000000000000000000000000610171565b6101717f000000000000000000000000000000000000000000000000000000000000000081565b5f546040516001600160a01b039091168152602001610141565b6101b261033e565b61017160015481565b6101b261041a565b6101717f000000000000000000000000000000000000000000000000000000000000000081565b6101b2610269366004610679565b6104f7565b5f7f000000000000000000000000000000000000000000000000000000000000000042101580156102c157507f000000000000000000000000000000000000000000000000000000000000000060015410155b905090565b5f6102cf610534565b7f000000000000000000000000000000000000000000000000000000000000000061030284670de0b6b3a76400006106ad565b61030c91906106ca565b90508260015f82825461031f91906106e9565b90915550909392505050565b610333610534565b61033c5f610560565b565b610346610534565b7f000000000000000000000000000000000000000000000000000000000000000042116103b65760405162461bcd60e51b815260206004820152601960248201527846756e6472616973696e67207374696c6c206f6e676f696e6760381b60448201526064015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001541061033c5760405162461bcd60e51b815260206004820152601060248201526f135a5b9a5b5d5b4819dbd85b081b595d60821b60448201526064016103ad565b610422610534565b7f000000000000000000000000000000000000000000000000000000000000000042101561048e5760405162461bcd60e51b815260206004820152601960248201527846756e6472616973696e67207374696c6c206f6e676f696e6760381b60448201526064016103ad565b7f0000000000000000000000000000000000000000000000000000000000000000600154101561033c5760405162461bcd60e51b8152602060048201526014602482015273135a5b9a5b5d5b4819dbd85b081b9bdd081b595d60621b60448201526064016103ad565b6104ff610534565b6001600160a01b03811661052857604051631e4fbdf760e01b81525f60048201526024016103ad565b61053181610560565b50565b5f546001600160a01b0316331461033c5760405163118cdaa760e01b81523360048201526024016103ad565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f81518084525f5b818110156105d3576020818501810151868301820152016105b7565b505f602082860101526020601f19601f83011685010191505092915050565b606081525f61060460608301866105af565b828103602084015261061681866105af565b9050828103604084015261062a81856105af565b9695505050505050565b80356001600160a01b038116811461064a575f80fd5b919050565b5f8060408385031215610660575f80fd5b8235915061067060208401610634565b90509250929050565b5f60208284031215610689575f80fd5b61069282610634565b9392505050565b634e487b7160e01b5f52601160045260245ffd5b80820281158282048414176106c4576106c4610699565b92915050565b5f826106e457634e487b7160e01b5f52601260045260245ffd5b500490565b808201808211156106c4576106c461069956fea264697066735822122052685c9909559e1911141174fe5dc054b73410e83e360dbc7d1e17dd404ea9ad64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "owner_";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "END_TIME";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MINIMUM_GOAL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "PRICE_PER_TOKEN";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "contribute";
        readonly inputs: readonly [{
            readonly name: "contribution";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "tokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getCampaignDetails";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "handleFailure";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "handleFinalization";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isCampaignSuccessful";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pricePerToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "raisedAmount";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "renounceOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "OwnableInvalidOwner";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "OwnableUnauthorizedAccount";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): FairLaunchCampaignInterface;
    static connect(address: string, runner?: ContractRunner | null): FairLaunchCampaign;
}
export {};
