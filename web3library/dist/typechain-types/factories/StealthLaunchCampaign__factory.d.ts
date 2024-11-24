import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { StealthLaunchCampaign, StealthLaunchCampaignInterface } from "../StealthLaunchCampaign";
type StealthLaunchCampaignConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StealthLaunchCampaign__factory extends ContractFactory {
    constructor(...args: StealthLaunchCampaignConstructorParams);
    getDeployTransaction(owner_: AddressLike, data: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(owner_: AddressLike, data: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<StealthLaunchCampaign & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): StealthLaunchCampaign__factory;
    static readonly bytecode = "0x60c060405234801561000f575f80fd5b5060405161070538038061070583398101604081905261002e916100eb565b816001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006581610088565b508080602001905181019061007a91906101cc565b60a052608052506101ee9050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b5f52604160045260245ffd5b5f80604083850312156100fc575f80fd5b82516001600160a01b0381168114610112575f80fd5b602084810151919350906001600160401b0380821115610130575f80fd5b818601915086601f830112610143575f80fd5b815181811115610155576101556100d7565b604051601f8201601f19908116603f0116810190838211818310171561017d5761017d6100d7565b816040528281528986848701011115610194575f80fd5b5f93505b828410156101b55784840186015181850187015292850192610198565b5f8684830101528096505050505050509250929050565b5f80604083850312156101dd575f80fd5b505080516020909101519092909150565b60805160a0516104e861021d5f395f8181610178015281816101a1015261023301525f6101f301526104e85ff3fe608060405234801561000f575f80fd5b50600436106100b1575f3560e01c80638da5cb5b1161006e5780638da5cb5b146101c3578063a8d31c78146101dd578063c59ee1dc146101e5578063d54dff2d146101dd578063d669e1d4146101ee578063f2fde38b14610215575f80fd5b80630c611f24146100b55780635d491abb1461013c57806360b0b0f01461014b578063715018a61461016c5780637b1b1de614610176578063833b94991461019c575b5f80fd5b604080518082018252600e81526d0a6e8cac2d8e8d04098c2eadcc6d60931b60208083019190915282518084018452601781527f537465616c7468204c61756e63682043616d706169676e000000000000000000818301528351808501855260038152624e2f4160e81b9281019290925292516101339391906103a8565b60405180910390f35b60405160018152602001610133565b61015e610159366004610405565b610228565b604051908152602001610133565b61017461028d565b005b7f000000000000000000000000000000000000000000000000000000000000000061015e565b61015e7f000000000000000000000000000000000000000000000000000000000000000081565b5f546040516001600160a01b039091168152602001610133565b6101746102a0565b61015e60015481565b61015e7f000000000000000000000000000000000000000000000000000000000000000081565b61017461022336600461042f565b6102a8565b5f6102316102ea565b7f000000000000000000000000000000000000000000000000000000000000000061026484670de0b6b3a7640000610463565b61026e9190610480565b90508260015f828254610281919061049f565b90915550909392505050565b6102956102ea565b61029e5f610316565b565b61029e6102ea565b6102b06102ea565b6001600160a01b0381166102de57604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6102e781610316565b50565b5f546001600160a01b0316331461029e5760405163118cdaa760e01b81523360048201526024016102d5565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f81518084525f5b818110156103895760208185018101518683018201520161036d565b505f602082860101526020601f19601f83011685010191505092915050565b606081525f6103ba6060830186610365565b82810360208401526103cc8186610365565b905082810360408401526103e08185610365565b9695505050505050565b80356001600160a01b0381168114610400575f80fd5b919050565b5f8060408385031215610416575f80fd5b82359150610426602084016103ea565b90509250929050565b5f6020828403121561043f575f80fd5b610448826103ea565b9392505050565b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141761047a5761047a61044f565b92915050565b5f8261049a57634e487b7160e01b5f52601260045260245ffd5b500490565b8082018082111561047a5761047a61044f56fea26469706673582212205c923129ead2642cea65b35a3778fdd9fb772f2f541bff8b747c66772d93a87b64736f6c63430008180033";
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
        readonly name: "MAX_CAP";
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
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "handleFinalization";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isCampaignSuccessful";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
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
    static createInterface(): StealthLaunchCampaignInterface;
    static connect(address: string, runner?: ContractRunner | null): StealthLaunchCampaign;
}
export {};
