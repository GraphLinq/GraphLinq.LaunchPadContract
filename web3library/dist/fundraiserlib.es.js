import { Interface, Contract, ContractFactory, JsonRpcProvider, ethers } from 'ethers';

const _abi$5 = [
    {
        type: "function",
        name: "allowance",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "approve",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "balanceOf",
        inputs: [
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "decimals",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "uint8",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "symbol",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "totalSupply",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transfer",
        inputs: [
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "transferFrom",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "spender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                name: "from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "ERC20InsufficientAllowance",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
            {
                name: "allowance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "needed",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InsufficientBalance",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
            {
                name: "balance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "needed",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidApprover",
        inputs: [
            {
                name: "approver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidReceiver",
        inputs: [
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidSender",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidSpender",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
        ],
    },
];
class ERC20__factory {
    static abi = _abi$5;
    static createInterface() {
        return new Interface(_abi$5);
    }
    static connect(address, runner) {
        return new Contract(address, _abi$5, runner);
    }
}

const _abi$4 = [
    {
        type: "constructor",
        inputs: [
            {
                name: "owner_",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "campaign",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ICampaign",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "claimFunds",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "claimTokens",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "claimed",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "contribute",
        inputs: [
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "contributions",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "createdTimestamp",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "finalize",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "finalizedTimestamp",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRequiredAmountsForLiquidity",
        inputs: [
            {
                name: "raiseTokenAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "requiredSaleTokens",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "info",
        inputs: [],
        outputs: [
            {
                name: "projectName",
                type: "string",
                internalType: "string",
            },
            {
                name: "description",
                type: "string",
                internalType: "string",
            },
            {
                name: "websiteLink",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "initSwapPair",
        inputs: [
            {
                name: "tickLower",
                type: "int24",
                internalType: "int24",
            },
            {
                name: "tickUpper",
                type: "int24",
                internalType: "int24",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "initialize",
        inputs: [
            {
                name: "params",
                type: "tuple",
                internalType: "struct Fundraiser.FundraiserParams",
                components: [
                    {
                        name: "saleToken",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "raiseToken",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "projectName",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "description",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "websiteLink",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "campaign",
                        type: "address",
                        internalType: "contract ICampaign",
                    },
                    {
                        name: "vestingStartDelta",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "vestingDuration",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "positionManager",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "vesting",
                        type: "address",
                        internalType: "contract IVesting",
                    },
                    {
                        name: "poolFee",
                        type: "uint24",
                        internalType: "uint24",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "poolFee",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint24",
                internalType: "uint24",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "positionManager",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract INonfungiblePositionManager",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "purchasedTokens",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "raiseToken",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IERC20",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "raisedAmount",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "saleToken",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IERC20",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "setFailed",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "soldAmount",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "state",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "enum Fundraiser.FundraiserState",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "vesting",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IVesting",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "vestingDuration",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "vestingStartDelta",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "event",
        name: "Claimed",
        inputs: [
            {
                name: "claimer",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Contribution",
        inputs: [
            {
                name: "contributor",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Failed",
        inputs: [],
        anonymous: false,
    },
    {
        type: "event",
        name: "Finalized",
        inputs: [],
        anonymous: false,
    },
    {
        type: "event",
        name: "FundsClaimed",
        inputs: [
            {
                name: "claimer",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Initialized",
        inputs: [
            {
                name: "version",
                type: "uint64",
                indexed: false,
                internalType: "uint64",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiquidityMintingFailed",
        inputs: [],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "SwapPairInitialized",
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "liquidity",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "AddressEmptyCode",
        inputs: [
            {
                name: "target",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "FailedCall",
        inputs: [],
    },
    {
        type: "error",
        name: "InsufficientBalance",
        inputs: [
            {
                name: "balance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "needed",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "InvalidInitialization",
        inputs: [],
    },
    {
        type: "error",
        name: "NotInitializing",
        inputs: [],
    },
    {
        type: "error",
        name: "OwnableInvalidOwner",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "OwnableUnauthorizedAccount",
        inputs: [
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ReentrancyGuardReentrantCall",
        inputs: [],
    },
    {
        type: "error",
        name: "SafeERC20FailedOperation",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
        ],
    },
];
const _bytecode$2 = "0x608060405234801562000010575f80fd5b506040516200289b3803806200289b8339810160408190526200003391620000c8565b806001600160a01b0381166200006257604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200006d8162000079565b505060018055620000f7565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f60208284031215620000d9575f80fd5b81516001600160a01b0381168114620000f0575f80fd5b9392505050565b61279680620001055f395ff3fe608060405234801561000f575f80fd5b50600436106101bb575f3560e01c80638da5cb5b116100f3578063c80b7c1711610093578063e77d1a1f1161006e578063e77d1a1f146103be578063e985e367146103c7578063f2fde38b146103da578063fa1a5f59146103ed575f80fd5b8063c80b7c1714610351578063c884ef8314610364578063df7dbd7914610396575f80fd5b8063ac307773116100ce578063ac30777314610313578063c19d93fb1461031b578063c1cbbca714610335578063c59ee1dc14610348575f80fd5b80638da5cb5b146102e75780639972cffe146102f75780639b13e8e91461030a575f80fd5b806348c54b9d1161015e5780634da60aa5116101395780634da60aa5146102a6578063715018a6146102b9578063791b98bc146102c1578063811e539c146102d4575f80fd5b806348c54b9d146102775780634bae6f3f1461027f5780634bb278f31461029e575f80fd5b80631514617e116101995780631514617e1461020d578063370158ea1461021657806342e94c901461022d57806344c63eec1461024c575f80fd5b8063089fe6aa146101bf57806310309781146101ec578063146901db14610203575b5f80fd5b6013546101d390610100900462ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b6101f5600a5481565b6040519081526020016101e3565b61020b6103f6565b005b6101f560065481565b61021e6105a0565b6040516101e393929190612110565b6101f561023b36600461216c565b60106020525f908152604090205481565b600e5461025f906001600160a01b031681565b6040516001600160a01b0390911681526020016101e3565b61020b610748565b6101f561028d36600461216c565b60116020525f908152604090205481565b61020b61091f565b600c5461025f906001600160a01b031681565b61020b610b27565b600f5461025f906001600160a01b031681565b600d5461025f906001600160a01b031681565b5f546001600160a01b031661025f565b61020b610305366004612198565b610b38565b6101f560095481565b61020b610f83565b6013546103289060ff1681565b6040516101e391906121dd565b61020b610343366004612203565b6110a5565b6101f560075481565b61020b61035f3660046122f3565b611312565b61038661037236600461216c565b60126020525f908152604090205460ff1681565b60405190151581526020016101e3565b6103a96103a4366004612203565b6118ce565b604080519283526020830191909152016101e3565b6101f560055481565b600b5461025f906001600160a01b031681565b61020b6103e836600461216c565b6119cc565b6101f560085481565b6103fe611a06565b610406611a32565b5f60135460ff16600381111561041e5761041e6121c9565b146104695760405162461bcd60e51b815260206004820152601660248201527546756e6472616973696e67206e6f742061637469766560501b60448201526064015b60405180910390fd5b600d5f9054906101000a90046001600160a01b03166001600160a01b031663a8d31c786040518163ffffffff1660e01b81526004015f604051808303815f87803b1580156104b5575f80fd5b505af11580156104c7573d5f803e3d5ffd5b50506013805460ff191660021790555050600b546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801561051e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105429190612427565b6040519091507f625a40e68d9554793bf647bf32e4885e7f15bd1bfac262906cc7d26f376f20a2905f90a16105946105815f546001600160a01b031690565b600b546001600160a01b03169083611a5c565b5061059e60018055565b565b6002805481906105af9061243e565b80601f01602080910402602001604051908101604052809291908181526020018280546105db9061243e565b80156106265780601f106105fd57610100808354040283529160200191610626565b820191905f5260205f20905b81548152906001019060200180831161060957829003601f168201915b50505050509080600101805461063b9061243e565b80601f01602080910402602001604051908101604052809291908181526020018280546106679061243e565b80156106b25780601f10610689576101008083540402835291602001916106b2565b820191905f5260205f20905b81548152906001019060200180831161069557829003601f168201915b5050505050908060020180546106c79061243e565b80601f01602080910402602001604051908101604052809291908181526020018280546106f39061243e565b801561073e5780601f106107155761010080835404028352916020019161073e565b820191905f5260205f20905b81548152906001019060200180831161072157829003601f168201915b5050505050905083565b610750611a32565b600360135460ff166003811115610769576107696121c9565b146107ae5760405162461bcd60e51b815260206004820152601560248201527414ddd85c081c185a5c881b9bdd0818dc99585d1959605a1b6044820152606401610460565b335f9081526012602052604090205460ff16156108065760405162461bcd60e51b8152602060048201526016602482015275151bdad95b9cc8185b1c9958591e4818db185a5b595960521b6044820152606401610460565b335f908152601260209081526040808320805460ff191660011790556011909152902054600654156108c957600e546005546009546001600160a01b03909216916324ef8c1b913391610859919061248a565b6006546040516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091526044820152606481018490526084015f604051808303815f87803b1580156108ae575f80fd5b505af11580156108c0573d5f803e3d5ffd5b505050506108e0565b600b546108e0906001600160a01b03163383611a5c565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a25061059e60018055565b610927611a06565b61092f611a32565b5f60135460ff166003811115610947576109476121c9565b1461098d5760405162461bcd60e51b815260206004820152601660248201527546756e6472616973696e67206e6f742061637469766560501b6044820152606401610460565b6013805460ff19166001179055600d546040805163d54dff2d60e01b815290516001600160a01b039092169163d54dff2d916004808201925f9290919082900301818387803b1580156109de575f80fd5b505af11580156109f0573d5f803e3d5ffd5b50505050610a1e610a085f546001600160a01b031690565b600754600c546001600160a01b03169190611a5c565b600b546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015610a64573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a889190612427565b9050600854811115610ac857610ac8610aa85f546001600160a01b031690565b600854610ab5908461249d565b600b546001600160a01b03169190611a5c565b60065415610af157600e54600854600b54610af1926001600160a01b0391821692911690611a5c565b426009556040517f6823b073d48d6e3a7d385eeb601452d680e74bb46afe3255a7d778f3a9b17681905f90a15061059e60018055565b610b2f611a06565b61059e5f611ac0565b610b40611a06565b610b48611a32565b600160135460ff166003811115610b6157610b616121c9565b14610bae5760405162461bcd60e51b815260206004820152601960248201527f46756e6472616973696e67206e6f742066696e616c697a6564000000000000006044820152606401610460565b6013805460ff19166003179055600b546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015610c01573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c259190612427565b600c546040516370a0823160e01b81523060048201529192505f916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610c70573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c949190612427565b60065490915082905f03610d1a576008548311610d0a5760405162461bcd60e51b815260206004820152602e60248201527f4e6f7420656e6f7567682073616c6520746f6b656e7320746f2063726561746560448201526d103a34329039bbb0b8103830b4b960911b6064820152608401610460565b600854610d17908461249d565b90505b5f80610d25846118ce565b9150915082821115610d8e5760405162461bcd60e51b815260206004820152602c60248201527f4e6f7420656e6f756768206c697175696469747920746f20637265617465207460448201526b34329039bbb0b8103830b4b960a11b6064820152608401610460565b600b54600c545f91829182918291610db4916001600160a01b0390811691168888611b0f565b600f5493975091955093509150610dd8906001600160a01b03808716911684611bb5565b600f54610df2906001600160a01b03858116911683611bb5565b60408051610160810182526001600160a01b038087168252858116602083015260135462ffffff61010091829004168385015260028f810b60608501528e900b608084015260a0830186905260c083018590525f60e084018190529083018190523361012084015242610140840152600f549351634418b22b60e11b815292939092839283928392911690638831645690610e919088906004016124b0565b6080604051808303815f875af1158015610ead573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ed19190612574565b935093509350935086821015610f0057610f0033610eef848a61249d565b6001600160a01b038c169190611a5c565b85811015610f2757610f2733610f16838961249d565b6001600160a01b038b169190611a5c565b604080518581526001600160801b03851660208201527fc1a1ee9d31c39113d1073fa8118a8a09cd2e5777ef352c4bede40d05f9376236910160405180910390a15050505050505050505050505050610f7f60018055565b5050565b600260135460ff166003811115610f9c57610f9c6121c9565b14610fdc5760405162461bcd60e51b815260206004820152601060248201526f14985a5cd9481b9bdd0819985a5b195960821b6044820152606401610460565b335f9081526012602052604090205460ff16156110335760405162461bcd60e51b8152602060048201526015602482015274119d5b991cc8185b1c9958591e4818db185a5b5959605a1b6044820152606401610460565b335f818152601260209081526040808320805460ff1916600117905560108252918290205491518281529192917fa65a8b4f7f65a1063243d7f7e9e4da00ff767599acf21549ef2548a45d1695ae910160405180910390a2600c546110a2906001600160a01b03163383611a5c565b50565b6110ad611a32565b5f60135460ff1660038111156110c5576110c56121c9565b146111125760405162461bcd60e51b815260206004820152601960248201527f46756e6472616973696e67206973206e6f7420616374697665000000000000006044820152606401610460565b600d5460405163060b0b0f60e41b8152600481018390523360248201525f916001600160a01b0316906360b0b0f0906044016020604051808303815f875af1158015611160573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111849190612427565b335f908152601060205260408120805492935084929091906111a790849061248a565b9091555050335f90815260116020526040812080548392906111ca90849061248a565b925050819055508160075f8282546111e2919061248a565b925050819055508060085f8282546111fa919061248a565b9091555050600c54604051636eb1769f60e11b81523360048201523060248201525f916001600160a01b03169063dd62ed3e90604401602060405180830381865afa15801561124b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061126f9190612427565b9050828110156112ba5760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e7420616c6c6f77616e636560501b6044820152606401610460565b600c546112d2906001600160a01b0316333086611c42565b60405183815233907f4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b9060200160405180910390a250506110a260018055565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff165f811580156113575750825b90505f8267ffffffffffffffff1660011480156113735750303b155b905081158015611381575080155b1561139f5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156113c957845460ff60401b1916600160401b1785555b85516001600160a01b031661142a5760405162461bcd60e51b815260206004820152602160248201527f53616c6520746f6b656e20616464726573732063616e6e6f74206265207a65726044820152606f60f81b6064820152608401610460565b60208601516001600160a01b031661148f5760405162461bcd60e51b815260206004820152602260248201527f526169736520746f6b656e20616464726573732063616e6e6f74206265207a65604482015261726f60f01b6064820152608401610460565b6101008601516001600160a01b03166114fa5760405162461bcd60e51b815260206004820152602760248201527f506f736974696f6e206d616e6167657220616464726573732063616e6e6f74206044820152666265207a65726f60c81b6064820152608401610460565b60a08601516001600160a01b03166115545760405162461bcd60e51b815260206004820152601f60248201527f43616d706169676e20616464726573732063616e6e6f74206265207a65726f006044820152606401610460565b60e0860151158061157257506101208601516001600160a01b031615155b6115db5760405162461bcd60e51b815260206004820152603460248201527f56657374696e6720616464726573732063616e6e6f74206265207a65726f206960448201527319881d995cdd1a5b99c81a5cc8195b98589b195960621b6064820152608401610460565b85610140015162ffffff166127101480611600575085610140015162ffffff16610bb8145b80611616575085610140015162ffffff166101f4145b6116555760405162461bcd60e51b815260206004820152601060248201526f496e76616c696420706f6f6c2066656560801b6044820152606401610460565b8551600b80546001600160a01b03199081166001600160a01b0393841617909155602080890151600c805490931693169290921790556040805160608082018352828a0151808352908a0151938201939093526080890151918101919091529060029081906116c49082612605565b50602082015160018201906116d99082612605565b50604082015160028201906116ee9082612605565b50505060a0860151600d80546001600160a01b03199081166001600160a01b039384161790915561010080890151600f8054841691851691909117905560e089015160065560c0890151600555610120890151600e805490931693169290921790556013805461014089015163ffffffff1990911662ffffff90911690920291909117905542600a555f61178a683635c9adc5dea000006118ce565b50600b54600c549192505f918291829182916117bd916001600160a01b03918216911687683635c9adc5dea00000611b0f565b600f5460135494985092965090945092506001600160a01b0316906313ead5629086908690610100900462ffffff166117f68787611c7b565b6040516001600160e01b031960e087901b1681526001600160a01b039485166004820152928416602484015262ffffff90911660448301529190911660648201526084016020604051808303815f875af1158015611856573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061187a91906126c1565b50505050505083156118c657845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b5f805f600d5f9054906101000a90046001600160a01b03166001600160a01b0316637b1b1de66040518163ffffffff1660e01b8152600401602060405180830381865afa158015611921573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119459190612427565b90505f81116119a85760405162461bcd60e51b815260206004820152602960248201527f50726963652070657220746f6b656e206d7573742062652067726561746572206044820152687468616e207a65726f60b81b6064820152608401610460565b806119bb85670de0b6b3a76400006126dc565b6119c59190612707565b9492505050565b6119d4611a06565b6001600160a01b0381166119fd57604051631e4fbdf760e01b81525f6004820152602401610460565b6110a281611ac0565b5f546001600160a01b0316331461059e5760405163118cdaa760e01b8152336004820152602401610460565b600260015403611a5557604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b6040516001600160a01b03838116602483015260448201839052611abb91859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611ca6565b505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f805f80866001600160a01b0316886001600160a01b031603611b745760405162461bcd60e51b815260206004820152601860248201527f546f6b656e73206d75737420626520646966666572656e7400000000000000006044820152606401610460565b866001600160a01b0316886001600160a01b03161015611b9e575086925085915084905083611baa565b50859250869150839050845b945094509450949050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301525f919085169063dd62ed3e90604401602060405180830381865afa158015611c02573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c269190612427565b9050611c3c8484611c37858561248a565b611d07565b50505050565b6040516001600160a01b038481166024830152838116604483015260648201839052611c3c9186918216906323b872dd90608401611a89565b5f80611c8b84606085901b612707565b90505f6030611c9983611d96565b901b925050505b92915050565b5f611cba6001600160a01b03841683611ee9565b905080515f14158015611cde575080806020019051810190611cdc9190612726565b155b15611abb57604051635274afe760e01b81526001600160a01b0384166004820152602401610460565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611d588482611efd565b611c3c576040516001600160a01b0384811660248301525f6044830152611d8c91869182169063095ea7b390606401611a89565b611c3c8482611ca6565b5f60018211611da3575090565b816001600160801b8210611dbc5760809190911c9060401b5b600160401b8210611dd25760409190911c9060201b5b6401000000008210611de95760209190911c9060101b5b620100008210611dfe5760109190911c9060081b5b6101008210611e125760089190911c9060041b5b60108210611e255760049190911c9060021b5b60048210611e315760011b5b600302600190811c90818581611e4957611e496126f3565b048201901c90506001818581611e6157611e616126f3565b048201901c90506001818581611e7957611e796126f3565b048201901c90506001818581611e9157611e916126f3565b048201901c90506001818581611ea957611ea96126f3565b048201901c90506001818581611ec157611ec16126f3565b048201901c9050611ee0818581611eda57611eda6126f3565b04821190565b90039392505050565b6060611ef683835f611f9e565b9392505050565b5f805f846001600160a01b031684604051611f189190612745565b5f604051808303815f865af19150503d805f8114611f51576040519150601f19603f3d011682016040523d82523d5f602084013e611f56565b606091505b5091509150818015611f80575080511580611f80575080806020019051810190611f809190612726565b8015611f9557505f856001600160a01b03163b115b95945050505050565b606081471015611fca5760405163cf47918160e01b815247600482015260248101839052604401610460565b5f80856001600160a01b03168486604051611fe59190612745565b5f6040518083038185875af1925050503d805f811461201f576040519150601f19603f3d011682016040523d82523d5f602084013e612024565b606091505b509150915061203486838361203e565b9695505050505050565b6060826120535761204e8261209a565b611ef6565b815115801561206a57506001600160a01b0384163b155b1561209357604051639996b31560e01b81526001600160a01b0385166004820152602401610460565b5080611ef6565b8051156120aa5780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b5f5b838110156120dd5781810151838201526020016120c5565b50505f910152565b5f81518084526120fc8160208601602086016120c3565b601f01601f19169290920160200192915050565b606081525f61212260608301866120e5565b828103602084015261213481866120e5565b9050828103604084015261203481856120e5565b6001600160a01b03811681146110a2575f80fd5b803561216781612148565b919050565b5f6020828403121561217c575f80fd5b8135611ef681612148565b8035600281900b8114612167575f80fd5b5f80604083850312156121a9575f80fd5b6121b283612187565b91506121c060208401612187565b90509250929050565b634e487b7160e01b5f52602160045260245ffd5b60208101600483106121fd57634e487b7160e01b5f52602160045260245ffd5b91905290565b5f60208284031215612213575f80fd5b5035919050565b634e487b7160e01b5f52604160045260245ffd5b604051610160810167ffffffffffffffff811182821017156122525761225261221a565b60405290565b5f82601f830112612267575f80fd5b813567ffffffffffffffff808211156122825761228261221a565b604051601f8301601f19908116603f011681019082821181831017156122aa576122aa61221a565b816040528381528660208588010111156122c2575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803562ffffff81168114612167575f80fd5b5f60208284031215612303575f80fd5b813567ffffffffffffffff8082111561231a575f80fd5b90830190610160828603121561232e575f80fd5b61233661222e565b61233f8361215c565b815261234d6020840161215c565b6020820152604083013582811115612363575f80fd5b61236f87828601612258565b604083015250606083013582811115612386575f80fd5b61239287828601612258565b6060830152506080830135828111156123a9575f80fd5b6123b587828601612258565b6080830152506123c760a0840161215c565b60a082015260c083013560c082015260e083013560e082015261010091506123f082840161215c565b82820152610120915061240482840161215c565b8282015261014091506124188284016122e1565b91810191909152949350505050565b5f60208284031215612437575f80fd5b5051919050565b600181811c9082168061245257607f821691505b60208210810361247057634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b80820180821115611ca057611ca0612476565b81810381811115611ca057611ca0612476565b81516001600160a01b03168152610160810160208301516124dc60208401826001600160a01b03169052565b5060408301516124f3604084018262ffffff169052565b506060830151612508606084018260020b9052565b50608083015161251d608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151612563828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f8060808587031215612587575f80fd5b8451935060208501516001600160801b03811681146125a4575f80fd5b6040860151606090960151949790965092505050565b601f821115611abb57805f5260205f20601f840160051c810160208510156125df5750805b601f840160051c820191505b818110156125fe575f81556001016125eb565b5050505050565b815167ffffffffffffffff81111561261f5761261f61221a565b6126338161262d845461243e565b846125ba565b602080601f831160018114612666575f841561264f5750858301515b5f19600386901b1c1916600185901b1785556118c6565b5f85815260208120601f198616915b8281101561269457888601518255948401946001909101908401612675565b50858210156126b157878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b5f602082840312156126d1575f80fd5b8151611ef681612148565b8082028115828204841417611ca057611ca0612476565b634e487b7160e01b5f52601260045260245ffd5b5f8261272157634e487b7160e01b5f52601260045260245ffd5b500490565b5f60208284031215612736575f80fd5b81518015158114611ef6575f80fd5b5f82516127568184602087016120c3565b919091019291505056fea264697066735822122015c6ccb38f46c6ddc72f152645e93f1c8b7e3bc1c06cdad7678c4eaf10cdfd4d64736f6c63430008180033";
const isSuperArgs$2 = (xs) => xs.length > 1;
class Fundraiser__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs$2(args)) {
            super(...args);
        }
        else {
            super(_abi$4, _bytecode$2, args[0]);
        }
    }
    getDeployTransaction(owner_, overrides) {
        return super.getDeployTransaction(owner_, overrides || {});
    }
    deploy(owner_, overrides) {
        return super.deploy(owner_, overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static bytecode = _bytecode$2;
    static abi = _abi$4;
    static createInterface() {
        return new Interface(_abi$4);
    }
    static connect(address, runner) {
        return new Contract(address, _abi$4, runner);
    }
}

const _abi$3 = [
    {
        type: "function",
        name: "POSITION_MANAGER",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "UPGRADE_INTERFACE_VERSION",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "campaignID",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "uint8",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "campaigns",
        inputs: [
            {
                name: "",
                type: "uint8",
                internalType: "uint8",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ICampaignFactory",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "createFundraiser",
        inputs: [
            {
                name: "fundraiserParams",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "campaignParams",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "campaignTypeID",
                type: "uint8",
                internalType: "uint8",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "fundraiserID",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "fundraisers",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "initialize",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "listFundraisers",
        inputs: [
            {
                name: "startID",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "endID",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "state",
                type: "uint8",
                internalType: "enum Fundraiser.FundraiserState",
            },
        ],
        outputs: [
            {
                name: "list",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "proxiableUUID",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "registerCampaign",
        inputs: [
            {
                name: "factory",
                type: "address",
                internalType: "contract ICampaignFactory",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "upgradeToAndCall",
        inputs: [
            {
                name: "newImplementation",
                type: "address",
                internalType: "address",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "event",
        name: "CampaignRegistered",
        inputs: [
            {
                name: "id",
                type: "uint8",
                indexed: false,
                internalType: "uint8",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "FundraiserCreated",
        inputs: [
            {
                name: "fundraiser",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "id",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Initialized",
        inputs: [
            {
                name: "version",
                type: "uint64",
                indexed: false,
                internalType: "uint64",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Upgraded",
        inputs: [
            {
                name: "implementation",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "AddressEmptyCode",
        inputs: [
            {
                name: "target",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC1967InvalidImplementation",
        inputs: [
            {
                name: "implementation",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC1967NonPayable",
        inputs: [],
    },
    {
        type: "error",
        name: "FailedCall",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidInitialization",
        inputs: [],
    },
    {
        type: "error",
        name: "NotInitializing",
        inputs: [],
    },
    {
        type: "error",
        name: "OwnableInvalidOwner",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "OwnableUnauthorizedAccount",
        inputs: [
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "UUPSUnauthorizedCallContext",
        inputs: [],
    },
    {
        type: "error",
        name: "UUPSUnsupportedProxiableUUID",
        inputs: [
            {
                name: "slot",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
    },
];
const _bytecode$1 = "0x60a060405230608052348015610013575f80fd5b50608051614bba61003a5f395f8181610b6c01528181610b960152610ce90152614bba5ff3fe608060405260043610620000f7575f3560e01c8063790a33081162000092578063ad3cb1cc116200005e578063ad3cb1cc14620002bf578063ec7270171462000300578063f2fde38b1462000324578063f38f72fb1462000348575f80fd5b8063790a330814620001ff5780638129fc1c14620002325780638da5cb5b1462000249578063a4bf1c061462000287575f80fd5b80634f1ef28611620000d25780634f1ef286146200019457806352d1902d14620001ad578063715018a614620001c457806375860d8414620001db575f80fd5b80631bea83fe14620000fb5780631d88c618146200014157806349ed2fa91462000167575b5f80fd5b34801562000107575f80fd5b506200012473c36442b4a4522e871399cd717abdd847ab11fe8881565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156200014d575f80fd5b506200015860035481565b60405190815260200162000138565b34801562000173575f80fd5b505f54620001819060ff1681565b60405160ff909116815260200162000138565b620001ab620001a53660046200114c565b62000380565b005b348015620001b9575f80fd5b5062000158620003a5565b348015620001d0575f80fd5b50620001ab620003c3565b348015620001e7575f80fd5b50620001ab620001f93660046200119f565b620003da565b3480156200020b575f80fd5b50620002236200021d366004620011ca565b6200047d565b60405162000138919062001203565b3480156200023e575f80fd5b50620001ab620006d0565b34801562000255575f80fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031662000124565b34801562000293575f80fd5b5062000124620002a536600462001267565b60016020525f90815260409020546001600160a01b031681565b348015620002cb575f80fd5b50620002f1604051806040016040528060058152602001640352e302e360dc1b81525081565b604051620001389190620012d4565b3480156200030c575f80fd5b50620001246200031e366004620012e8565b620007ef565b34801562000330575f80fd5b50620001ab620003423660046200119f565b62000b1e565b34801562000354575f80fd5b50620001246200036636600462001360565b60026020525f90815260409020546001600160a01b031681565b6200038a62000b61565b620003958262000c09565b620003a1828262000c13565b5050565b5f620003b062000cde565b505f8051602062004b6583398151915290565b620003cd62000d28565b620003d85f62000d86565b565b620003e462000d28565b5f805460ff908116825260016020526040822080546001600160a01b0319166001600160a01b03851617905581547f8828688671dea88c6fcbb6090c28ca07bbb6571f26da4ae4293428e3d1b3bff7929116908062000443836200138c565b91906101000a81548160ff021916908360ff16021790555060405162000472919060ff91909116815260200190565b60405180910390a150565b60608215806200048e575060035483115b156200049a5760035492505b5f845b848110156200056657836003811115620004bb57620004bb620013ad565b5f8281526002602090815260409182902054825163c19d93fb60e01b815292516001600160a01b039091169263c19d93fb9260048083019391928290030181865afa1580156200050d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620005339190620013c1565b6003811115620005475762000547620013ad565b036200055d57816200055981620013df565b9250505b6001016200049d565b508067ffffffffffffffff81111562000583576200058362001082565b604051908082528060200260200182016040528015620005ad578160200160208202803683370190505b5091505f855b85811015620006c657846003811115620005d157620005d1620013ad565b5f8281526002602090815260409182902054825163c19d93fb60e01b815292516001600160a01b039091169263c19d93fb9260048083019391928290030181865afa15801562000623573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620006499190620013c1565b60038111156200065d576200065d620013ad565b03620006bd575f818152600260205260409020546001600160a01b031684836200068781620013df565b9450815181106200069c576200069c620013fa565b60200260200101906001600160a01b031690816001600160a01b0316815250505b600101620005b3565b5050509392505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff165f81158015620007165750825b90505f8267ffffffffffffffff166001148015620007335750303b155b90508115801562000742575080155b15620007615760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156200078c57845460ff60401b1916600160401b1785555b620007973362000df6565b620007a162000e0b565b8315620007e857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050565b5f805f805f805f805f8b8060200190518101906200080e91906200147f565b5f54979f50959d50939b50919950975095509350915060ff908116908b1610620008775760405162461bcd60e51b8152602060048201526015602482015274496e76616c69642063616d706169676e207479706560581b60448201526064015b60405180910390fd5b5f33604051620008879062001051565b6001600160a01b039091168152602001604051809103905ff080158015620008b1573d5f803e3d5ffd5b5090505f60015f8d60ff1660ff1681526020019081526020015f205f9054906101000a90046001600160a01b03166001600160a01b03166349d7788d838f6040518363ffffffff1660e01b81526004016200090e92919062001555565b6020604051808303815f875af11580156200092b573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200095191906200157a565b90505f8415620009a05787836040516200096b906200105f565b6001600160a01b03928316815291166020820152604001604051809103905ff0801580156200099c573d5f803e3d5ffd5b5090505b60408051610160810182526001600160a01b03808b16825289811660208301528183018e9052606082018d9052608082018c905284811660a083015260c0820189905260e0820188905273c36442b4a4522e871399cd717abdd847ab11fe8861010083015283811661012083015262ffffff8716610140830152915163c80b7c1760e01b8152909185169063c80b7c179062000a4190849060040162001598565b5f604051808303815f87803b15801562000a59575f80fd5b505af115801562000a6c573d5f803e3d5ffd5b50505050336001600160a01b0316846001600160a01b03167f99f4022581144242c8bd92735e3d04f923f81530b285cb75aac4326a434b163260035460405162000ab891815260200190565b60405180910390a36003805485916002915f918262000ad783620013df565b90915550815260208101919091526040015f2080546001600160a01b0319166001600160a01b039290921691909117905550919a50505050505050505050505b9392505050565b62000b2862000d28565b6001600160a01b03811662000b5357604051631e4fbdf760e01b81525f60048201526024016200086e565b62000b5e8162000d86565b50565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148062000bea57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662000bde5f8051602062004b65833981519152546001600160a01b031690565b6001600160a01b031614155b15620003d85760405163703e46dd60e11b815260040160405180910390fd5b62000b5e62000d28565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801562000c70575060408051601f3d908101601f1916820190925262000c6d91810190620016b5565b60015b62000c9a57604051634c9c8ce360e01b81526001600160a01b03831660048201526024016200086e565b5f8051602062004b65833981519152811462000ccd57604051632a87526960e21b8152600481018290526024016200086e565b62000cd9838362000e15565b505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620003d85760405163703e46dd60e11b815260040160405180910390fd5b3362000d5b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614620003d85760405163118cdaa760e01b81523360048201526024016200086e565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a3505050565b62000e0062000e71565b62000b5e8162000ebb565b620003d862000e71565b62000e208262000ec5565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a280511562000e675762000cd9828262000f2b565b620003a162000fa3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff16620003d857604051631afcd79f60e31b815260040160405180910390fd5b62000b2862000e71565b806001600160a01b03163b5f0362000efc57604051634c9c8ce360e01b81526001600160a01b03821660048201526024016200086e565b5f8051602062004b6583398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f80846001600160a01b03168460405162000f499190620016cd565b5f60405180830381855af49150503d805f811462000f83576040519150601f19603f3d011682016040523d82523d5f602084013e62000f88565b606091505b509150915062000f9a85838362000fc3565b95945050505050565b3415620003d85760405163b398979f60e01b815260040160405180910390fd5b60608262000fdc5762000fd68262001027565b62000b17565b815115801562000ff457506001600160a01b0384163b155b156200101f57604051639996b31560e01b81526001600160a01b03851660048201526024016200086e565b508062000b17565b805115620010385780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b61289b80620016eb83390190565b610bdf8062003f8683390190565b6001600160a01b038116811462000b5e575f80fd5b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715620010c257620010c262001082565b604052919050565b5f67ffffffffffffffff821115620010e657620010e662001082565b50601f01601f191660200190565b5f82601f83011262001104575f80fd5b81356200111b6200111582620010ca565b62001096565b81815284602083860101111562001130575f80fd5b816020850160208301375f918101602001919091529392505050565b5f80604083850312156200115e575f80fd5b82356200116b816200106d565b9150602083013567ffffffffffffffff81111562001187575f80fd5b6200119585828601620010f4565b9150509250929050565b5f60208284031215620011b0575f80fd5b813562000b17816200106d565b6004811062000b5e575f80fd5b5f805f60608486031215620011dd575f80fd5b83359250602084013591506040840135620011f881620011bd565b809150509250925092565b602080825282518282018190525f9190848201906040850190845b81811015620012455783516001600160a01b0316835292840192918401916001016200121e565b50909695505050505050565b803560ff8116811462001262575f80fd5b919050565b5f6020828403121562001278575f80fd5b62000b178262001251565b5f5b838110156200129f57818101518382015260200162001285565b50505f910152565b5f8151808452620012c081602086016020860162001283565b601f01601f19169290920160200192915050565b602081525f62000b176020830184620012a7565b5f805f60608486031215620012fb575f80fd5b833567ffffffffffffffff8082111562001313575f80fd5b6200132187838801620010f4565b9450602086013591508082111562001337575f80fd5b506200134686828701620010f4565b925050620013576040850162001251565b90509250925092565b5f6020828403121562001371575f80fd5b5035919050565b634e487b7160e01b5f52601160045260245ffd5b5f60ff821660ff8103620013a457620013a462001378565b60010192915050565b634e487b7160e01b5f52602160045260245ffd5b5f60208284031215620013d2575f80fd5b815162000b1781620011bd565b5f60018201620013f357620013f362001378565b5060010190565b634e487b7160e01b5f52603260045260245ffd5b5f82601f8301126200141e575f80fd5b81516200142f6200111582620010ca565b81815284602083860101111562001444575f80fd5b6200145782602083016020870162001283565b949350505050565b805162001262816200106d565b805162ffffff8116811462001262575f80fd5b5f805f805f805f80610100898b03121562001498575f80fd5b885167ffffffffffffffff80821115620014b0575f80fd5b620014be8c838d016200140e565b995060208b0151915080821115620014d4575f80fd5b620014e28c838d016200140e565b985060408b0151915080821115620014f8575f80fd5b50620015078b828c016200140e565b9650506200151860608a016200145f565b94506200152860808a016200145f565b935060a0890151925060c089015191506200154660e08a016200146c565b90509295985092959890939650565b6001600160a01b03831681526040602082018190525f906200145790830184620012a7565b5f602082840312156200158b575f80fd5b815162000b17816200106d565b60208152620015b36020820183516001600160a01b03169052565b5f6020830151620015cf60408401826001600160a01b03169052565b506040830151610160806060850152620015ee610180850183620012a7565b91506060850151601f19808685030160808701526200160e8483620012a7565b935060808701519150808685030160a0870152506200162e8382620012a7565b92505060a08501516200164c60c08601826001600160a01b03169052565b5060c085015160e085015260e085015161010081818701528087015191505061012062001683818701836001600160a01b03169052565b8601519050610140620016a0868201836001600160a01b03169052565b9095015162ffffff1693019290925250919050565b5f60208284031215620016c6575f80fd5b5051919050565b5f8251620016e081846020870162001283565b919091019291505056fe608060405234801562000010575f80fd5b506040516200289b3803806200289b8339810160408190526200003391620000c8565b806001600160a01b0381166200006257604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6200006d8162000079565b505060018055620000f7565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f60208284031215620000d9575f80fd5b81516001600160a01b0381168114620000f0575f80fd5b9392505050565b61279680620001055f395ff3fe608060405234801561000f575f80fd5b50600436106101bb575f3560e01c80638da5cb5b116100f3578063c80b7c1711610093578063e77d1a1f1161006e578063e77d1a1f146103be578063e985e367146103c7578063f2fde38b146103da578063fa1a5f59146103ed575f80fd5b8063c80b7c1714610351578063c884ef8314610364578063df7dbd7914610396575f80fd5b8063ac307773116100ce578063ac30777314610313578063c19d93fb1461031b578063c1cbbca714610335578063c59ee1dc14610348575f80fd5b80638da5cb5b146102e75780639972cffe146102f75780639b13e8e91461030a575f80fd5b806348c54b9d1161015e5780634da60aa5116101395780634da60aa5146102a6578063715018a6146102b9578063791b98bc146102c1578063811e539c146102d4575f80fd5b806348c54b9d146102775780634bae6f3f1461027f5780634bb278f31461029e575f80fd5b80631514617e116101995780631514617e1461020d578063370158ea1461021657806342e94c901461022d57806344c63eec1461024c575f80fd5b8063089fe6aa146101bf57806310309781146101ec578063146901db14610203575b5f80fd5b6013546101d390610100900462ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b6101f5600a5481565b6040519081526020016101e3565b61020b6103f6565b005b6101f560065481565b61021e6105a0565b6040516101e393929190612110565b6101f561023b36600461216c565b60106020525f908152604090205481565b600e5461025f906001600160a01b031681565b6040516001600160a01b0390911681526020016101e3565b61020b610748565b6101f561028d36600461216c565b60116020525f908152604090205481565b61020b61091f565b600c5461025f906001600160a01b031681565b61020b610b27565b600f5461025f906001600160a01b031681565b600d5461025f906001600160a01b031681565b5f546001600160a01b031661025f565b61020b610305366004612198565b610b38565b6101f560095481565b61020b610f83565b6013546103289060ff1681565b6040516101e391906121dd565b61020b610343366004612203565b6110a5565b6101f560075481565b61020b61035f3660046122f3565b611312565b61038661037236600461216c565b60126020525f908152604090205460ff1681565b60405190151581526020016101e3565b6103a96103a4366004612203565b6118ce565b604080519283526020830191909152016101e3565b6101f560055481565b600b5461025f906001600160a01b031681565b61020b6103e836600461216c565b6119cc565b6101f560085481565b6103fe611a06565b610406611a32565b5f60135460ff16600381111561041e5761041e6121c9565b146104695760405162461bcd60e51b815260206004820152601660248201527546756e6472616973696e67206e6f742061637469766560501b60448201526064015b60405180910390fd5b600d5f9054906101000a90046001600160a01b03166001600160a01b031663a8d31c786040518163ffffffff1660e01b81526004015f604051808303815f87803b1580156104b5575f80fd5b505af11580156104c7573d5f803e3d5ffd5b50506013805460ff191660021790555050600b546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801561051e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105429190612427565b6040519091507f625a40e68d9554793bf647bf32e4885e7f15bd1bfac262906cc7d26f376f20a2905f90a16105946105815f546001600160a01b031690565b600b546001600160a01b03169083611a5c565b5061059e60018055565b565b6002805481906105af9061243e565b80601f01602080910402602001604051908101604052809291908181526020018280546105db9061243e565b80156106265780601f106105fd57610100808354040283529160200191610626565b820191905f5260205f20905b81548152906001019060200180831161060957829003601f168201915b50505050509080600101805461063b9061243e565b80601f01602080910402602001604051908101604052809291908181526020018280546106679061243e565b80156106b25780601f10610689576101008083540402835291602001916106b2565b820191905f5260205f20905b81548152906001019060200180831161069557829003601f168201915b5050505050908060020180546106c79061243e565b80601f01602080910402602001604051908101604052809291908181526020018280546106f39061243e565b801561073e5780601f106107155761010080835404028352916020019161073e565b820191905f5260205f20905b81548152906001019060200180831161072157829003601f168201915b5050505050905083565b610750611a32565b600360135460ff166003811115610769576107696121c9565b146107ae5760405162461bcd60e51b815260206004820152601560248201527414ddd85c081c185a5c881b9bdd0818dc99585d1959605a1b6044820152606401610460565b335f9081526012602052604090205460ff16156108065760405162461bcd60e51b8152602060048201526016602482015275151bdad95b9cc8185b1c9958591e4818db185a5b595960521b6044820152606401610460565b335f908152601260209081526040808320805460ff191660011790556011909152902054600654156108c957600e546005546009546001600160a01b03909216916324ef8c1b913391610859919061248a565b6006546040516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091526044820152606481018490526084015f604051808303815f87803b1580156108ae575f80fd5b505af11580156108c0573d5f803e3d5ffd5b505050506108e0565b600b546108e0906001600160a01b03163383611a5c565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a25061059e60018055565b610927611a06565b61092f611a32565b5f60135460ff166003811115610947576109476121c9565b1461098d5760405162461bcd60e51b815260206004820152601660248201527546756e6472616973696e67206e6f742061637469766560501b6044820152606401610460565b6013805460ff19166001179055600d546040805163d54dff2d60e01b815290516001600160a01b039092169163d54dff2d916004808201925f9290919082900301818387803b1580156109de575f80fd5b505af11580156109f0573d5f803e3d5ffd5b50505050610a1e610a085f546001600160a01b031690565b600754600c546001600160a01b03169190611a5c565b600b546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015610a64573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a889190612427565b9050600854811115610ac857610ac8610aa85f546001600160a01b031690565b600854610ab5908461249d565b600b546001600160a01b03169190611a5c565b60065415610af157600e54600854600b54610af1926001600160a01b0391821692911690611a5c565b426009556040517f6823b073d48d6e3a7d385eeb601452d680e74bb46afe3255a7d778f3a9b17681905f90a15061059e60018055565b610b2f611a06565b61059e5f611ac0565b610b40611a06565b610b48611a32565b600160135460ff166003811115610b6157610b616121c9565b14610bae5760405162461bcd60e51b815260206004820152601960248201527f46756e6472616973696e67206e6f742066696e616c697a6564000000000000006044820152606401610460565b6013805460ff19166003179055600b546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa158015610c01573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c259190612427565b600c546040516370a0823160e01b81523060048201529192505f916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610c70573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c949190612427565b60065490915082905f03610d1a576008548311610d0a5760405162461bcd60e51b815260206004820152602e60248201527f4e6f7420656e6f7567682073616c6520746f6b656e7320746f2063726561746560448201526d103a34329039bbb0b8103830b4b960911b6064820152608401610460565b600854610d17908461249d565b90505b5f80610d25846118ce565b9150915082821115610d8e5760405162461bcd60e51b815260206004820152602c60248201527f4e6f7420656e6f756768206c697175696469747920746f20637265617465207460448201526b34329039bbb0b8103830b4b960a11b6064820152608401610460565b600b54600c545f91829182918291610db4916001600160a01b0390811691168888611b0f565b600f5493975091955093509150610dd8906001600160a01b03808716911684611bb5565b600f54610df2906001600160a01b03858116911683611bb5565b60408051610160810182526001600160a01b038087168252858116602083015260135462ffffff61010091829004168385015260028f810b60608501528e900b608084015260a0830186905260c083018590525f60e084018190529083018190523361012084015242610140840152600f549351634418b22b60e11b815292939092839283928392911690638831645690610e919088906004016124b0565b6080604051808303815f875af1158015610ead573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ed19190612574565b935093509350935086821015610f0057610f0033610eef848a61249d565b6001600160a01b038c169190611a5c565b85811015610f2757610f2733610f16838961249d565b6001600160a01b038b169190611a5c565b604080518581526001600160801b03851660208201527fc1a1ee9d31c39113d1073fa8118a8a09cd2e5777ef352c4bede40d05f9376236910160405180910390a15050505050505050505050505050610f7f60018055565b5050565b600260135460ff166003811115610f9c57610f9c6121c9565b14610fdc5760405162461bcd60e51b815260206004820152601060248201526f14985a5cd9481b9bdd0819985a5b195960821b6044820152606401610460565b335f9081526012602052604090205460ff16156110335760405162461bcd60e51b8152602060048201526015602482015274119d5b991cc8185b1c9958591e4818db185a5b5959605a1b6044820152606401610460565b335f818152601260209081526040808320805460ff1916600117905560108252918290205491518281529192917fa65a8b4f7f65a1063243d7f7e9e4da00ff767599acf21549ef2548a45d1695ae910160405180910390a2600c546110a2906001600160a01b03163383611a5c565b50565b6110ad611a32565b5f60135460ff1660038111156110c5576110c56121c9565b146111125760405162461bcd60e51b815260206004820152601960248201527f46756e6472616973696e67206973206e6f7420616374697665000000000000006044820152606401610460565b600d5460405163060b0b0f60e41b8152600481018390523360248201525f916001600160a01b0316906360b0b0f0906044016020604051808303815f875af1158015611160573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111849190612427565b335f908152601060205260408120805492935084929091906111a790849061248a565b9091555050335f90815260116020526040812080548392906111ca90849061248a565b925050819055508160075f8282546111e2919061248a565b925050819055508060085f8282546111fa919061248a565b9091555050600c54604051636eb1769f60e11b81523360048201523060248201525f916001600160a01b03169063dd62ed3e90604401602060405180830381865afa15801561124b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061126f9190612427565b9050828110156112ba5760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e7420616c6c6f77616e636560501b6044820152606401610460565b600c546112d2906001600160a01b0316333086611c42565b60405183815233907f4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b9060200160405180910390a250506110a260018055565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff165f811580156113575750825b90505f8267ffffffffffffffff1660011480156113735750303b155b905081158015611381575080155b1561139f5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156113c957845460ff60401b1916600160401b1785555b85516001600160a01b031661142a5760405162461bcd60e51b815260206004820152602160248201527f53616c6520746f6b656e20616464726573732063616e6e6f74206265207a65726044820152606f60f81b6064820152608401610460565b60208601516001600160a01b031661148f5760405162461bcd60e51b815260206004820152602260248201527f526169736520746f6b656e20616464726573732063616e6e6f74206265207a65604482015261726f60f01b6064820152608401610460565b6101008601516001600160a01b03166114fa5760405162461bcd60e51b815260206004820152602760248201527f506f736974696f6e206d616e6167657220616464726573732063616e6e6f74206044820152666265207a65726f60c81b6064820152608401610460565b60a08601516001600160a01b03166115545760405162461bcd60e51b815260206004820152601f60248201527f43616d706169676e20616464726573732063616e6e6f74206265207a65726f006044820152606401610460565b60e0860151158061157257506101208601516001600160a01b031615155b6115db5760405162461bcd60e51b815260206004820152603460248201527f56657374696e6720616464726573732063616e6e6f74206265207a65726f206960448201527319881d995cdd1a5b99c81a5cc8195b98589b195960621b6064820152608401610460565b85610140015162ffffff166127101480611600575085610140015162ffffff16610bb8145b80611616575085610140015162ffffff166101f4145b6116555760405162461bcd60e51b815260206004820152601060248201526f496e76616c696420706f6f6c2066656560801b6044820152606401610460565b8551600b80546001600160a01b03199081166001600160a01b0393841617909155602080890151600c805490931693169290921790556040805160608082018352828a0151808352908a0151938201939093526080890151918101919091529060029081906116c49082612605565b50602082015160018201906116d99082612605565b50604082015160028201906116ee9082612605565b50505060a0860151600d80546001600160a01b03199081166001600160a01b039384161790915561010080890151600f8054841691851691909117905560e089015160065560c0890151600555610120890151600e805490931693169290921790556013805461014089015163ffffffff1990911662ffffff90911690920291909117905542600a555f61178a683635c9adc5dea000006118ce565b50600b54600c549192505f918291829182916117bd916001600160a01b03918216911687683635c9adc5dea00000611b0f565b600f5460135494985092965090945092506001600160a01b0316906313ead5629086908690610100900462ffffff166117f68787611c7b565b6040516001600160e01b031960e087901b1681526001600160a01b039485166004820152928416602484015262ffffff90911660448301529190911660648201526084016020604051808303815f875af1158015611856573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061187a91906126c1565b50505050505083156118c657845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b5f805f600d5f9054906101000a90046001600160a01b03166001600160a01b0316637b1b1de66040518163ffffffff1660e01b8152600401602060405180830381865afa158015611921573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119459190612427565b90505f81116119a85760405162461bcd60e51b815260206004820152602960248201527f50726963652070657220746f6b656e206d7573742062652067726561746572206044820152687468616e207a65726f60b81b6064820152608401610460565b806119bb85670de0b6b3a76400006126dc565b6119c59190612707565b9492505050565b6119d4611a06565b6001600160a01b0381166119fd57604051631e4fbdf760e01b81525f6004820152602401610460565b6110a281611ac0565b5f546001600160a01b0316331461059e5760405163118cdaa760e01b8152336004820152602401610460565b600260015403611a5557604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b6040516001600160a01b03838116602483015260448201839052611abb91859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611ca6565b505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f805f80866001600160a01b0316886001600160a01b031603611b745760405162461bcd60e51b815260206004820152601860248201527f546f6b656e73206d75737420626520646966666572656e7400000000000000006044820152606401610460565b866001600160a01b0316886001600160a01b03161015611b9e575086925085915084905083611baa565b50859250869150839050845b945094509450949050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301525f919085169063dd62ed3e90604401602060405180830381865afa158015611c02573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c269190612427565b9050611c3c8484611c37858561248a565b611d07565b50505050565b6040516001600160a01b038481166024830152838116604483015260648201839052611c3c9186918216906323b872dd90608401611a89565b5f80611c8b84606085901b612707565b90505f6030611c9983611d96565b901b925050505b92915050565b5f611cba6001600160a01b03841683611ee9565b905080515f14158015611cde575080806020019051810190611cdc9190612726565b155b15611abb57604051635274afe760e01b81526001600160a01b0384166004820152602401610460565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611d588482611efd565b611c3c576040516001600160a01b0384811660248301525f6044830152611d8c91869182169063095ea7b390606401611a89565b611c3c8482611ca6565b5f60018211611da3575090565b816001600160801b8210611dbc5760809190911c9060401b5b600160401b8210611dd25760409190911c9060201b5b6401000000008210611de95760209190911c9060101b5b620100008210611dfe5760109190911c9060081b5b6101008210611e125760089190911c9060041b5b60108210611e255760049190911c9060021b5b60048210611e315760011b5b600302600190811c90818581611e4957611e496126f3565b048201901c90506001818581611e6157611e616126f3565b048201901c90506001818581611e7957611e796126f3565b048201901c90506001818581611e9157611e916126f3565b048201901c90506001818581611ea957611ea96126f3565b048201901c90506001818581611ec157611ec16126f3565b048201901c9050611ee0818581611eda57611eda6126f3565b04821190565b90039392505050565b6060611ef683835f611f9e565b9392505050565b5f805f846001600160a01b031684604051611f189190612745565b5f604051808303815f865af19150503d805f8114611f51576040519150601f19603f3d011682016040523d82523d5f602084013e611f56565b606091505b5091509150818015611f80575080511580611f80575080806020019051810190611f809190612726565b8015611f9557505f856001600160a01b03163b115b95945050505050565b606081471015611fca5760405163cf47918160e01b815247600482015260248101839052604401610460565b5f80856001600160a01b03168486604051611fe59190612745565b5f6040518083038185875af1925050503d805f811461201f576040519150601f19603f3d011682016040523d82523d5f602084013e612024565b606091505b509150915061203486838361203e565b9695505050505050565b6060826120535761204e8261209a565b611ef6565b815115801561206a57506001600160a01b0384163b155b1561209357604051639996b31560e01b81526001600160a01b0385166004820152602401610460565b5080611ef6565b8051156120aa5780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b5f5b838110156120dd5781810151838201526020016120c5565b50505f910152565b5f81518084526120fc8160208601602086016120c3565b601f01601f19169290920160200192915050565b606081525f61212260608301866120e5565b828103602084015261213481866120e5565b9050828103604084015261203481856120e5565b6001600160a01b03811681146110a2575f80fd5b803561216781612148565b919050565b5f6020828403121561217c575f80fd5b8135611ef681612148565b8035600281900b8114612167575f80fd5b5f80604083850312156121a9575f80fd5b6121b283612187565b91506121c060208401612187565b90509250929050565b634e487b7160e01b5f52602160045260245ffd5b60208101600483106121fd57634e487b7160e01b5f52602160045260245ffd5b91905290565b5f60208284031215612213575f80fd5b5035919050565b634e487b7160e01b5f52604160045260245ffd5b604051610160810167ffffffffffffffff811182821017156122525761225261221a565b60405290565b5f82601f830112612267575f80fd5b813567ffffffffffffffff808211156122825761228261221a565b604051601f8301601f19908116603f011681019082821181831017156122aa576122aa61221a565b816040528381528660208588010111156122c2575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803562ffffff81168114612167575f80fd5b5f60208284031215612303575f80fd5b813567ffffffffffffffff8082111561231a575f80fd5b90830190610160828603121561232e575f80fd5b61233661222e565b61233f8361215c565b815261234d6020840161215c565b6020820152604083013582811115612363575f80fd5b61236f87828601612258565b604083015250606083013582811115612386575f80fd5b61239287828601612258565b6060830152506080830135828111156123a9575f80fd5b6123b587828601612258565b6080830152506123c760a0840161215c565b60a082015260c083013560c082015260e083013560e082015261010091506123f082840161215c565b82820152610120915061240482840161215c565b8282015261014091506124188284016122e1565b91810191909152949350505050565b5f60208284031215612437575f80fd5b5051919050565b600181811c9082168061245257607f821691505b60208210810361247057634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b80820180821115611ca057611ca0612476565b81810381811115611ca057611ca0612476565b81516001600160a01b03168152610160810160208301516124dc60208401826001600160a01b03169052565b5060408301516124f3604084018262ffffff169052565b506060830151612508606084018260020b9052565b50608083015161251d608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151612563828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f8060808587031215612587575f80fd5b8451935060208501516001600160801b03811681146125a4575f80fd5b6040860151606090960151949790965092505050565b601f821115611abb57805f5260205f20601f840160051c810160208510156125df5750805b601f840160051c820191505b818110156125fe575f81556001016125eb565b5050505050565b815167ffffffffffffffff81111561261f5761261f61221a565b6126338161262d845461243e565b846125ba565b602080601f831160018114612666575f841561264f5750858301515b5f19600386901b1c1916600185901b1785556118c6565b5f85815260208120601f198616915b8281101561269457888601518255948401946001909101908401612675565b50858210156126b157878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b5f602082840312156126d1575f80fd5b8151611ef681612148565b8082028115828204841417611ca057611ca0612476565b634e487b7160e01b5f52601260045260245ffd5b5f8261272157634e487b7160e01b5f52601260045260245ffd5b500490565b5f60208284031215612736575f80fd5b81518015158114611ef6575f80fd5b5f82516127568184602087016120c3565b919091019291505056fea264697066735822122015c6ccb38f46c6ddc72f152645e93f1c8b7e3bc1c06cdad7678c4eaf10cdfd4d64736f6c6343000818003360a060405234801561000f575f80fd5b50604051610bdf380380610bdf83398101604081905261002e9161013f565b60015f55806001600160a01b03811661006157604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b61006a816100d3565b506001600160a01b0382166100c15760405162461bcd60e51b815260206004820152601c60248201527f546f6b656e20616464726573732063616e6e6f74206265207a65726f000000006044820152606401610058565b506001600160a01b0316608052610170565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b80516001600160a01b038116811461013a575f80fd5b919050565b5f8060408385031215610150575f80fd5b61015983610124565b915061016760208401610124565b90509250929050565b608051610a5161018e5f395f818160d101526105a90152610a515ff3fe608060405234801561000f575f80fd5b5060043610610085575f3560e01c80638da5cb5b116100585780638da5cb5b1461010b578063ec0904f71461011c578063f2fde38b1461012f578063fdb20ccb14610142575f80fd5b80631726cbc81461008957806324ef8c1b146100af578063715018a6146100c457806382bfefc8146100cc575b5f80fd5b61009c610097366004610911565b610198565b6040519081526020015b60405180910390f35b6100c26100bd36600461092a565b61021d565b005b6100c2610448565b6100f37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100a6565b6001546001600160a01b03166100f3565b6100c261012a366004610911565b61045b565b6100c261013d366004610911565b610621565b610178610150366004610911565b600260208190525f918252604090912080546001820154928201546003909201549092919084565b6040805194855260208501939093529183015260608201526080016100a6565b6001600160a01b0381165f90815260026020526040812080544210156101c057505f92915050565b80545f906101ce9042610974565b90505f82600101548284600201546101e69190610987565b6101f0919061099e565b90508260020154811115610205575060028201545b60038301546102149082610974565b95945050505050565b61022561065b565b6001600160a01b03841661028f5760405162461bcd60e51b815260206004820152602660248201527f42656e65666963696172792063616e6e6f7420626520746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b5f81116102de5760405162461bcd60e51b815260206004820152601f60248201527f56657374696e6720616d6f756e74206d75737420626520706f736974697665006044820152606401610286565b5f82116103375760405162461bcd60e51b815260206004820152602160248201527f56657374696e67206475726174696f6e206d75737420626520706f73697469766044820152606560f81b6064820152608401610286565b6001600160a01b0384165f90815260026020526040902054156103ad5760405162461bcd60e51b815260206004820152602860248201527f56657374696e6720616c72656164792073657420666f7220746869732062656e604482015267656669636961727960c01b6064820152608401610286565b6040805160808101825284815260208082018581528284018581525f60608086018281526001600160a01b038c168084526002808852938990209751885594516001880155925191860191909155905160039094019390935583518581529182018790529281018590527fa95063d8afe9473976f0965d552dce67e1b02d154b4fb06ff7e518f8648e93c7910160405180910390a250505050565b61045061065b565b6104595f610688565b565b6104636106d9565b6001600160a01b0381165f90815260026020526040812080549091036104d75760405162461bcd60e51b8152602060048201526024808201527f56657374696e67206e6f742073657420666f7220746869732062656e656669636044820152636961727960e01b6064820152608401610286565b80544210156105285760405162461bcd60e51b815260206004820152601b60248201527f56657374696e6720686173206e6f7420737461727465642079657400000000006044820152606401610286565b5f61053283610198565b90505f81116105835760405162461bcd60e51b815260206004820152601d60248201527f4e6f20746f6b656e73206172652064756520666f722072656c656173650000006044820152606401610286565b80826003015f82825461059691906109bd565b909155506105d090506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483610701565b826001600160a01b03167fc7798891864187665ac6dd119286e44ec13f014527aeeb2b8eb3fd413df931798260405161060b91815260200190565b60405180910390a2505061061e60015f55565b50565b61062961065b565b6001600160a01b03811661065257604051631e4fbdf760e01b81525f6004820152602401610286565b61061e81610688565b6001546001600160a01b031633146104595760405163118cdaa760e01b8152336004820152602401610286565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b60025f54036106fb57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610753908490610758565b505050565b5f61076c6001600160a01b038416836107b9565b905080515f1415801561079057508080602001905181019061078e91906109d0565b155b1561075357604051635274afe760e01b81526001600160a01b0384166004820152602401610286565b60606107c683835f6107cf565b90505b92915050565b6060814710156107fb5760405163cf47918160e01b815247600482015260248101839052604401610286565b5f80856001600160a01b0316848660405161081691906109ef565b5f6040518083038185875af1925050503d805f8114610850576040519150601f19603f3d011682016040523d82523d5f602084013e610855565b606091505b5091509150610865868383610871565b925050505b9392505050565b60608261088657610881826108cd565b61086a565b815115801561089d57506001600160a01b0384163b155b156108c657604051639996b31560e01b81526001600160a01b0385166004820152602401610286565b508061086a565b8051156108dd5780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b80356001600160a01b038116811461090c575f80fd5b919050565b5f60208284031215610921575f80fd5b6107c6826108f6565b5f805f806080858703121561093d575f80fd5b610946856108f6565b966020860135965060408601359560600135945092505050565b634e487b7160e01b5f52601160045260245ffd5b818103818111156107c9576107c9610960565b80820281158282048414176107c9576107c9610960565b5f826109b857634e487b7160e01b5f52601260045260245ffd5b500490565b808201808211156107c9576107c9610960565b5f602082840312156109e0575f80fd5b8151801515811461086a575f80fd5b5f82515f5b81811015610a0e57602081860181015185830152016109f4565b505f92019182525091905056fea2646970667358221220e91dccb1c8fc611428389f6d0a0fbd43f5f9407a494737d5d3b3c7477930061a64736f6c63430008180033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220750cc647247a3306bd50221b3051648055299fe66a08a73911aa1365606781f164736f6c63430008180033";
const isSuperArgs$1 = (xs) => xs.length > 1;
class FundraiserFactory__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs$1(args)) {
            super(...args);
        }
        else {
            super(_abi$3, _bytecode$1, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static bytecode = _bytecode$1;
    static abi = _abi$3;
    static createInterface() {
        return new Interface(_abi$3);
    }
    static connect(address, runner) {
        return new Contract(address, _abi$3, runner);
    }
}

const _abi$2 = [
    {
        type: "function",
        name: "contribute",
        inputs: [
            {
                name: "contribution",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "contributor",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getCampaignDetails",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
            {
                name: "",
                type: "string",
                internalType: "string",
            },
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "getConfig",
        inputs: [],
        outputs: [
            {
                name: "params",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRaisedAmount",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "handleFailure",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "handleFinalization",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "isCampaignSuccessful",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "pricePerToken",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
];
class ICampaign__factory {
    static abi = _abi$2;
    static createInterface() {
        return new Interface(_abi$2);
    }
    static connect(address, runner) {
        return new Contract(address, _abi$2, runner);
    }
}

const _abi$1 = [
    {
        type: "function",
        name: "addVestingSchedule",
        inputs: [
            {
                name: "_beneficiary",
                type: "address",
                internalType: "address",
            },
            {
                name: "_start",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_duration",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "releasableAmount",
        inputs: [
            {
                name: "beneficiary",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "releaseFor",
        inputs: [
            {
                name: "beneficiary",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "vestingSchedules",
        inputs: [
            {
                name: "beneficiary",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "vestingStart",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "vestingDuration",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "totalVestingAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "releasedAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
];
class IVesting__factory {
    static abi = _abi$1;
    static createInterface() {
        return new Interface(_abi$1);
    }
    static connect(address, runner) {
        return new Contract(address, _abi$1, runner);
    }
}

const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "name",
                type: "string",
                internalType: "string",
            },
            {
                name: "symbol",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "allowance",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "approve",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "balanceOf",
        inputs: [
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "decimals",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "uint8",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "mint",
        inputs: [
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "symbol",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "totalSupply",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transfer",
        inputs: [
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "transferFrom",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "spender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                name: "from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "ERC20InsufficientAllowance",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
            {
                name: "allowance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "needed",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InsufficientBalance",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
            {
                name: "balance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "needed",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidApprover",
        inputs: [
            {
                name: "approver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidReceiver",
        inputs: [
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidSender",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "ERC20InvalidSpender",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
        ],
    },
];
const _bytecode = "0x608060405234801562000010575f80fd5b5060405162000a4338038062000a4383398101604081905262000033916200011e565b818160036200004383826200020e565b5060046200005282826200020e565b5050505050620002da565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000081575f80fd5b81516001600160401b03808211156200009e576200009e6200005d565b604051601f8301601f19908116603f01168101908282118183101715620000c957620000c96200005d565b8160405283815260209250866020858801011115620000e6575f80fd5b5f91505b83821015620001095785820183015181830184015290820190620000ea565b5f602085830101528094505050505092915050565b5f806040838503121562000130575f80fd5b82516001600160401b038082111562000147575f80fd5b620001558683870162000071565b935060208501519150808211156200016b575f80fd5b506200017a8582860162000071565b9150509250929050565b600181811c908216806200019957607f821691505b602082108103620001b857634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200020957805f5260205f20601f840160051c81016020851015620001e55750805b601f840160051c820191505b8181101562000206575f8155600101620001f1565b50505b505050565b81516001600160401b038111156200022a576200022a6200005d565b62000242816200023b845462000184565b84620001be565b602080601f83116001811462000278575f8415620002605750858301515b5f19600386901b1c1916600185901b178555620002d2565b5f85815260208120601f198616915b82811015620002a85788860151825594840194600190910190840162000287565b5085821015620002c657878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b61075b80620002e85f395ff3fe608060405234801561000f575f80fd5b506004361061009b575f3560e01c806340c10f191161006357806340c10f191461011457806370a082311461012957806395d89b4114610151578063a9059cbb14610159578063dd62ed3e1461016c575f80fd5b806306fdde031461009f578063095ea7b3146100bd57806318160ddd146100e057806323b872dd146100f2578063313ce56714610105575b5f80fd5b6100a76101a4565b6040516100b491906105b5565b60405180910390f35b6100d06100cb36600461061c565b610234565b60405190151581526020016100b4565b6002545b6040519081526020016100b4565b6100d0610100366004610644565b61024d565b604051601281526020016100b4565b61012761012236600461061c565b610270565b005b6100e461013736600461067d565b6001600160a01b03165f9081526020819052604090205490565b6100a761027e565b6100d061016736600461061c565b61028d565b6100e461017a36600461069d565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6060600380546101b3906106ce565b80601f01602080910402602001604051908101604052809291908181526020018280546101df906106ce565b801561022a5780601f106102015761010080835404028352916020019161022a565b820191905f5260205f20905b81548152906001019060200180831161020d57829003601f168201915b5050505050905090565b5f3361024181858561029a565b60019150505b92915050565b5f3361025a8582856102ac565b61026585858561032c565b506001949350505050565b61027a8282610389565b5050565b6060600480546101b3906106ce565b5f3361024181858561032c565b6102a783838360016103bd565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f198114610326578181101561031857604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61032684848484035f6103bd565b50505050565b6001600160a01b03831661035557604051634b637e8f60e11b81525f600482015260240161030f565b6001600160a01b03821661037e5760405163ec442f0560e01b81525f600482015260240161030f565b6102a783838361048f565b6001600160a01b0382166103b25760405163ec442f0560e01b81525f600482015260240161030f565b61027a5f838361048f565b6001600160a01b0384166103e65760405163e602df0560e01b81525f600482015260240161030f565b6001600160a01b03831661040f57604051634a1406b160e11b81525f600482015260240161030f565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561032657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161048191815260200190565b60405180910390a350505050565b6001600160a01b0383166104b9578060025f8282546104ae9190610706565b909155506105299050565b6001600160a01b0383165f908152602081905260409020548181101561050b5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161030f565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b03821661054557600280548290039055610563565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105a891815260200190565b60405180910390a3505050565b5f602080835283518060208501525f5b818110156105e1578581018301518582016040015282016105c5565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610617575f80fd5b919050565b5f806040838503121561062d575f80fd5b61063683610601565b946020939093013593505050565b5f805f60608486031215610656575f80fd5b61065f84610601565b925061066d60208501610601565b9150604084013590509250925092565b5f6020828403121561068d575f80fd5b61069682610601565b9392505050565b5f80604083850312156106ae575f80fd5b6106b783610601565b91506106c560208401610601565b90509250929050565b600181811c908216806106e257607f821691505b60208210810361070057634e487b7160e01b5f52602260045260245ffd5b50919050565b8082018082111561024757634e487b7160e01b5f52601160045260245ffdfea26469706673582212204aefb9a065099460d707234550fee9e420f5eb203c6b423b9a3c93e3494476d164736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class MockERC20__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(name, symbol, overrides) {
        return super.getDeployTransaction(name, symbol, overrides || {});
    }
    deploy(name, symbol, overrides) {
        return super.deploy(name, symbol, overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new Interface(_abi);
    }
    static connect(address, runner) {
        return new Contract(address, _abi, runner);
    }
}

class FundraiserError extends Error {
    constructor(message) {
        super(message);
        this.name = "FundraiserError";
    }
}
class UnknownError extends FundraiserError {
    constructor(message) {
        super(`Unknown error occurred: ${message}`);
        this.name = "UnknownError";
    }
}
class InvalidArgument extends FundraiserError {
    constructor(message) {
        super(`Argument incorrect: ${message}`);
        this.name = "InvalidArgument";
    }
}
class AllowanceError extends FundraiserError {
    constructor(message) {
        super(`Insufficient allowance: ${message}`);
        this.name = "AllowanceError";
    }
}
class FinalizationError extends FundraiserError {
    constructor(message) {
        super(`Finalization error: ${message}`);
        this.name = "FinalizationError";
    }
}
class ClaimingError extends FundraiserError {
    constructor(message) {
        super(`Claiming error: ${message}`);
        this.name = "ClaimingError";
    }
}
class InitSwapPairError extends FundraiserError {
    constructor(message) {
        super(`Init swap pair error: ${message}`);
        this.name = "InitSwapPairError";
    }
}
function mapRevertReasonToError(reason) {
    if (reason.includes("Price per token must be greater than zero")) {
        return new InvalidArgument("Price per token must be greater than zero.");
    }
    if (reason.includes("Invalid campaign type")) {
        return new InvalidArgument("Invalid campaign type.");
    }
    if (reason.includes("Insufficient allowance")) {
        return new AllowanceError("Make sure you have approved the correct amount of tokens.");
    }
    if (reason.includes("Fundraising still ongoing")) {
        return new FinalizationError("Fundraiser end time hasn't been reached.");
    }
    if (reason.includes("Minimum goal not met")) {
        return new FinalizationError("Fundraiser minimum goal isn't reached (fair launch campaign).");
    }
    if (reason.includes("Minimum goal met")) {
        return new FinalizationError("Can't cancel a fundraiser when minimum goal is met (fair launch campaign).");
    }
    if (reason.includes("Swap pair not created")) {
        return new ClaimingError("Wait for the fundraiser creator to initialize the swap pair.");
    }
    if (reason.includes("Fundraising not finalized")) {
        return new InitSwapPairError("You must first finalize the fundraiser.");
    }
    if (reason.includes("Tokens already claimed")) {
        return new ClaimingError("User already claimed the tokens.");
    }
    return new UnknownError(reason);
}

class FundraiserWeb3Connect {
    provider;
    fundraiserFactory;
    pending;
    connected;
    constructor(factoryAddr) {
        if (!factoryAddr) {
            throw new Error("Factory address is required");
        }
        this.fundraiserFactory = FundraiserFactory__factory.connect(factoryAddr);
        this.pending = [];
        this.connected = false;
    }
    async performConnectionCheck() {
        return this.safeExecute(async () => {
            await this.fundraiserFactory.fundraiserID();
        });
    }
    async connect(url) {
        this.provider = new JsonRpcProvider(url);
        this.fundraiserFactory = this.fundraiserFactory.connect(this.provider);
        await this.performConnectionCheck();
        this.connected = true;
    }
    async connectWithProvider(provider) {
        this.provider = provider;
        this.fundraiserFactory = this.fundraiserFactory.connect(this.provider);
        await this.performConnectionCheck();
        this.connected = true;
    }
    disconnect() {
        this.provider.removeAllListeners();
    }
    async safeExecute(action) {
        try {
            return await action();
        }
        catch (error) {
            if (error.reason) {
                throw mapRevertReasonToError(error.reason);
            }
            else if (error.data) {
                try {
                    const decodedReason = ethers.AbiCoder.defaultAbiCoder().decode(["string"], error.data)[0];
                    throw mapRevertReasonToError(decodedReason);
                }
                catch {
                    throw new UnknownError(`Revert data could not be decoded. Raw data: ${error.data}`);
                }
            }
            else {
                throw new UnknownError(error.message);
            }
        }
    }
    async createFundraiserStealthLaunch(signer, params, campaignParams) {
        return this.safeExecute(async () => {
            const tx = await this.fundraiserFactory.connect(signer).createFundraiser(ethers.AbiCoder.defaultAbiCoder().encode(["string", "string", "string", "address", "address", "uint256", "uint256", "uint24"], [
                params.projectName,
                params.description,
                params.websiteLink,
                params.saleToken,
                params.raiseToken,
                params.vestingStartDelta,
                params.vestingDuration,
                params.poolFee,
            ]), ethers.AbiCoder.defaultAbiCoder().encode(["uint256", "uint256"], [campaignParams.maxCap, campaignParams.pricePerToken]), 0);
            return await this.addTx(tx);
        });
    }
    async createFundraiserFairLaunch(signer, params, campaignParams) {
        return this.safeExecute(async () => {
            const tx = await this.fundraiserFactory.connect(signer).createFundraiser(ethers.AbiCoder.defaultAbiCoder().encode(["string", "string", "string", "address", "address", "uint256", "uint256", "uint24"], [
                params.projectName,
                params.description,
                params.websiteLink,
                params.saleToken,
                params.raiseToken,
                params.vestingStartDelta,
                params.vestingDuration,
                params.poolFee,
            ]), ethers.AbiCoder.defaultAbiCoder().encode(["uint256", "uint256", "uint256"], [campaignParams.endTime, campaignParams.minimumGoal, campaignParams.pricePerToken]), 1);
            return await this.addTx(tx);
        });
    }
    async approveERC20(signer, tokenAddr, spenderAddr, amount) {
        return this.safeExecute(async () => {
            const tokenContract = new ethers.Contract(tokenAddr, [
                "function approve(address spender, uint256 amount) public returns (bool)"
            ], signer);
            const tx = await tokenContract.approve(spenderAddr, amount);
            return await this.addTx(tx);
        });
    }
    async checkAllowance(signer, tokenAddr, spenderAddr) {
        return this.safeExecute(async () => {
            const tokenContract = new ethers.Contract(tokenAddr, [
                "function allowance(address owner, address spender) public view returns (uint256)"
            ], signer);
            const allowance = await tokenContract.allowance(signer.getAddress(), spenderAddr);
            return allowance;
        });
    }
    async contribute(signer, fundraiserAddr, amount) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.contribute(amount);
            return await this.addTx(tx);
        });
    }
    async getContribution(signer, fundraiserAddr) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);
            const userAddr = await signer.getAddress();
            const contribution = await fundraiser.contributions(userAddr);
            return contribution;
        });
    }
    async claimTokens(signer, fundraiserAddr) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.claimTokens();
            return await this.addTx(tx);
        });
    }
    async claimFunds(signer, fundraiserAddr) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.claimFunds();
            return await this.addTx(tx);
        });
    }
    async getVestingInfo(signer, fundraiserAddr) {
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
    async claimVested(signer, fundraiserAddr) {
        return this.safeExecute(async () => {
            const userAddr = await signer.getAddress();
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);
            const vestingAddr = await fundraiser.vesting();
            const vesting = IVesting__factory.connect(vestingAddr, signer);
            const tx = await vesting.releaseFor(userAddr);
            return await this.addTx(tx);
        });
    }
    async finalizeFundraiser(signer, fundraiserAddr) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.finalize();
            return await this.addTx(tx);
        });
    }
    async cancelFundraiser(signer, fundraiserAddr) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.setFailed();
            return await this.addTx(tx);
        });
    }
    async getSaleTokenLiquidityInfo(fundraiserAddr, initialRaiseTokenLiquidity) {
        const fundraiser = Fundraiser__factory.connect(fundraiserAddr, this.provider);
        let liquidityInfo = await fundraiser.getRequiredAmountsForLiquidity(initialRaiseTokenLiquidity);
        return liquidityInfo.requiredSaleTokens;
    }
    async initSwapPair(signer, fundraiserAddr, tickLower, tickUpper) {
        return this.safeExecute(async () => {
            const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
            const tx = await fundraiser.initSwapPair(tickLower, tickUpper);
            return await this.addTx(tx);
        });
    }
    async getFundraiserState(fundraiserAddr) {
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
            const saleTokenContract = ERC20__factory.connect(saleToken, this.provider);
            const saleTokenBalance = await saleTokenContract.balanceOf(fundraiserAddr);
            const raiseTokenContract = ERC20__factory.connect(raiseToken, this.provider);
            const raiseTokenBalance = await raiseTokenContract.balanceOf(fundraiserAddr);
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
    async getFundraisersCount() {
        return this.safeExecute(async () => {
            return await this.fundraiserFactory.fundraiserID();
        });
    }
    async getAllFundraisers(startID, endID, type) {
        return this.safeExecute(async () => {
            return await this.fundraiserFactory.listFundraisers(startID, endID, type);
        });
    }
    async addTx(tx) {
        this.pending.push(tx);
        return tx;
    }
    async updatePendingTransactions() {
        this.pending = await Promise.all(this.pending.map(async (tx) => {
            const confirmations = await tx.confirmations();
            if (confirmations === 0) {
                const updatedTx = await this.provider.getTransaction(tx.hash);
                if (updatedTx) {
                    return updatedTx;
                }
            }
            return tx;
        }));
    }
    async purgeMinedTransactions() {
        const pendingTransactions = await Promise.all(this.pending.map(async (tx) => {
            const confirmations = await tx.confirmations();
            return confirmations > 0 ? null : tx;
        }));
        this.pending = pendingTransactions.filter((tx) => tx !== null);
    }
}

export { FundraiserFactory__factory, FundraiserWeb3Connect, Fundraiser__factory, MockERC20__factory };
//# sourceMappingURL=fundraiserlib.es.js.map
