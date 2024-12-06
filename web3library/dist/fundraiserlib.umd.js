(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ethers')) :
    typeof define === 'function' && define.amd ? define(['exports', 'ethers'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FundraiserLib = {}, global.ethers));
})(this, (function (exports, ethers) { 'use strict';

    const _abi$5 = [
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
            type: "fallback",
            stateMutability: "payable",
        },
        {
            type: "receive",
            stateMutability: "payable",
        },
        {
            type: "function",
            name: "WETH",
            inputs: [],
            outputs: [
                {
                    name: "",
                    type: "address",
                    internalType: "contract IWETH9",
                },
            ],
            stateMutability: "view",
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
            stateMutability: "payable",
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
            name: "participantsCount",
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
            name: "pool",
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
            name: "provideLiquidity",
            inputs: [
                {
                    name: "desiredRaiseTokenLiquidity",
                    type: "uint256",
                    internalType: "uint256",
                },
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
            stateMutability: "payable",
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
            name: "LiquidityProvided",
            inputs: [
                {
                    name: "raiseTokenAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
                },
                {
                    name: "saleTokenAmount",
                    type: "uint256",
                    indexed: false,
                    internalType: "uint256",
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
    const _bytecode$2 = "0x60a060405273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260805234801562000028575f80fd5b50604051620035e2380380620035e28339810160408190526200004b91620000e0565b806001600160a01b0381166200007a57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b620000858162000091565b5050600180556200010f565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f60208284031215620000f1575f80fd5b81516001600160a01b038116811462000108575f80fd5b9392505050565b6080516134746200016e5f395f81816101eb015281816104ea01528181610dea01528181610e2901528181610eb30152818161117c015281816111c30152818161137b0152818161140401528181611736015261182d01526134745ff3fe6080604052600436106101db575f3560e01c80638da5cb5b11610101578063c80b7c1711610094578063e77d1a1f11610063578063e77d1a1f14610613578063e985e36714610628578063f2fde38b14610647578063fa1a5f59146106665761025f565b8063c80b7c171461056d578063c884ef831461058c578063dd60c898146105ca578063df7dbd79146105df5761025f565b8063bbd27260116100d0578063bbd272601461050c578063c19d93fb1461051f578063c1cbbca714610545578063c59ee1dc146105585761025f565b80638da5cb5b146104945780639b13e8e9146104b0578063ac307773146104c5578063ad5c4648146104d95761025f565b806344c63eec116101795780634da60aa5116101485780634da60aa514610423578063715018a614610442578063791b98bc14610456578063811e539c146104755761025f565b806344c63eec146103b157806348c54b9d146103d05780634bae6f3f146103e45780634bb278f31461040f5761025f565b80631514617e116101b55780631514617e1461031757806316f0115b1461032c578063370158ea1461036357806342e94c90146103865761025f565b8063089fe6aa146102a757806310309781146102e0578063146901db146103035761025f565b3661025f57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461025d5760405162461bcd60e51b815260206004820152601f60248201527f44697265637420455448206465706f73697473206e6f7420616c6c6f7765640060448201526064015b60405180910390fd5b005b60405162461bcd60e51b815260206004820152601b60248201527f46616c6c6261636b2066756e6374696f6e2074726967676572656400000000006044820152606401610254565b3480156102b2575f80fd5b506015546102c790610100900462ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b3480156102eb575f80fd5b506102f5600b5481565b6040519081526020016102d7565b34801561030e575f80fd5b5061025d61067b565b348015610322575f80fd5b506102f560065481565b348015610337575f80fd5b5060115461034b906001600160a01b031681565b6040516001600160a01b0390911681526020016102d7565b34801561036e575f80fd5b50610377610820565b6040516102d793929190612d3f565b348015610391575f80fd5b506102f56103a0366004612d9b565b60126020525f908152604090205481565b3480156103bc575f80fd5b50600f5461034b906001600160a01b031681565b3480156103db575f80fd5b5061025d6109c8565b3480156103ef575f80fd5b506102f56103fe366004612d9b565b60136020525f908152604090205481565b34801561041a575f80fd5b5061025d610b9f565b34801561042e575f80fd5b50600d5461034b906001600160a01b031681565b34801561044d575f80fd5b5061025d611092565b348015610461575f80fd5b5060105461034b906001600160a01b031681565b348015610480575f80fd5b50600e5461034b906001600160a01b031681565b34801561049f575f80fd5b505f546001600160a01b031661034b565b3480156104bb575f80fd5b506102f5600a5481565b3480156104d0575f80fd5b5061025d6110a3565b3480156104e4575f80fd5b5061034b7f000000000000000000000000000000000000000000000000000000000000000081565b61025d61051a366004612dc7565b6112a1565b34801561052a575f80fd5b506015546105389060ff1681565b6040516102d79190612e14565b61025d610553366004612e3a565b6116bd565b348015610563575f80fd5b506102f560075481565b348015610578575f80fd5b5061025d610587366004612f2a565b611acc565b348015610597575f80fd5b506105ba6105a6366004612d9b565b60146020525f908152604090205460ff1681565b60405190151581526020016102d7565b3480156105d5575f80fd5b506102f560095481565b3480156105ea575f80fd5b506105fe6105f9366004612e3a565b6120ac565b604080519283526020830191909152016102d7565b34801561061e575f80fd5b506102f560055481565b348015610633575f80fd5b50600c5461034b906001600160a01b031681565b348015610652575f80fd5b5061025d610661366004612d9b565b6121aa565b348015610671575f80fd5b506102f560085481565b6106836121e4565b61068b612210565b5f60155460ff1660038111156106a3576106a3612e00565b146106e95760405162461bcd60e51b815260206004820152601660248201527546756e6472616973696e67206e6f742061637469766560501b6044820152606401610254565b600e5f9054906101000a90046001600160a01b03166001600160a01b031663a8d31c786040518163ffffffff1660e01b81526004015f604051808303815f87803b158015610735575f80fd5b505af1158015610747573d5f803e3d5ffd5b50506015805460ff191660021790555050600c546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801561079e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107c2919061305e565b6040519091507f625a40e68d9554793bf647bf32e4885e7f15bd1bfac262906cc7d26f376f20a2905f90a16108146108015f546001600160a01b031690565b600c546001600160a01b0316908361223a565b5061081e60018055565b565b60028054819061082f90613075565b80601f016020809104026020016040519081016040528092919081815260200182805461085b90613075565b80156108a65780601f1061087d576101008083540402835291602001916108a6565b820191905f5260205f20905b81548152906001019060200180831161088957829003601f168201915b5050505050908060010180546108bb90613075565b80601f01602080910402602001604051908101604052809291908181526020018280546108e790613075565b80156109325780601f1061090957610100808354040283529160200191610932565b820191905f5260205f20905b81548152906001019060200180831161091557829003601f168201915b50505050509080600201805461094790613075565b80601f016020809104026020016040519081016040528092919081815260200182805461097390613075565b80156109be5780601f10610995576101008083540402835291602001916109be565b820191905f5260205f20905b8154815290600101906020018083116109a157829003601f168201915b5050505050905083565b6109d0612210565b600360155460ff1660038111156109e9576109e9612e00565b14610a2e5760405162461bcd60e51b815260206004820152601560248201527414ddd85c081c185a5c881b9bdd0818dc99585d1959605a1b6044820152606401610254565b335f9081526014602052604090205460ff1615610a865760405162461bcd60e51b8152602060048201526016602482015275151bdad95b9cc8185b1c9958591e4818db185a5b595960521b6044820152606401610254565b335f908152601460209081526040808320805460ff19166001179055601390915290205460065415610b4957600f54600554600a546001600160a01b03909216916324ef8c1b913391610ad991906130c1565b6006546040516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091526044820152606481018490526084015f604051808303815f87803b158015610b2e575f80fd5b505af1158015610b40573d5f803e3d5ffd5b50505050610b60565b600c54610b60906001600160a01b0316338361223a565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a25061081e60018055565b610ba76121e4565b610baf612210565b5f60155460ff166003811115610bc757610bc7612e00565b14610c0d5760405162461bcd60e51b815260206004820152601660248201527546756e6472616973696e67206e6f742061637469766560501b6044820152606401610254565b6015805460ff19166001179055600e546040805163d54dff2d60e01b815290516001600160a01b039092169163d54dff2d916004808201925f9290919082900301818387803b158015610c5e575f80fd5b505af1158015610c70573d5f803e3d5ffd5b5050600c546040516370a0823160e01b81523060048201525f93506001600160a01b0390911691506370a0823190602401602060405180830381865afa158015610cbc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ce0919061305e565b9050600854811015610ddd5780600854610cfa91906130d4565b600c546001600160a01b031663dd62ed3e610d1c5f546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604401602060405180830381865afa158015610d64573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d88919061305e565b1015610da65760405162461bcd60e51b8152600401610254906130e7565b610ddd610dba5f546001600160a01b031690565b3083600854610dc991906130d4565b600c546001600160a01b0316929190612299565b600d546001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911603610f5f576040516370a0823160e01b81523060048201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610e76573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e9a919061305e565b604051632e1a7d4d60e01b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b158015610efc575f80fd5b505af1158015610f0e573d5f803e3d5ffd5b50505050610f235f546001600160a01b031690565b6001600160a01b03166108fc8290811502906040515f60405180830381858888f19350505050158015610f58573d5f803e3d5ffd5b5050610f89565b610f89610f735f546001600160a01b031690565b600754600d546001600160a01b0316919061223a565b60065415610fb257600f54600854600c54610fb2926001600160a01b039182169291169061223a565b600c546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610ff8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061101c919061305e565b905060085481111561105c5761105c61103c5f546001600160a01b031690565b60085461104990846130d4565b600c546001600160a01b0316919061223a565b42600a556040517f6823b073d48d6e3a7d385eeb601452d680e74bb46afe3255a7d778f3a9b17681905f90a15061081e60018055565b61109a6121e4565b61081e5f6122d8565b600260155460ff1660038111156110bc576110bc612e00565b146110fc5760405162461bcd60e51b815260206004820152601060248201526f14985a5cd9481b9bdd0819985a5b195960821b6044820152606401610254565b335f9081526014602052604090205460ff16156111535760405162461bcd60e51b8152602060048201526015602482015274119d5b991cc8185b1c9958591e4818db185a5b5959605a1b6044820152606401610254565b335f908152601460209081526040808320805460ff191660011790556012909152902054600d547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691160361125257604051632e1a7d4d60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b15801561120c575f80fd5b505af115801561121e573d5f803e3d5ffd5b505060405133925083156108fc02915083905f818181858888f1935050505015801561124c573d5f803e3d5ffd5b50611269565b600d54611269906001600160a01b0316338361223a565b60405181815233907fa65a8b4f7f65a1063243d7f7e9e4da00ff767599acf21549ef2548a45d1695ae9060200160405180910390a250565b6112a96121e4565b6112b1612210565b600160155460ff1660038111156112ca576112ca612e00565b146113135760405162461bcd60e51b8152602060048201526019602482015278119d5b991c985a5cda5b99c81b9bdd08199a5b985b1a5e9959603a1b6044820152606401610254565b5f831161136e5760405162461bcd60e51b815260206004820152602360248201527f4c6971756964697479206d7573742062652067726561746572207468616e207a60448201526265726f60e81b6064820152608401610254565b600d546001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911603611477578234146114025760405162461bcd60e51b815260206004820152602760248201527f474c5120616d6f756e74206d757374206d617463682064657369726564206c696044820152667175696469747960c81b6064820152608401610254565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0846040518263ffffffff1660e01b81526004015f604051808303818588803b15801561145b575f80fd5b505af115801561146d573d5f803e3d5ffd5b5050505050611588565b600d5483906001600160a01b031663dd62ed3e61149b5f546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604401602060405180830381865afa1580156114e3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611507919061305e565b10156115605760405162461bcd60e51b815260206004820152602260248201527f496e73756666696369656e7420726169736520746f6b656e20616c6c6f77616e604482015261636560f01b6064820152608401610254565b6115886115745f546001600160a01b031690565b600d546001600160a01b0316903086612299565b5f611592846120ac565b50600c549091506001600160a01b031663dd62ed3e6115b85f546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604401602060405180830381865afa158015611600573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611624919061305e565b8111156116435760405162461bcd60e51b8152600401610254906130e7565b61166b6116575f546001600160a01b031690565b600c546001600160a01b0316903084612299565b60408051858152602081018390527f8f36792923c93a2199809caa740620cdf19b08798f00eeab5a4827142331dfd2910160405180910390a16116ae8383612327565b506116b860018055565b505050565b6116c5612210565b5f60155460ff1660038111156116dd576116dd612e00565b1461172a5760405162461bcd60e51b815260206004820152601960248201527f46756e6472616973696e67206973206e6f7420616374697665000000000000006044820152606401610254565b8034156118a057600d547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081169116146117c95760405162461bcd60e51b815260206004820152603160248201527f474c572063616e206f6e6c79206265207573656420776974682057474c57206160448201527039903a3432903930b4b9b2903a37b5b2b760791b6064820152608401610254565b81156118285760405162461bcd60e51b815260206004820152602860248201527f43616e6e6f74207370656369667920626f74682045544820616e6420746f6b656044820152671b88185b5bdd5b9d60c21b6064820152608401610254565b3490507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004015f604051808303818588803b158015611884575f80fd5b505af1158015611896573d5f803e3d5ffd5b5050505050611975565b600d54604051636eb1769f60e11b81523360048201523060248201525f916001600160a01b03169063dd62ed3e90604401602060405180830381865afa1580156118ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611910919061305e565b90508281101561195b5760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e7420616c6c6f77616e636560501b6044820152606401610254565b600d54611973906001600160a01b0316333086612299565b505b600e5460405163060b0b0f60e41b8152600481018390523360248201525f916001600160a01b0316906360b0b0f0906044016020604051808303815f875af11580156119c3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119e7919061305e565b335f9081526012602052604081205491925003611a135760098054905f611a0d83613128565b91905055505b335f9081526012602052604081208054849290611a319084906130c1565b9091555050335f9081526013602052604081208054839290611a549084906130c1565b925050819055508160075f828254611a6c91906130c1565b925050819055508060085f828254611a8491906130c1565b909155505060405182815233907f4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b9060200160405180910390a25050611ac960018055565b50565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff165f81158015611b115750825b90505f8267ffffffffffffffff166001148015611b2d5750303b155b905081158015611b3b575080155b15611b595760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315611b8357845460ff60401b1916600160401b1785555b85516001600160a01b0316611be45760405162461bcd60e51b815260206004820152602160248201527f53616c6520746f6b656e20616464726573732063616e6e6f74206265207a65726044820152606f60f81b6064820152608401610254565b60208601516001600160a01b0316611c495760405162461bcd60e51b815260206004820152602260248201527f526169736520746f6b656e20616464726573732063616e6e6f74206265207a65604482015261726f60f01b6064820152608401610254565b6101008601516001600160a01b0316611cb45760405162461bcd60e51b815260206004820152602760248201527f506f736974696f6e206d616e6167657220616464726573732063616e6e6f74206044820152666265207a65726f60c81b6064820152608401610254565b60a08601516001600160a01b0316611d0e5760405162461bcd60e51b815260206004820152601f60248201527f43616d706169676e20616464726573732063616e6e6f74206265207a65726f006044820152606401610254565b60e08601511580611d2c57506101208601516001600160a01b031615155b611d955760405162461bcd60e51b815260206004820152603460248201527f56657374696e6720616464726573732063616e6e6f74206265207a65726f206960448201527319881d995cdd1a5b99c81a5cc8195b98589b195960621b6064820152608401610254565b85610140015162ffffff166127101480611dba575085610140015162ffffff16610bb8145b80611dd0575085610140015162ffffff166101f4145b611e0f5760405162461bcd60e51b815260206004820152601060248201526f496e76616c696420706f6f6c2066656560801b6044820152606401610254565b8551600c80546001600160a01b03199081166001600160a01b0393841617909155602080890151600d805490931693169290921790556040805160608082018352828a0151808352908a015193820193909352608089015191810191909152906002908190611e7e908261318b565b5060208201516001820190611e93908261318b565b5060408201516002820190611ea8908261318b565b50505060a0860151600e80546001600160a01b03199081166001600160a01b03938416179091556101008089015160108054841691851691909117905560e089015160065560c0890151600555610120890151600f805490931693169290921790556015805461014089015163ffffffff1990911662ffffff90911690920291909117905542600b555f611f44683635c9adc5dea000006120ac565b50600c54600d549192505f91829182918291611f77916001600160a01b03918216911687683635c9adc5dea0000061277d565b60105460155494985092965090945092506001600160a01b0316906313ead5629086908690610100900462ffffff16611fb08787612823565b6040516001600160e01b031960e087901b1681526001600160a01b039485166004820152928416602484015262ffffff90911660448301529190911660648201526084016020604051808303815f875af1158015612010573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120349190613247565b60115f6101000a8154816001600160a01b0302191690836001600160a01b03160217905550505050505083156120a457845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b5f805f600e5f9054906101000a90046001600160a01b03166001600160a01b0316637b1b1de66040518163ffffffff1660e01b8152600401602060405180830381865afa1580156120ff573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612123919061305e565b90505f81116121865760405162461bcd60e51b815260206004820152602960248201527f50726963652070657220746f6b656e206d7573742062652067726561746572206044820152687468616e207a65726f60b81b6064820152608401610254565b8061219985670de0b6b3a7640000613262565b6121a3919061328d565b9492505050565b6121b26121e4565b6001600160a01b0381166121db57604051631e4fbdf760e01b81525f6004820152602401610254565b611ac9816122d8565b5f546001600160a01b0316331461081e5760405163118cdaa760e01b8152336004820152602401610254565b60026001540361223357604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b6040516001600160a01b038381166024830152604482018390526116b891859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061284e565b6040516001600160a01b0384811660248301528381166044830152606482018390526122d29186918216906323b872dd90608401612267565b50505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600160155460ff16600381111561234057612340612e00565b146123895760405162461bcd60e51b8152602060048201526019602482015278119d5b991c985a5cda5b99c81b9bdd08199a5b985b1a5e9959603a1b6044820152606401610254565b6015805460ff19166003179055600c546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa1580156123dc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612400919061305e565b600d546040516370a0823160e01b81523060048201529192505f916001600160a01b03909116906370a0823190602401602060405180830381865afa15801561244b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061246f919061305e565b60065490915082905f036124ae57600854831161249e5760405162461bcd60e51b8152600401610254906132ac565b6008546124ab90846130d4565b90505b5f806124b9846120ac565b91509150828211156124dd5760405162461bcd60e51b8152600401610254906132ac565b838111156125455760405162461bcd60e51b815260206004820152602f60248201527f4e6f7420656e6f75676820726169736520746f6b656e7320746f20637265617460448201526e32903a34329039bbb0b8103830b4b960891b6064820152608401610254565b600c54600d545f9182918291829161256b916001600160a01b039081169116888861277d565b6010549397509195509350915061258f906001600160a01b038087169116846128af565b6010546125a9906001600160a01b038581169116836128af565b5f604051806101600160405280866001600160a01b03168152602001856001600160a01b03168152602001601560019054906101000a900462ffffff1662ffffff1681526020018d60020b81526020018c60020b81526020018481526020018381526020015f81526020015f815260200161262b5f546001600160a01b031690565b6001600160a01b03908116825242602090920191909152601054604051634418b22b60e11b81529293505f928392839283929116906388316456906126749088906004016132fa565b6080604051808303815f875af1158015612690573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906126b491906133be565b9350935093509350868210156126f3576126f36126d85f546001600160a01b031690565b6126e2848a6130d4565b6001600160a01b038c16919061223a565b8581101561272a5761272a61270f5f546001600160a01b031690565b61271983896130d4565b6001600160a01b038b16919061223a565b604080518581526001600160801b03851660208201527fc1a1ee9d31c39113d1073fa8118a8a09cd2e5777ef352c4bede40d05f9376236910160405180910390a150505050505050505050505050505050565b5f805f80866001600160a01b0316886001600160a01b0316036127e25760405162461bcd60e51b815260206004820152601860248201527f546f6b656e73206d75737420626520646966666572656e7400000000000000006044820152606401610254565b866001600160a01b0316886001600160a01b0316101561280c575086925085915084905083612818565b50859250869150839050845b945094509450949050565b5f8061283384606085901b61328d565b90505f603061284183612936565b901b925050505b92915050565b5f6128626001600160a01b03841683612a89565b905080515f141580156128865750808060200190518101906128849190613404565b155b156116b857604051635274afe760e01b81526001600160a01b0384166004820152602401610254565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301525f919085169063dd62ed3e90604401602060405180830381865afa1580156128fc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612920919061305e565b90506122d2848461293185856130c1565b612a9d565b5f60018211612943575090565b816001600160801b821061295c5760809190911c9060401b5b600160401b82106129725760409190911c9060201b5b64010000000082106129895760209190911c9060101b5b62010000821061299e5760109190911c9060081b5b61010082106129b25760089190911c9060041b5b601082106129c55760049190911c9060021b5b600482106129d15760011b5b600302600190811c908185816129e9576129e9613279565b048201901c90506001818581612a0157612a01613279565b048201901c90506001818581612a1957612a19613279565b048201901c90506001818581612a3157612a31613279565b048201901c90506001818581612a4957612a49613279565b048201901c90506001818581612a6157612a61613279565b048201901c9050612a80818581612a7a57612a7a613279565b04821190565b90039392505050565b6060612a9683835f612b2c565b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612aee8482612bcc565b6122d2576040516001600160a01b0384811660248301525f6044830152612b2291869182169063095ea7b390606401612267565b6122d2848261284e565b606081471015612b585760405163cf47918160e01b815247600482015260248101839052604401610254565b5f80856001600160a01b03168486604051612b739190613423565b5f6040518083038185875af1925050503d805f8114612bad576040519150601f19603f3d011682016040523d82523d5f602084013e612bb2565b606091505b5091509150612bc2868383612c6d565b9695505050505050565b5f805f846001600160a01b031684604051612be79190613423565b5f604051808303815f865af19150503d805f8114612c20576040519150601f19603f3d011682016040523d82523d5f602084013e612c25565b606091505b5091509150818015612c4f575080511580612c4f575080806020019051810190612c4f9190613404565b8015612c6457505f856001600160a01b03163b115b95945050505050565b606082612c8257612c7d82612cc9565b612a96565b8151158015612c9957506001600160a01b0384163b155b15612cc257604051639996b31560e01b81526001600160a01b0385166004820152602401610254565b5080612a96565b805115612cd95780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b5f5b83811015612d0c578181015183820152602001612cf4565b50505f910152565b5f8151808452612d2b816020860160208601612cf2565b601f01601f19169290920160200192915050565b606081525f612d516060830186612d14565b8281036020840152612d638186612d14565b90508281036040840152612bc28185612d14565b6001600160a01b0381168114611ac9575f80fd5b8035612d9681612d77565b919050565b5f60208284031215612dab575f80fd5b8135612a9681612d77565b8035600281900b8114612d96575f80fd5b5f805f60608486031215612dd9575f80fd5b83359250612de960208501612db6565b9150612df760408501612db6565b90509250925092565b634e487b7160e01b5f52602160045260245ffd5b6020810160048310612e3457634e487b7160e01b5f52602160045260245ffd5b91905290565b5f60208284031215612e4a575f80fd5b5035919050565b634e487b7160e01b5f52604160045260245ffd5b604051610160810167ffffffffffffffff81118282101715612e8957612e89612e51565b60405290565b5f82601f830112612e9e575f80fd5b813567ffffffffffffffff80821115612eb957612eb9612e51565b604051601f8301601f19908116603f01168101908282118183101715612ee157612ee1612e51565b81604052838152866020858801011115612ef9575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803562ffffff81168114612d96575f80fd5b5f60208284031215612f3a575f80fd5b813567ffffffffffffffff80821115612f51575f80fd5b908301906101608286031215612f65575f80fd5b612f6d612e65565b612f7683612d8b565b8152612f8460208401612d8b565b6020820152604083013582811115612f9a575f80fd5b612fa687828601612e8f565b604083015250606083013582811115612fbd575f80fd5b612fc987828601612e8f565b606083015250608083013582811115612fe0575f80fd5b612fec87828601612e8f565b608083015250612ffe60a08401612d8b565b60a082015260c083013560c082015260e083013560e08201526101009150613027828401612d8b565b82820152610120915061303b828401612d8b565b82820152610140915061304f828401612f18565b91810191909152949350505050565b5f6020828403121561306e575f80fd5b5051919050565b600181811c9082168061308957607f821691505b6020821081036130a757634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b80820180821115612848576128486130ad565b81810381811115612848576128486130ad565b60208082526021908201527f496e73756666696369656e742073616c6520746f6b656e20616c6c6f77616e636040820152606560f81b606082015260800190565b5f60018201613139576131396130ad565b5060010190565b601f8211156116b857805f5260205f20601f840160051c810160208510156131655750805b601f840160051c820191505b81811015613184575f8155600101613171565b5050505050565b815167ffffffffffffffff8111156131a5576131a5612e51565b6131b9816131b38454613075565b84613140565b602080601f8311600181146131ec575f84156131d55750858301515b5f19600386901b1c1916600185901b1785556120a4565b5f85815260208120601f198616915b8281101561321a578886015182559484019460019091019084016131fb565b508582101561323757878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b5f60208284031215613257575f80fd5b8151612a9681612d77565b8082028115828204841417612848576128486130ad565b634e487b7160e01b5f52601260045260245ffd5b5f826132a757634e487b7160e01b5f52601260045260245ffd5b500490565b6020808252602e908201527f4e6f7420656e6f7567682073616c6520746f6b656e7320746f2063726561746560408201526d103a34329039bbb0b8103830b4b960911b606082015260800190565b81516001600160a01b031681526101608101602083015161332660208401826001600160a01b03169052565b50604083015161333d604084018262ffffff169052565b506060830151613352606084018260020b9052565b506080830151613367608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516133ad828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f80608085870312156133d1575f80fd5b8451935060208501516001600160801b03811681146133ee575f80fd5b6040860151606090960151949790965092505050565b5f60208284031215613414575f80fd5b81518015158114612a96575f80fd5b5f8251613434818460208701612cf2565b919091019291505056fea2646970667358221220201eec003195f673100058dfe886c61ca48985a14aacb8ca582709e9ba090efa64736f6c63430008180033";
    const isSuperArgs$2 = (xs) => xs.length > 1;
    class Fundraiser__factory extends ethers.ContractFactory {
        constructor(...args) {
            if (isSuperArgs$2(args)) {
                super(...args);
            }
            else {
                super(_abi$5, _bytecode$2, args[0]);
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
        static abi = _abi$5;
        static createInterface() {
            return new ethers.Interface(_abi$5);
        }
        static connect(address, runner) {
            return new ethers.Contract(address, _abi$5, runner);
        }
    }

    const _abi$4 = [
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
        static abi = _abi$4;
        static createInterface() {
            return new ethers.Interface(_abi$4);
        }
        static connect(address, runner) {
            return new ethers.Contract(address, _abi$4, runner);
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
    const _bytecode$1 = "0x60a060405230608052348015610013575f80fd5b5060805161590161003a5f395f8181610b6c01528181610b960152610ce901526159015ff3fe608060405260043610620000f7575f3560e01c8063790a33081162000092578063ad3cb1cc116200005e578063ad3cb1cc14620002bf578063ec7270171462000300578063f2fde38b1462000324578063f38f72fb1462000348575f80fd5b8063790a330814620001ff5780638129fc1c14620002325780638da5cb5b1462000249578063a4bf1c061462000287575f80fd5b80634f1ef28611620000d25780634f1ef286146200019457806352d1902d14620001ad578063715018a614620001c457806375860d8414620001db575f80fd5b80631bea83fe14620000fb5780631d88c618146200014157806349ed2fa91462000167575b5f80fd5b34801562000107575f80fd5b506200012473c36442b4a4522e871399cd717abdd847ab11fe8881565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156200014d575f80fd5b506200015860035481565b60405190815260200162000138565b34801562000173575f80fd5b505f54620001819060ff1681565b60405160ff909116815260200162000138565b620001ab620001a53660046200114c565b62000380565b005b348015620001b9575f80fd5b5062000158620003a5565b348015620001d0575f80fd5b50620001ab620003c3565b348015620001e7575f80fd5b50620001ab620001f93660046200119f565b620003da565b3480156200020b575f80fd5b50620002236200021d366004620011ca565b6200047d565b60405162000138919062001203565b3480156200023e575f80fd5b50620001ab620006d0565b34801562000255575f80fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031662000124565b34801562000293575f80fd5b5062000124620002a536600462001267565b60016020525f90815260409020546001600160a01b031681565b348015620002cb575f80fd5b50620002f1604051806040016040528060058152602001640352e302e360dc1b81525081565b604051620001389190620012d4565b3480156200030c575f80fd5b50620001246200031e366004620012e8565b620007ef565b34801562000330575f80fd5b50620001ab620003423660046200119f565b62000b1e565b34801562000354575f80fd5b50620001246200036636600462001360565b60026020525f90815260409020546001600160a01b031681565b6200038a62000b61565b620003958262000c09565b620003a1828262000c13565b5050565b5f620003b062000cde565b505f80516020620058ac83398151915290565b620003cd62000d28565b620003d85f62000d86565b565b620003e462000d28565b5f805460ff908116825260016020526040822080546001600160a01b0319166001600160a01b03851617905581547f8828688671dea88c6fcbb6090c28ca07bbb6571f26da4ae4293428e3d1b3bff7929116908062000443836200138c565b91906101000a81548160ff021916908360ff16021790555060405162000472919060ff91909116815260200190565b60405180910390a150565b60608215806200048e575060035483115b156200049a5760035492505b5f845b848110156200056657836003811115620004bb57620004bb620013ad565b5f8281526002602090815260409182902054825163c19d93fb60e01b815292516001600160a01b039091169263c19d93fb9260048083019391928290030181865afa1580156200050d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620005339190620013c1565b6003811115620005475762000547620013ad565b036200055d57816200055981620013df565b9250505b6001016200049d565b508067ffffffffffffffff81111562000583576200058362001082565b604051908082528060200260200182016040528015620005ad578160200160208202803683370190505b5091505f855b85811015620006c657846003811115620005d157620005d1620013ad565b5f8281526002602090815260409182902054825163c19d93fb60e01b815292516001600160a01b039091169263c19d93fb9260048083019391928290030181865afa15801562000623573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620006499190620013c1565b60038111156200065d576200065d620013ad565b03620006bd575f818152600260205260409020546001600160a01b031684836200068781620013df565b9450815181106200069c576200069c620013fa565b60200260200101906001600160a01b031690816001600160a01b0316815250505b600101620005b3565b5050509392505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff165f81158015620007165750825b90505f8267ffffffffffffffff166001148015620007335750303b155b90508115801562000742575080155b15620007615760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156200078c57845460ff60401b1916600160401b1785555b620007973362000df6565b620007a162000e0b565b8315620007e857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050565b5f805f805f805f805f8b8060200190518101906200080e91906200147f565b5f54979f50959d50939b50919950975095509350915060ff908116908b1610620008775760405162461bcd60e51b8152602060048201526015602482015274496e76616c69642063616d706169676e207479706560581b60448201526064015b60405180910390fd5b5f33604051620008879062001051565b6001600160a01b039091168152602001604051809103905ff080158015620008b1573d5f803e3d5ffd5b5090505f60015f8d60ff1660ff1681526020019081526020015f205f9054906101000a90046001600160a01b03166001600160a01b03166349d7788d838f6040518363ffffffff1660e01b81526004016200090e92919062001555565b6020604051808303815f875af11580156200092b573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200095191906200157a565b90505f8415620009a05787836040516200096b906200105f565b6001600160a01b03928316815291166020820152604001604051809103905ff0801580156200099c573d5f803e3d5ffd5b5090505b60408051610160810182526001600160a01b03808b16825289811660208301528183018e9052606082018d9052608082018c905284811660a083015260c0820189905260e0820188905273c36442b4a4522e871399cd717abdd847ab11fe8861010083015283811661012083015262ffffff8716610140830152915163c80b7c1760e01b8152909185169063c80b7c179062000a4190849060040162001598565b5f604051808303815f87803b15801562000a59575f80fd5b505af115801562000a6c573d5f803e3d5ffd5b50505050336001600160a01b0316846001600160a01b03167f99f4022581144242c8bd92735e3d04f923f81530b285cb75aac4326a434b163260035460405162000ab891815260200190565b60405180910390a36003805485916002915f918262000ad783620013df565b90915550815260208101919091526040015f2080546001600160a01b0319166001600160a01b039290921691909117905550919a50505050505050505050505b9392505050565b62000b2862000d28565b6001600160a01b03811662000b5357604051631e4fbdf760e01b81525f60048201526024016200086e565b62000b5e8162000d86565b50565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148062000bea57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662000bde5f80516020620058ac833981519152546001600160a01b031690565b6001600160a01b031614155b15620003d85760405163703e46dd60e11b815260040160405180910390fd5b62000b5e62000d28565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801562000c70575060408051601f3d908101601f1916820190925262000c6d91810190620016b5565b60015b62000c9a57604051634c9c8ce360e01b81526001600160a01b03831660048201526024016200086e565b5f80516020620058ac833981519152811462000ccd57604051632a87526960e21b8152600481018290526024016200086e565b62000cd9838362000e15565b505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620003d85760405163703e46dd60e11b815260040160405180910390fd5b3362000d5b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614620003d85760405163118cdaa760e01b81523360048201526024016200086e565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a3505050565b62000e0062000e71565b62000b5e8162000ebb565b620003d862000e71565b62000e208262000ec5565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a280511562000e675762000cd9828262000f2b565b620003a162000fa3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff16620003d857604051631afcd79f60e31b815260040160405180910390fd5b62000b2862000e71565b806001600160a01b03163b5f0362000efc57604051634c9c8ce360e01b81526001600160a01b03821660048201526024016200086e565b5f80516020620058ac83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f80846001600160a01b03168460405162000f499190620016cd565b5f60405180830381855af49150503d805f811462000f83576040519150601f19603f3d011682016040523d82523d5f602084013e62000f88565b606091505b509150915062000f9a85838362000fc3565b95945050505050565b3415620003d85760405163b398979f60e01b815260040160405180910390fd5b60608262000fdc5762000fd68262001027565b62000b17565b815115801562000ff457506001600160a01b0384163b155b156200101f57604051639996b31560e01b81526001600160a01b03851660048201526024016200086e565b508062000b17565b805115620010385780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b6135e280620016eb83390190565b610bdf8062004ccd83390190565b6001600160a01b038116811462000b5e575f80fd5b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715620010c257620010c262001082565b604052919050565b5f67ffffffffffffffff821115620010e657620010e662001082565b50601f01601f191660200190565b5f82601f83011262001104575f80fd5b81356200111b6200111582620010ca565b62001096565b81815284602083860101111562001130575f80fd5b816020850160208301375f918101602001919091529392505050565b5f80604083850312156200115e575f80fd5b82356200116b816200106d565b9150602083013567ffffffffffffffff81111562001187575f80fd5b6200119585828601620010f4565b9150509250929050565b5f60208284031215620011b0575f80fd5b813562000b17816200106d565b6004811062000b5e575f80fd5b5f805f60608486031215620011dd575f80fd5b83359250602084013591506040840135620011f881620011bd565b809150509250925092565b602080825282518282018190525f9190848201906040850190845b81811015620012455783516001600160a01b0316835292840192918401916001016200121e565b50909695505050505050565b803560ff8116811462001262575f80fd5b919050565b5f6020828403121562001278575f80fd5b62000b178262001251565b5f5b838110156200129f57818101518382015260200162001285565b50505f910152565b5f8151808452620012c081602086016020860162001283565b601f01601f19169290920160200192915050565b602081525f62000b176020830184620012a7565b5f805f60608486031215620012fb575f80fd5b833567ffffffffffffffff8082111562001313575f80fd5b6200132187838801620010f4565b9450602086013591508082111562001337575f80fd5b506200134686828701620010f4565b925050620013576040850162001251565b90509250925092565b5f6020828403121562001371575f80fd5b5035919050565b634e487b7160e01b5f52601160045260245ffd5b5f60ff821660ff8103620013a457620013a462001378565b60010192915050565b634e487b7160e01b5f52602160045260245ffd5b5f60208284031215620013d2575f80fd5b815162000b1781620011bd565b5f60018201620013f357620013f362001378565b5060010190565b634e487b7160e01b5f52603260045260245ffd5b5f82601f8301126200141e575f80fd5b81516200142f6200111582620010ca565b81815284602083860101111562001444575f80fd5b6200145782602083016020870162001283565b949350505050565b805162001262816200106d565b805162ffffff8116811462001262575f80fd5b5f805f805f805f80610100898b03121562001498575f80fd5b885167ffffffffffffffff80821115620014b0575f80fd5b620014be8c838d016200140e565b995060208b0151915080821115620014d4575f80fd5b620014e28c838d016200140e565b985060408b0151915080821115620014f8575f80fd5b50620015078b828c016200140e565b9650506200151860608a016200145f565b94506200152860808a016200145f565b935060a0890151925060c089015191506200154660e08a016200146c565b90509295985092959890939650565b6001600160a01b03831681526040602082018190525f906200145790830184620012a7565b5f602082840312156200158b575f80fd5b815162000b17816200106d565b60208152620015b36020820183516001600160a01b03169052565b5f6020830151620015cf60408401826001600160a01b03169052565b506040830151610160806060850152620015ee610180850183620012a7565b91506060850151601f19808685030160808701526200160e8483620012a7565b935060808701519150808685030160a0870152506200162e8382620012a7565b92505060a08501516200164c60c08601826001600160a01b03169052565b5060c085015160e085015260e085015161010081818701528087015191505061012062001683818701836001600160a01b03169052565b8601519050610140620016a0868201836001600160a01b03169052565b9095015162ffffff1693019290925250919050565b5f60208284031215620016c6575f80fd5b5051919050565b5f8251620016e081846020870162001283565b919091019291505056fe60a060405273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260805234801562000028575f80fd5b50604051620035e2380380620035e28339810160408190526200004b91620000e0565b806001600160a01b0381166200007a57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b620000858162000091565b5050600180556200010f565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f60208284031215620000f1575f80fd5b81516001600160a01b038116811462000108575f80fd5b9392505050565b6080516134746200016e5f395f81816101eb015281816104ea01528181610dea01528181610e2901528181610eb30152818161117c015281816111c30152818161137b0152818161140401528181611736015261182d01526134745ff3fe6080604052600436106101db575f3560e01c80638da5cb5b11610101578063c80b7c1711610094578063e77d1a1f11610063578063e77d1a1f14610613578063e985e36714610628578063f2fde38b14610647578063fa1a5f59146106665761025f565b8063c80b7c171461056d578063c884ef831461058c578063dd60c898146105ca578063df7dbd79146105df5761025f565b8063bbd27260116100d0578063bbd272601461050c578063c19d93fb1461051f578063c1cbbca714610545578063c59ee1dc146105585761025f565b80638da5cb5b146104945780639b13e8e9146104b0578063ac307773146104c5578063ad5c4648146104d95761025f565b806344c63eec116101795780634da60aa5116101485780634da60aa514610423578063715018a614610442578063791b98bc14610456578063811e539c146104755761025f565b806344c63eec146103b157806348c54b9d146103d05780634bae6f3f146103e45780634bb278f31461040f5761025f565b80631514617e116101b55780631514617e1461031757806316f0115b1461032c578063370158ea1461036357806342e94c90146103865761025f565b8063089fe6aa146102a757806310309781146102e0578063146901db146103035761025f565b3661025f57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461025d5760405162461bcd60e51b815260206004820152601f60248201527f44697265637420455448206465706f73697473206e6f7420616c6c6f7765640060448201526064015b60405180910390fd5b005b60405162461bcd60e51b815260206004820152601b60248201527f46616c6c6261636b2066756e6374696f6e2074726967676572656400000000006044820152606401610254565b3480156102b2575f80fd5b506015546102c790610100900462ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b3480156102eb575f80fd5b506102f5600b5481565b6040519081526020016102d7565b34801561030e575f80fd5b5061025d61067b565b348015610322575f80fd5b506102f560065481565b348015610337575f80fd5b5060115461034b906001600160a01b031681565b6040516001600160a01b0390911681526020016102d7565b34801561036e575f80fd5b50610377610820565b6040516102d793929190612d3f565b348015610391575f80fd5b506102f56103a0366004612d9b565b60126020525f908152604090205481565b3480156103bc575f80fd5b50600f5461034b906001600160a01b031681565b3480156103db575f80fd5b5061025d6109c8565b3480156103ef575f80fd5b506102f56103fe366004612d9b565b60136020525f908152604090205481565b34801561041a575f80fd5b5061025d610b9f565b34801561042e575f80fd5b50600d5461034b906001600160a01b031681565b34801561044d575f80fd5b5061025d611092565b348015610461575f80fd5b5060105461034b906001600160a01b031681565b348015610480575f80fd5b50600e5461034b906001600160a01b031681565b34801561049f575f80fd5b505f546001600160a01b031661034b565b3480156104bb575f80fd5b506102f5600a5481565b3480156104d0575f80fd5b5061025d6110a3565b3480156104e4575f80fd5b5061034b7f000000000000000000000000000000000000000000000000000000000000000081565b61025d61051a366004612dc7565b6112a1565b34801561052a575f80fd5b506015546105389060ff1681565b6040516102d79190612e14565b61025d610553366004612e3a565b6116bd565b348015610563575f80fd5b506102f560075481565b348015610578575f80fd5b5061025d610587366004612f2a565b611acc565b348015610597575f80fd5b506105ba6105a6366004612d9b565b60146020525f908152604090205460ff1681565b60405190151581526020016102d7565b3480156105d5575f80fd5b506102f560095481565b3480156105ea575f80fd5b506105fe6105f9366004612e3a565b6120ac565b604080519283526020830191909152016102d7565b34801561061e575f80fd5b506102f560055481565b348015610633575f80fd5b50600c5461034b906001600160a01b031681565b348015610652575f80fd5b5061025d610661366004612d9b565b6121aa565b348015610671575f80fd5b506102f560085481565b6106836121e4565b61068b612210565b5f60155460ff1660038111156106a3576106a3612e00565b146106e95760405162461bcd60e51b815260206004820152601660248201527546756e6472616973696e67206e6f742061637469766560501b6044820152606401610254565b600e5f9054906101000a90046001600160a01b03166001600160a01b031663a8d31c786040518163ffffffff1660e01b81526004015f604051808303815f87803b158015610735575f80fd5b505af1158015610747573d5f803e3d5ffd5b50506015805460ff191660021790555050600c546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa15801561079e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107c2919061305e565b6040519091507f625a40e68d9554793bf647bf32e4885e7f15bd1bfac262906cc7d26f376f20a2905f90a16108146108015f546001600160a01b031690565b600c546001600160a01b0316908361223a565b5061081e60018055565b565b60028054819061082f90613075565b80601f016020809104026020016040519081016040528092919081815260200182805461085b90613075565b80156108a65780601f1061087d576101008083540402835291602001916108a6565b820191905f5260205f20905b81548152906001019060200180831161088957829003601f168201915b5050505050908060010180546108bb90613075565b80601f01602080910402602001604051908101604052809291908181526020018280546108e790613075565b80156109325780601f1061090957610100808354040283529160200191610932565b820191905f5260205f20905b81548152906001019060200180831161091557829003601f168201915b50505050509080600201805461094790613075565b80601f016020809104026020016040519081016040528092919081815260200182805461097390613075565b80156109be5780601f10610995576101008083540402835291602001916109be565b820191905f5260205f20905b8154815290600101906020018083116109a157829003601f168201915b5050505050905083565b6109d0612210565b600360155460ff1660038111156109e9576109e9612e00565b14610a2e5760405162461bcd60e51b815260206004820152601560248201527414ddd85c081c185a5c881b9bdd0818dc99585d1959605a1b6044820152606401610254565b335f9081526014602052604090205460ff1615610a865760405162461bcd60e51b8152602060048201526016602482015275151bdad95b9cc8185b1c9958591e4818db185a5b595960521b6044820152606401610254565b335f908152601460209081526040808320805460ff19166001179055601390915290205460065415610b4957600f54600554600a546001600160a01b03909216916324ef8c1b913391610ad991906130c1565b6006546040516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091526044820152606481018490526084015f604051808303815f87803b158015610b2e575f80fd5b505af1158015610b40573d5f803e3d5ffd5b50505050610b60565b600c54610b60906001600160a01b0316338361223a565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a25061081e60018055565b610ba76121e4565b610baf612210565b5f60155460ff166003811115610bc757610bc7612e00565b14610c0d5760405162461bcd60e51b815260206004820152601660248201527546756e6472616973696e67206e6f742061637469766560501b6044820152606401610254565b6015805460ff19166001179055600e546040805163d54dff2d60e01b815290516001600160a01b039092169163d54dff2d916004808201925f9290919082900301818387803b158015610c5e575f80fd5b505af1158015610c70573d5f803e3d5ffd5b5050600c546040516370a0823160e01b81523060048201525f93506001600160a01b0390911691506370a0823190602401602060405180830381865afa158015610cbc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ce0919061305e565b9050600854811015610ddd5780600854610cfa91906130d4565b600c546001600160a01b031663dd62ed3e610d1c5f546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604401602060405180830381865afa158015610d64573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d88919061305e565b1015610da65760405162461bcd60e51b8152600401610254906130e7565b610ddd610dba5f546001600160a01b031690565b3083600854610dc991906130d4565b600c546001600160a01b0316929190612299565b600d546001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911603610f5f576040516370a0823160e01b81523060048201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610e76573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e9a919061305e565b604051632e1a7d4d60e01b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b158015610efc575f80fd5b505af1158015610f0e573d5f803e3d5ffd5b50505050610f235f546001600160a01b031690565b6001600160a01b03166108fc8290811502906040515f60405180830381858888f19350505050158015610f58573d5f803e3d5ffd5b5050610f89565b610f89610f735f546001600160a01b031690565b600754600d546001600160a01b0316919061223a565b60065415610fb257600f54600854600c54610fb2926001600160a01b039182169291169061223a565b600c546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610ff8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061101c919061305e565b905060085481111561105c5761105c61103c5f546001600160a01b031690565b60085461104990846130d4565b600c546001600160a01b0316919061223a565b42600a556040517f6823b073d48d6e3a7d385eeb601452d680e74bb46afe3255a7d778f3a9b17681905f90a15061081e60018055565b61109a6121e4565b61081e5f6122d8565b600260155460ff1660038111156110bc576110bc612e00565b146110fc5760405162461bcd60e51b815260206004820152601060248201526f14985a5cd9481b9bdd0819985a5b195960821b6044820152606401610254565b335f9081526014602052604090205460ff16156111535760405162461bcd60e51b8152602060048201526015602482015274119d5b991cc8185b1c9958591e4818db185a5b5959605a1b6044820152606401610254565b335f908152601460209081526040808320805460ff191660011790556012909152902054600d547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691160361125257604051632e1a7d4d60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b15801561120c575f80fd5b505af115801561121e573d5f803e3d5ffd5b505060405133925083156108fc02915083905f818181858888f1935050505015801561124c573d5f803e3d5ffd5b50611269565b600d54611269906001600160a01b0316338361223a565b60405181815233907fa65a8b4f7f65a1063243d7f7e9e4da00ff767599acf21549ef2548a45d1695ae9060200160405180910390a250565b6112a96121e4565b6112b1612210565b600160155460ff1660038111156112ca576112ca612e00565b146113135760405162461bcd60e51b8152602060048201526019602482015278119d5b991c985a5cda5b99c81b9bdd08199a5b985b1a5e9959603a1b6044820152606401610254565b5f831161136e5760405162461bcd60e51b815260206004820152602360248201527f4c6971756964697479206d7573742062652067726561746572207468616e207a60448201526265726f60e81b6064820152608401610254565b600d546001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911603611477578234146114025760405162461bcd60e51b815260206004820152602760248201527f474c5120616d6f756e74206d757374206d617463682064657369726564206c696044820152667175696469747960c81b6064820152608401610254565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0846040518263ffffffff1660e01b81526004015f604051808303818588803b15801561145b575f80fd5b505af115801561146d573d5f803e3d5ffd5b5050505050611588565b600d5483906001600160a01b031663dd62ed3e61149b5f546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604401602060405180830381865afa1580156114e3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611507919061305e565b10156115605760405162461bcd60e51b815260206004820152602260248201527f496e73756666696369656e7420726169736520746f6b656e20616c6c6f77616e604482015261636560f01b6064820152608401610254565b6115886115745f546001600160a01b031690565b600d546001600160a01b0316903086612299565b5f611592846120ac565b50600c549091506001600160a01b031663dd62ed3e6115b85f546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604401602060405180830381865afa158015611600573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611624919061305e565b8111156116435760405162461bcd60e51b8152600401610254906130e7565b61166b6116575f546001600160a01b031690565b600c546001600160a01b0316903084612299565b60408051858152602081018390527f8f36792923c93a2199809caa740620cdf19b08798f00eeab5a4827142331dfd2910160405180910390a16116ae8383612327565b506116b860018055565b505050565b6116c5612210565b5f60155460ff1660038111156116dd576116dd612e00565b1461172a5760405162461bcd60e51b815260206004820152601960248201527f46756e6472616973696e67206973206e6f7420616374697665000000000000006044820152606401610254565b8034156118a057600d547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081169116146117c95760405162461bcd60e51b815260206004820152603160248201527f474c572063616e206f6e6c79206265207573656420776974682057474c57206160448201527039903a3432903930b4b9b2903a37b5b2b760791b6064820152608401610254565b81156118285760405162461bcd60e51b815260206004820152602860248201527f43616e6e6f74207370656369667920626f74682045544820616e6420746f6b656044820152671b88185b5bdd5b9d60c21b6064820152608401610254565b3490507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004015f604051808303818588803b158015611884575f80fd5b505af1158015611896573d5f803e3d5ffd5b5050505050611975565b600d54604051636eb1769f60e11b81523360048201523060248201525f916001600160a01b03169063dd62ed3e90604401602060405180830381865afa1580156118ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611910919061305e565b90508281101561195b5760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e7420616c6c6f77616e636560501b6044820152606401610254565b600d54611973906001600160a01b0316333086612299565b505b600e5460405163060b0b0f60e41b8152600481018390523360248201525f916001600160a01b0316906360b0b0f0906044016020604051808303815f875af11580156119c3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119e7919061305e565b335f9081526012602052604081205491925003611a135760098054905f611a0d83613128565b91905055505b335f9081526012602052604081208054849290611a319084906130c1565b9091555050335f9081526013602052604081208054839290611a549084906130c1565b925050819055508160075f828254611a6c91906130c1565b925050819055508060085f828254611a8491906130c1565b909155505060405182815233907f4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b9060200160405180910390a25050611ac960018055565b50565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff165f81158015611b115750825b90505f8267ffffffffffffffff166001148015611b2d5750303b155b905081158015611b3b575080155b15611b595760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315611b8357845460ff60401b1916600160401b1785555b85516001600160a01b0316611be45760405162461bcd60e51b815260206004820152602160248201527f53616c6520746f6b656e20616464726573732063616e6e6f74206265207a65726044820152606f60f81b6064820152608401610254565b60208601516001600160a01b0316611c495760405162461bcd60e51b815260206004820152602260248201527f526169736520746f6b656e20616464726573732063616e6e6f74206265207a65604482015261726f60f01b6064820152608401610254565b6101008601516001600160a01b0316611cb45760405162461bcd60e51b815260206004820152602760248201527f506f736974696f6e206d616e6167657220616464726573732063616e6e6f74206044820152666265207a65726f60c81b6064820152608401610254565b60a08601516001600160a01b0316611d0e5760405162461bcd60e51b815260206004820152601f60248201527f43616d706169676e20616464726573732063616e6e6f74206265207a65726f006044820152606401610254565b60e08601511580611d2c57506101208601516001600160a01b031615155b611d955760405162461bcd60e51b815260206004820152603460248201527f56657374696e6720616464726573732063616e6e6f74206265207a65726f206960448201527319881d995cdd1a5b99c81a5cc8195b98589b195960621b6064820152608401610254565b85610140015162ffffff166127101480611dba575085610140015162ffffff16610bb8145b80611dd0575085610140015162ffffff166101f4145b611e0f5760405162461bcd60e51b815260206004820152601060248201526f496e76616c696420706f6f6c2066656560801b6044820152606401610254565b8551600c80546001600160a01b03199081166001600160a01b0393841617909155602080890151600d805490931693169290921790556040805160608082018352828a0151808352908a015193820193909352608089015191810191909152906002908190611e7e908261318b565b5060208201516001820190611e93908261318b565b5060408201516002820190611ea8908261318b565b50505060a0860151600e80546001600160a01b03199081166001600160a01b03938416179091556101008089015160108054841691851691909117905560e089015160065560c0890151600555610120890151600f805490931693169290921790556015805461014089015163ffffffff1990911662ffffff90911690920291909117905542600b555f611f44683635c9adc5dea000006120ac565b50600c54600d549192505f91829182918291611f77916001600160a01b03918216911687683635c9adc5dea0000061277d565b60105460155494985092965090945092506001600160a01b0316906313ead5629086908690610100900462ffffff16611fb08787612823565b6040516001600160e01b031960e087901b1681526001600160a01b039485166004820152928416602484015262ffffff90911660448301529190911660648201526084016020604051808303815f875af1158015612010573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120349190613247565b60115f6101000a8154816001600160a01b0302191690836001600160a01b03160217905550505050505083156120a457845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b5f805f600e5f9054906101000a90046001600160a01b03166001600160a01b0316637b1b1de66040518163ffffffff1660e01b8152600401602060405180830381865afa1580156120ff573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612123919061305e565b90505f81116121865760405162461bcd60e51b815260206004820152602960248201527f50726963652070657220746f6b656e206d7573742062652067726561746572206044820152687468616e207a65726f60b81b6064820152608401610254565b8061219985670de0b6b3a7640000613262565b6121a3919061328d565b9492505050565b6121b26121e4565b6001600160a01b0381166121db57604051631e4fbdf760e01b81525f6004820152602401610254565b611ac9816122d8565b5f546001600160a01b0316331461081e5760405163118cdaa760e01b8152336004820152602401610254565b60026001540361223357604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b6040516001600160a01b038381166024830152604482018390526116b891859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061284e565b6040516001600160a01b0384811660248301528381166044830152606482018390526122d29186918216906323b872dd90608401612267565b50505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600160155460ff16600381111561234057612340612e00565b146123895760405162461bcd60e51b8152602060048201526019602482015278119d5b991c985a5cda5b99c81b9bdd08199a5b985b1a5e9959603a1b6044820152606401610254565b6015805460ff19166003179055600c546040516370a0823160e01b81523060048201525f916001600160a01b0316906370a0823190602401602060405180830381865afa1580156123dc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612400919061305e565b600d546040516370a0823160e01b81523060048201529192505f916001600160a01b03909116906370a0823190602401602060405180830381865afa15801561244b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061246f919061305e565b60065490915082905f036124ae57600854831161249e5760405162461bcd60e51b8152600401610254906132ac565b6008546124ab90846130d4565b90505b5f806124b9846120ac565b91509150828211156124dd5760405162461bcd60e51b8152600401610254906132ac565b838111156125455760405162461bcd60e51b815260206004820152602f60248201527f4e6f7420656e6f75676820726169736520746f6b656e7320746f20637265617460448201526e32903a34329039bbb0b8103830b4b960891b6064820152608401610254565b600c54600d545f9182918291829161256b916001600160a01b039081169116888861277d565b6010549397509195509350915061258f906001600160a01b038087169116846128af565b6010546125a9906001600160a01b038581169116836128af565b5f604051806101600160405280866001600160a01b03168152602001856001600160a01b03168152602001601560019054906101000a900462ffffff1662ffffff1681526020018d60020b81526020018c60020b81526020018481526020018381526020015f81526020015f815260200161262b5f546001600160a01b031690565b6001600160a01b03908116825242602090920191909152601054604051634418b22b60e11b81529293505f928392839283929116906388316456906126749088906004016132fa565b6080604051808303815f875af1158015612690573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906126b491906133be565b9350935093509350868210156126f3576126f36126d85f546001600160a01b031690565b6126e2848a6130d4565b6001600160a01b038c16919061223a565b8581101561272a5761272a61270f5f546001600160a01b031690565b61271983896130d4565b6001600160a01b038b16919061223a565b604080518581526001600160801b03851660208201527fc1a1ee9d31c39113d1073fa8118a8a09cd2e5777ef352c4bede40d05f9376236910160405180910390a150505050505050505050505050505050565b5f805f80866001600160a01b0316886001600160a01b0316036127e25760405162461bcd60e51b815260206004820152601860248201527f546f6b656e73206d75737420626520646966666572656e7400000000000000006044820152606401610254565b866001600160a01b0316886001600160a01b0316101561280c575086925085915084905083612818565b50859250869150839050845b945094509450949050565b5f8061283384606085901b61328d565b90505f603061284183612936565b901b925050505b92915050565b5f6128626001600160a01b03841683612a89565b905080515f141580156128865750808060200190518101906128849190613404565b155b156116b857604051635274afe760e01b81526001600160a01b0384166004820152602401610254565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301525f919085169063dd62ed3e90604401602060405180830381865afa1580156128fc573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612920919061305e565b90506122d2848461293185856130c1565b612a9d565b5f60018211612943575090565b816001600160801b821061295c5760809190911c9060401b5b600160401b82106129725760409190911c9060201b5b64010000000082106129895760209190911c9060101b5b62010000821061299e5760109190911c9060081b5b61010082106129b25760089190911c9060041b5b601082106129c55760049190911c9060021b5b600482106129d15760011b5b600302600190811c908185816129e9576129e9613279565b048201901c90506001818581612a0157612a01613279565b048201901c90506001818581612a1957612a19613279565b048201901c90506001818581612a3157612a31613279565b048201901c90506001818581612a4957612a49613279565b048201901c90506001818581612a6157612a61613279565b048201901c9050612a80818581612a7a57612a7a613279565b04821190565b90039392505050565b6060612a9683835f612b2c565b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612aee8482612bcc565b6122d2576040516001600160a01b0384811660248301525f6044830152612b2291869182169063095ea7b390606401612267565b6122d2848261284e565b606081471015612b585760405163cf47918160e01b815247600482015260248101839052604401610254565b5f80856001600160a01b03168486604051612b739190613423565b5f6040518083038185875af1925050503d805f8114612bad576040519150601f19603f3d011682016040523d82523d5f602084013e612bb2565b606091505b5091509150612bc2868383612c6d565b9695505050505050565b5f805f846001600160a01b031684604051612be79190613423565b5f604051808303815f865af19150503d805f8114612c20576040519150601f19603f3d011682016040523d82523d5f602084013e612c25565b606091505b5091509150818015612c4f575080511580612c4f575080806020019051810190612c4f9190613404565b8015612c6457505f856001600160a01b03163b115b95945050505050565b606082612c8257612c7d82612cc9565b612a96565b8151158015612c9957506001600160a01b0384163b155b15612cc257604051639996b31560e01b81526001600160a01b0385166004820152602401610254565b5080612a96565b805115612cd95780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b5f5b83811015612d0c578181015183820152602001612cf4565b50505f910152565b5f8151808452612d2b816020860160208601612cf2565b601f01601f19169290920160200192915050565b606081525f612d516060830186612d14565b8281036020840152612d638186612d14565b90508281036040840152612bc28185612d14565b6001600160a01b0381168114611ac9575f80fd5b8035612d9681612d77565b919050565b5f60208284031215612dab575f80fd5b8135612a9681612d77565b8035600281900b8114612d96575f80fd5b5f805f60608486031215612dd9575f80fd5b83359250612de960208501612db6565b9150612df760408501612db6565b90509250925092565b634e487b7160e01b5f52602160045260245ffd5b6020810160048310612e3457634e487b7160e01b5f52602160045260245ffd5b91905290565b5f60208284031215612e4a575f80fd5b5035919050565b634e487b7160e01b5f52604160045260245ffd5b604051610160810167ffffffffffffffff81118282101715612e8957612e89612e51565b60405290565b5f82601f830112612e9e575f80fd5b813567ffffffffffffffff80821115612eb957612eb9612e51565b604051601f8301601f19908116603f01168101908282118183101715612ee157612ee1612e51565b81604052838152866020858801011115612ef9575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803562ffffff81168114612d96575f80fd5b5f60208284031215612f3a575f80fd5b813567ffffffffffffffff80821115612f51575f80fd5b908301906101608286031215612f65575f80fd5b612f6d612e65565b612f7683612d8b565b8152612f8460208401612d8b565b6020820152604083013582811115612f9a575f80fd5b612fa687828601612e8f565b604083015250606083013582811115612fbd575f80fd5b612fc987828601612e8f565b606083015250608083013582811115612fe0575f80fd5b612fec87828601612e8f565b608083015250612ffe60a08401612d8b565b60a082015260c083013560c082015260e083013560e08201526101009150613027828401612d8b565b82820152610120915061303b828401612d8b565b82820152610140915061304f828401612f18565b91810191909152949350505050565b5f6020828403121561306e575f80fd5b5051919050565b600181811c9082168061308957607f821691505b6020821081036130a757634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b80820180821115612848576128486130ad565b81810381811115612848576128486130ad565b60208082526021908201527f496e73756666696369656e742073616c6520746f6b656e20616c6c6f77616e636040820152606560f81b606082015260800190565b5f60018201613139576131396130ad565b5060010190565b601f8211156116b857805f5260205f20601f840160051c810160208510156131655750805b601f840160051c820191505b81811015613184575f8155600101613171565b5050505050565b815167ffffffffffffffff8111156131a5576131a5612e51565b6131b9816131b38454613075565b84613140565b602080601f8311600181146131ec575f84156131d55750858301515b5f19600386901b1c1916600185901b1785556120a4565b5f85815260208120601f198616915b8281101561321a578886015182559484019460019091019084016131fb565b508582101561323757878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b5f60208284031215613257575f80fd5b8151612a9681612d77565b8082028115828204841417612848576128486130ad565b634e487b7160e01b5f52601260045260245ffd5b5f826132a757634e487b7160e01b5f52601260045260245ffd5b500490565b6020808252602e908201527f4e6f7420656e6f7567682073616c6520746f6b656e7320746f2063726561746560408201526d103a34329039bbb0b8103830b4b960911b606082015260800190565b81516001600160a01b031681526101608101602083015161332660208401826001600160a01b03169052565b50604083015161333d604084018262ffffff169052565b506060830151613352606084018260020b9052565b506080830151613367608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516133ad828501826001600160a01b03169052565b505061014092830151919092015290565b5f805f80608085870312156133d1575f80fd5b8451935060208501516001600160801b03811681146133ee575f80fd5b6040860151606090960151949790965092505050565b5f60208284031215613414575f80fd5b81518015158114612a96575f80fd5b5f8251613434818460208701612cf2565b919091019291505056fea2646970667358221220201eec003195f673100058dfe886c61ca48985a14aacb8ca582709e9ba090efa64736f6c6343000818003360a060405234801561000f575f80fd5b50604051610bdf380380610bdf83398101604081905261002e9161013f565b60015f55806001600160a01b03811661006157604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b61006a816100d3565b506001600160a01b0382166100c15760405162461bcd60e51b815260206004820152601c60248201527f546f6b656e20616464726573732063616e6e6f74206265207a65726f000000006044820152606401610058565b506001600160a01b0316608052610170565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b80516001600160a01b038116811461013a575f80fd5b919050565b5f8060408385031215610150575f80fd5b61015983610124565b915061016760208401610124565b90509250929050565b608051610a5161018e5f395f818160d101526105a90152610a515ff3fe608060405234801561000f575f80fd5b5060043610610085575f3560e01c80638da5cb5b116100585780638da5cb5b1461010b578063ec0904f71461011c578063f2fde38b1461012f578063fdb20ccb14610142575f80fd5b80631726cbc81461008957806324ef8c1b146100af578063715018a6146100c457806382bfefc8146100cc575b5f80fd5b61009c610097366004610911565b610198565b6040519081526020015b60405180910390f35b6100c26100bd36600461092a565b61021d565b005b6100c2610448565b6100f37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100a6565b6001546001600160a01b03166100f3565b6100c261012a366004610911565b61045b565b6100c261013d366004610911565b610621565b610178610150366004610911565b600260208190525f918252604090912080546001820154928201546003909201549092919084565b6040805194855260208501939093529183015260608201526080016100a6565b6001600160a01b0381165f90815260026020526040812080544210156101c057505f92915050565b80545f906101ce9042610974565b90505f82600101548284600201546101e69190610987565b6101f0919061099e565b90508260020154811115610205575060028201545b60038301546102149082610974565b95945050505050565b61022561065b565b6001600160a01b03841661028f5760405162461bcd60e51b815260206004820152602660248201527f42656e65666963696172792063616e6e6f7420626520746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b5f81116102de5760405162461bcd60e51b815260206004820152601f60248201527f56657374696e6720616d6f756e74206d75737420626520706f736974697665006044820152606401610286565b5f82116103375760405162461bcd60e51b815260206004820152602160248201527f56657374696e67206475726174696f6e206d75737420626520706f73697469766044820152606560f81b6064820152608401610286565b6001600160a01b0384165f90815260026020526040902054156103ad5760405162461bcd60e51b815260206004820152602860248201527f56657374696e6720616c72656164792073657420666f7220746869732062656e604482015267656669636961727960c01b6064820152608401610286565b6040805160808101825284815260208082018581528284018581525f60608086018281526001600160a01b038c168084526002808852938990209751885594516001880155925191860191909155905160039094019390935583518581529182018790529281018590527fa95063d8afe9473976f0965d552dce67e1b02d154b4fb06ff7e518f8648e93c7910160405180910390a250505050565b61045061065b565b6104595f610688565b565b6104636106d9565b6001600160a01b0381165f90815260026020526040812080549091036104d75760405162461bcd60e51b8152602060048201526024808201527f56657374696e67206e6f742073657420666f7220746869732062656e656669636044820152636961727960e01b6064820152608401610286565b80544210156105285760405162461bcd60e51b815260206004820152601b60248201527f56657374696e6720686173206e6f7420737461727465642079657400000000006044820152606401610286565b5f61053283610198565b90505f81116105835760405162461bcd60e51b815260206004820152601d60248201527f4e6f20746f6b656e73206172652064756520666f722072656c656173650000006044820152606401610286565b80826003015f82825461059691906109bd565b909155506105d090506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483610701565b826001600160a01b03167fc7798891864187665ac6dd119286e44ec13f014527aeeb2b8eb3fd413df931798260405161060b91815260200190565b60405180910390a2505061061e60015f55565b50565b61062961065b565b6001600160a01b03811661065257604051631e4fbdf760e01b81525f6004820152602401610286565b61061e81610688565b6001546001600160a01b031633146104595760405163118cdaa760e01b8152336004820152602401610286565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b60025f54036106fb57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610753908490610758565b505050565b5f61076c6001600160a01b038416836107b9565b905080515f1415801561079057508080602001905181019061078e91906109d0565b155b1561075357604051635274afe760e01b81526001600160a01b0384166004820152602401610286565b60606107c683835f6107cf565b90505b92915050565b6060814710156107fb5760405163cf47918160e01b815247600482015260248101839052604401610286565b5f80856001600160a01b0316848660405161081691906109ef565b5f6040518083038185875af1925050503d805f8114610850576040519150601f19603f3d011682016040523d82523d5f602084013e610855565b606091505b5091509150610865868383610871565b925050505b9392505050565b60608261088657610881826108cd565b61086a565b815115801561089d57506001600160a01b0384163b155b156108c657604051639996b31560e01b81526001600160a01b0385166004820152602401610286565b508061086a565b8051156108dd5780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b80356001600160a01b038116811461090c575f80fd5b919050565b5f60208284031215610921575f80fd5b6107c6826108f6565b5f805f806080858703121561093d575f80fd5b610946856108f6565b966020860135965060408601359560600135945092505050565b634e487b7160e01b5f52601160045260245ffd5b818103818111156107c9576107c9610960565b80820281158282048414176107c9576107c9610960565b5f826109b857634e487b7160e01b5f52601260045260245ffd5b500490565b808201808211156107c9576107c9610960565b5f602082840312156109e0575f80fd5b8151801515811461086a575f80fd5b5f82515f5b81811015610a0e57602081860181015185830152016109f4565b505f92019182525091905056fea2646970667358221220e91dccb1c8fc611428389f6d0a0fbd43f5f9407a494737d5d3b3c7477930061a64736f6c63430008180033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca26469706673582212209da2ef6bd9607994cf5954bc804607c1cc218400da391930a887f1c6951c06a164736f6c63430008180033";
    const isSuperArgs$1 = (xs) => xs.length > 1;
    class FundraiserFactory__factory extends ethers.ContractFactory {
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
            return new ethers.Interface(_abi$3);
        }
        static connect(address, runner) {
            return new ethers.Contract(address, _abi$3, runner);
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
            return new ethers.Interface(_abi$2);
        }
        static connect(address, runner) {
            return new ethers.Contract(address, _abi$2, runner);
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
            return new ethers.Interface(_abi$1);
        }
        static connect(address, runner) {
            return new ethers.Contract(address, _abi$1, runner);
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
    class MockERC20__factory extends ethers.ContractFactory {
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
            return new ethers.Interface(_abi);
        }
        static connect(address, runner) {
            return new ethers.Contract(address, _abi, runner);
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
            this.provider = new ethers.JsonRpcProvider(url);
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
                        const decodedReason = ethers.ethers.AbiCoder.defaultAbiCoder().decode(["string"], error.data)[0];
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
                const tx = await this.fundraiserFactory.connect(signer).createFundraiser(ethers.ethers.AbiCoder.defaultAbiCoder().encode(["string", "string", "string", "address", "address", "uint256", "uint256", "uint24"], [
                    params.projectName,
                    params.description,
                    params.websiteLink,
                    params.saleToken,
                    params.raiseToken,
                    params.vestingStartDelta,
                    params.vestingDuration,
                    params.poolFee,
                ]), ethers.ethers.AbiCoder.defaultAbiCoder().encode(["uint256", "uint256"], [campaignParams.maxCap, campaignParams.pricePerToken]), 0);
                return await this.addTx(tx);
            });
        }
        async createFundraiserFairLaunch(signer, params, campaignParams) {
            return this.safeExecute(async () => {
                const tx = await this.fundraiserFactory.connect(signer).createFundraiser(ethers.ethers.AbiCoder.defaultAbiCoder().encode(["string", "string", "string", "address", "address", "uint256", "uint256", "uint24"], [
                    params.projectName,
                    params.description,
                    params.websiteLink,
                    params.saleToken,
                    params.raiseToken,
                    params.vestingStartDelta,
                    params.vestingDuration,
                    params.poolFee,
                ]), ethers.ethers.AbiCoder.defaultAbiCoder().encode(["uint256", "uint256", "uint256"], [campaignParams.endTime, campaignParams.minimumGoal, campaignParams.pricePerToken]), 1);
                return await this.addTx(tx);
            });
        }
        async approveERC20(signer, tokenAddr, spenderAddr, amount) {
            return this.safeExecute(async () => {
                const tokenContract = new ethers.ethers.Contract(tokenAddr, [
                    "function approve(address spender, uint256 amount) public returns (bool)"
                ], signer);
                const tx = await tokenContract.approve(spenderAddr, amount);
                return await this.addTx(tx);
            });
        }
        async transferERC20(signer, tokenAddr, recipientAddr, amount) {
            return this.safeExecute(async () => {
                const tokenContract = new ethers.ethers.Contract(tokenAddr, [
                    "function transfer(address recipient, uint256 amount) public returns (bool)"
                ], signer);
                const tx = await tokenContract.transfer(recipientAddr, amount);
                return await this.addTx(tx);
            });
        }
        async checkAllowance(signer, tokenAddr, spenderAddr) {
            return this.safeExecute(async () => {
                const tokenContract = new ethers.ethers.Contract(tokenAddr, [
                    "function allowance(address owner, address spender) public view returns (uint256)"
                ], signer);
                const allowance = await tokenContract.allowance(signer.getAddress(), spenderAddr);
                return allowance;
            });
        }
        async contribute(signer, fundraiserAddr, amount) {
            return this.safeExecute(async () => {
                const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
                const raiseToken = await fundraiser.raiseToken();
                const weth = await fundraiser.WETH();
                if (raiseToken === weth) {
                    const tx = await fundraiser.contribute(0, { value: amount });
                    return await this.addTx(tx);
                }
                else {
                    const tx = await fundraiser.contribute(amount);
                    return await this.addTx(tx);
                }
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
        async initSwapPair(signer, fundraiserAddr, tickLower, tickUpper, desiredRaiseTokenLiquidity) {
            return this.safeExecute(async () => {
                const fundraiser = Fundraiser__factory.connect(fundraiserAddr, signer);
                const tx = await fundraiser.provideLiquidity(desiredRaiseTokenLiquidity, tickLower, tickUpper);
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
                let poolAddr = await fundraiser.pool();
                let projetInfo = await fundraiser.info();
                let campaign = await fundraiser.campaign();
                let owner = await fundraiser.owner();
                const participants = await fundraiser.participantsCount();
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
                    config,
                    participants,
                    poolAddr,
                    owner
                };
            });
        }
        async getTokenInfo(tokenAddr) {
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

    exports.FundraiserFactory__factory = FundraiserFactory__factory;
    exports.FundraiserWeb3Connect = FundraiserWeb3Connect;
    exports.Fundraiser__factory = Fundraiser__factory;
    exports.MockERC20__factory = MockERC20__factory;

}));
//# sourceMappingURL=fundraiserlib.umd.js.map
