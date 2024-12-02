/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  FairLaunchCampaignTest,
  FairLaunchCampaignTestInterface,
} from "../../FairLaunchCampaignTest.t.sol/FairLaunchCampaignTest";

const _abi = [
  {
    type: "function",
    name: "IS_TEST",
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
    name: "excludeArtifacts",
    inputs: [],
    outputs: [
      {
        name: "excludedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeContracts",
    inputs: [],
    outputs: [
      {
        name: "excludedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeSenders",
    inputs: [],
    outputs: [
      {
        name: "excludedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "failed",
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
    name: "setUp",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "targetArtifactSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifactSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzArtifactSelector[]",
        components: [
          {
            name: "artifact",
            type: "string",
            internalType: "string",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetArtifacts",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetContracts",
    inputs: [],
    outputs: [
      {
        name: "targetedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetInterfaces",
    inputs: [],
    outputs: [
      {
        name: "targetedInterfaces_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzInterface[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "artifacts",
            type: "string[]",
            internalType: "string[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzSelector[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSenders",
    inputs: [],
    outputs: [
      {
        name: "targetedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "testContribute",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testContributeNonOwner",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testGetCampaignDetails",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testHandleFailure",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testHandleFailureNonOwner",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testHandleFinalization",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testHandleFinalizationNonOwner",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testInitialization",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testIsCampaignSuccessful",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "log",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_address",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes32",
    inputs: [
      {
        name: "",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_int",
    inputs: [
      {
        name: "",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_address",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes32",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_string",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_string",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_uint",
    inputs: [
      {
        name: "",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "logs",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x6080604052600c8054600160ff199182168117909255601e8054909116909117905534801561002c575f80fd5b506130908061003a5f395ff3fe608060405234801562000010575f80fd5b50600436106200014c575f3560e01c806366d9a9a011620000c3578063b1218fd01162000083578063b1218fd0146200023c578063b5508aa91462000246578063ba414fa61462000250578063e20c9f71146200026b578063e3fd6a931462000275578063fa7626d4146200027f575f80fd5b806366d9a9a014620001dd57806385226c8114620001f6578063852b965c146200020f578063916a17c61462000219578063a109f39a1462000232575f80fd5b806334bdca70116200010f57806334bdca7014620001ab5780633e5e3c2314620001b55780633f7286f414620001bf5780634f9314d814620001c95780635197556914620001d3575f80fd5b806304a5223414620001505780630a9254e4146200015c5780631ed7831c146200016657806320d8cc9414620001885780632ade38801462000192575b5f80fd5b6200015a6200028d565b005b6200015a62000478565b6200017062000574565b6040516200017f919062001d88565b60405180910390f35b6200015a620005d6565b6200019c62000787565b6040516200017f919062001e27565b6200015a620008cf565b6200017062000ba7565b6200017062000c07565b6200015a62000c67565b6200015a62000f24565b620001e7620010be565b6040516200017f919062001f30565b620002006200122e565b6040516200017f919062001fbb565b6200015a62001303565b6200022362001514565b6040516200017f919062002021565b6200015a620015f9565b6200015a62001818565b62000200620018cb565b6200025a620019a0565b60405190151581526020016200017f565b6200017062001a3e565b6200015a62001a9e565b601e546200025a9060ff1681565b6021545f805160206200301a8339815191529063e5d6bf0290620002b3906001620020a8565b6040518263ffffffff1660e01b8152600401620002d291815260200190565b5f604051808303815f87803b158015620002ea575f80fd5b505af1158015620002fd573d5f803e3d5ffd5b505060205460405163ca669fa760e01b81526001600160a01b0390911660048201525f805160206200301a833981519152925063ca669fa791506024015f604051808303815f87803b15801562000352575f80fd5b505af115801562000365573d5f803e3d5ffd5b50506020546040516001600160a01b0390911660248201525f805160206200301a833981519152925063f28dceb3915060440160408051601f198184030181529181526020820180516001600160e01b031663118cdaa760e01b1790525160e083901b6001600160e01b0319168152620003e39190600401620020c4565b5f604051808303815f87803b158015620003fb575f80fd5b505af11580156200040e573d5f803e3d5ffd5b50505050601e60019054906101000a90046001600160a01b03166001600160a01b031663a8d31c786040518163ffffffff1660e01b81526004015f6040518083038186803b1580156200045f575f80fd5b505afa15801562000472573d5f803e3d5ffd5b50505050565b601f80546001600160a01b0319908116301790915560208054909116610123179055620004a842610e10620020a8565b6021819055683635c9adc5dea000006022819055670de0b6b3a7640000602381905560408051602081019490945283019190915260608201526080016040516020818303038152906040526024908162000503919062002175565b50601f546040516001600160a01b0390911690602490620005249062001d7a565b620005319291906200223e565b604051809103905ff0801580156200054b573d5f803e3d5ffd5b50601e60016101000a8154816001600160a01b0302191690836001600160a01b03160217905550565b60606016805480602002602001604051908101604052809291908181526020018280548015620005cc57602002820191905f5260205f20905b81546001600160a01b03168152600190910190602001808311620005ad575b5050505050905090565b5f805f601e60019054906101000a90046001600160a01b03166001600160a01b0316630c611f246040518163ffffffff1660e01b81526004015f60405180830381865afa1580156200062a573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526200065391908101906200236f565b925092509250620006b7836040518060400160405280600b81526020016a08cc2d2e44098c2eadcc6d60ab1b81525060405180604001604052806016815260200175086c2dae0c2d2cedc40dcc2daca40dad2e6dac2e8c6d60531b81525062001c3d565b6200072582604051806040016040528060148152602001732330b4b9102630bab731b41021b0b6b830b4b3b760611b8152506040518060400160405280601d81526020017f43616d706169676e206465736372697074696f6e206d69736d6174636800000081525062001c3d565b6200078281604051806040016040528060038152602001624e2f4160e81b8152506040518060400160405280601981526020017f43616d706169676e2064657461696c73206d69736d617463680000000000000081525062001c3d565b505050565b6060601d805480602002602001604051908101604052809291908181526020015f905b82821015620008c6575f84815260208082206040805180820182526002870290920180546001600160a01b03168352600181018054835181870281018701909452808452939591948681019491929084015b82821015620008ae578382905f5260205f200180546200081c90620020f3565b80601f01602080910402602001604051908101604052809291908181526020018280546200084a90620020f3565b8015620008995780601f106200086f5761010080835404028352916020019162000899565b820191905f5260205f20905b8154815290600101906020018083116200087b57829003601f168201915b505050505081526020019060010190620007fc565b505050508152505081526020019060010190620007aa565b50505050905090565b6021545f805160206200301a8339815191529063e5d6bf0290620008f5906001620020a8565b6040518263ffffffff1660e01b81526004016200091491815260200190565b5f604051808303815f87803b1580156200092c575f80fd5b505af11580156200093f573d5f803e3d5ffd5b5050602254601f5460405163ca669fa760e01b81526001600160a01b0390911660048201529092505f805160206200301a833981519152915063ca669fa7906024015f604051808303815f87803b15801562000999575f80fd5b505af1158015620009ac573d5f803e3d5ffd5b5050601e5460205460405163060b0b0f60e41b8152600481018690526001600160a01b0391821660248201526101009092041692506360b0b0f091506044016020604051808303815f875af115801562000a08573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000a2e9190620023fb565b5060205460405163ca669fa760e01b81526001600160a01b0390911660048201525f805160206200301a8339815191529063ca669fa7906024015f604051808303815f87803b15801562000a80575f80fd5b505af115801562000a93573d5f803e3d5ffd5b50506020546040516001600160a01b0390911660248201525f805160206200301a833981519152925063f28dceb3915060440160408051601f198184030181529181526020820180516001600160e01b031663118cdaa760e01b1790525160e083901b6001600160e01b031916815262000b119190600401620020c4565b5f604051808303815f87803b15801562000b29575f80fd5b505af115801562000b3c573d5f803e3d5ffd5b50505050601e60019054906101000a90046001600160a01b03166001600160a01b031663d54dff2d6040518163ffffffff1660e01b81526004015f6040518083038186803b15801562000b8d575f80fd5b505afa15801562000ba0573d5f803e3d5ffd5b5050505050565b60606018805480602002602001604051908101604052809291908181526020018280548015620005cc57602002820191905f5260205f209081546001600160a01b03168152600190910190602001808311620005ad575050505050905090565b60606017805480602002602001604051908101604052809291908181526020018280548015620005cc57602002820191905f5260205f209081546001600160a01b03168152600190910190602001808311620005ad575050505050905090565b6021545f805160206200301a8339815191529063e5d6bf029062000c8d906001620020a8565b6040518263ffffffff1660e01b815260040162000cac91815260200190565b5f604051808303815f87803b15801562000cc4575f80fd5b505af115801562000cd7573d5f803e3d5ffd5b505050505f601e60019054906101000a90046001600160a01b03166001600160a01b0316635d491abb6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000d2e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000d54919062002413565b905062000d7b816040518060600160405280602181526020016200303a6021913962001ca7565b602254601f5460405163ca669fa760e01b81526001600160a01b0390911660048201525f805160206200301a8339815191529063ca669fa7906024015f604051808303815f87803b15801562000dcf575f80fd5b505af115801562000de2573d5f803e3d5ffd5b5050601e5460205460405163060b0b0f60e41b8152600481018690526001600160a01b0391821660248201526101009092041692506360b0b0f091506044016020604051808303815f875af115801562000e3e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000e649190620023fb565b50601e60019054906101000a90046001600160a01b03166001600160a01b0316635d491abb6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000eb7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000edd919062002413565b915062000f20826040518060400160405280601d81526020017f43616d706169676e2073686f756c64206265207375636365737366756c00000081525062001d0e565b5050565b60205460405163ca669fa760e01b81526001600160a01b039091166004820152681b1ae4d6e2ef500000905f805160206200301a8339815191529063ca669fa7906024015f604051808303815f87803b15801562000f80575f80fd5b505af115801562000f93573d5f803e3d5ffd5b50506020546040516001600160a01b0390911660248201525f805160206200301a833981519152925063f28dceb3915060440160408051601f198184030181529181526020820180516001600160e01b031663118cdaa760e01b1790525160e083901b6001600160e01b0319168152620010119190600401620020c4565b5f604051808303815f87803b15801562001029575f80fd5b505af11580156200103c573d5f803e3d5ffd5b5050601e5460205460405163060b0b0f60e41b8152600481018690526001600160a01b0391821660248201526101009092041692506360b0b0f091506044016020604051808303815f875af115801562001098573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000f209190620023fb565b6060601b805480602002602001604051908101604052809291908181526020015f905b82821015620008c6578382905f5260205f2090600202016040518060400160405290815f820180546200111490620020f3565b80601f01602080910402602001604051908101604052809291908181526020018280546200114290620020f3565b8015620011915780601f10620011675761010080835404028352916020019162001191565b820191905f5260205f20905b8154815290600101906020018083116200117357829003601f168201915b50505050508152602001600182018054806020026020016040519081016040528092919081815260200182805480156200121557602002820191905f5260205f20905f905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620011d65790505b50505050508152505081526020019060010190620010e1565b6060601a805480602002602001604051908101604052809291908181526020015f905b82821015620008c6578382905f5260205f200180546200127190620020f3565b80601f01602080910402602001604051908101604052809291908181526020018280546200129f90620020f3565b8015620012ee5780601f10620012c457610100808354040283529160200191620012ee565b820191905f5260205f20905b815481529060010190602001808311620012d057829003601f168201915b50505050508152602001906001019062001251565b601f5460405163ca669fa760e01b81526001600160a01b039091166004820152681b1ae4d6e2ef500000905f805160206200301a8339815191529063ca669fa7906024015f604051808303815f87803b1580156200135f575f80fd5b505af115801562001372573d5f803e3d5ffd5b5050601e5460205460405163060b0b0f60e41b8152600481018690526001600160a01b0391821660248201525f94506101009092041691506360b0b0f0906044016020604051808303815f875af1158015620013d0573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620013f69190620023fb565b90505f60235483670de0b6b3a764000062001412919062002434565b6200141e91906200244e565b90506200146282826040518060400160405280601981526020017f546f6b656e20616c6c6f636174696f6e206d69736d617463680000000000000081525062001d43565b62000782601e60019054906101000a90046001600160a01b03166001600160a01b031663c59ee1dc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620014b8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620014de9190620023fb565b84604051806040016040528060168152602001750a4c2d2e6cac840c2dadeeadce840dad2e6dac2e8c6d60531b81525062001d43565b6060601c805480602002602001604051908101604052809291908181526020015f905b82821015620008c6575f8481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015620015e057602002820191905f5260205f20905f905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620015a15790505b5050505050815250508152602001906001019062001537565b620016a8601e60019054906101000a90046001600160a01b03166001600160a01b03166337ba682d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200164f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620016759190620023fb565b6021546040518060400160405280601181526020017008adcc840e8d2daca40dad2e6dac2e8c6d607b1b81525062001d43565b6200175b601e60019054906101000a90046001600160a01b03166001600160a01b031663e518a4716040518163ffffffff1660e01b8152600401602060405180830381865afa158015620016fe573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620017249190620023fb565b6022546040518060400160405280601581526020017409ad2dcd2daeada40cedec2d840dad2e6dac2e8c6d605b1b81525062001d43565b62001816601e60019054906101000a90046001600160a01b03166001600160a01b0316637b1b1de66040518163ffffffff1660e01b8152600401602060405180830381865afa158015620017b1573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620017d79190620023fb565b6023546040518060400160405280601881526020017f50726963652070657220746f6b656e206d69736d61746368000000000000000081525062001d43565b565b6021545f805160206200301a8339815191529063e5d6bf02906200183e906001620020a8565b6040518263ffffffff1660e01b81526004016200185d91815260200190565b5f604051808303815f87803b15801562001875575f80fd5b505af115801562001888573d5f803e3d5ffd5b5050601f5460405163ca669fa760e01b81526001600160a01b0390911660048201525f805160206200301a833981519152925063ca669fa79150602401620003e3565b60606019805480602002602001604051908101604052809291908181526020015f905b82821015620008c6578382905f5260205f200180546200190e90620020f3565b80601f01602080910402602001604051908101604052809291908181526020018280546200193c90620020f3565b80156200198b5780601f1062001961576101008083540402835291602001916200198b565b820191905f5260205f20905b8154815290600101906020018083116200196d57829003601f168201915b505050505081526020019060010190620018ee565b6008545f9060ff1615620019b8575060085460ff1690565b604051630667f9d760e41b81525f805160206200301a833981519152600482018190526519985a5b195960d21b60248301525f9163667f9d7090604401602060405180830381865afa15801562001a11573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001a379190620023fb565b1415905090565b60606015805480602002602001604051908101604052809291908181526020018280548015620005cc57602002820191905f5260205f209081546001600160a01b03168152600190910190602001808311620005ad575050505050905090565b6021545f805160206200301a8339815191529063e5d6bf029062001ac4906001620020a8565b6040518263ffffffff1660e01b815260040162001ae391815260200190565b5f604051808303815f87803b15801562001afb575f80fd5b505af115801562001b0e573d5f803e3d5ffd5b5050602254601f5460405163ca669fa760e01b81526001600160a01b0390911660048201529092505f805160206200301a833981519152915063ca669fa7906024015f604051808303815f87803b15801562001b68575f80fd5b505af115801562001b7b573d5f803e3d5ffd5b5050601e5460205460405163060b0b0f60e41b8152600481018690526001600160a01b0391821660248201526101009092041692506360b0b0f091506044016020604051808303815f875af115801562001bd7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001bfd9190620023fb565b50601f5460405163ca669fa760e01b81526001600160a01b0390911660048201525f805160206200301a8339815191529063ca669fa79060240162000b11565b6040516306decadb60e31b81525f805160206200301a833981519152906336f656d89062001c74908690869086906004016200246e565b5f6040518083038186803b15801562001c8b575f80fd5b505afa15801562001c9e573d5f803e3d5ffd5b50505050505050565b604051637ba0480960e01b81525f805160206200301a83398151915290637ba048099062001cdc9085908590600401620024ac565b5f6040518083038186803b15801562001cf3575f80fd5b505afa15801562001d06573d5f803e3d5ffd5b505050505050565b60405163a34edc0360e01b81525f805160206200301a8339815191529063a34edc039062001cdc9085908590600401620024ac565b6040516388b44c8560e01b81525f805160206200301a833981519152906388b44c859062001c7490869086908690600401620024d0565b610b2080620024fa83390190565b602080825282518282018190525f9190848201906040850190845b8181101562001dca5783516001600160a01b03168352928401929184019160010162001da3565b50909695505050505050565b5f5b8381101562001df257818101518382015260200162001dd8565b50505f910152565b5f815180845262001e1381602086016020860162001dd6565b601f01601f19169290920160200192915050565b602080825282518282018190525f919060409081850190600581811b87018401888601875b8481101562001edb57603f198a8403018652815180516001600160a01b03168452880151888401889052805188850181905290890190606081871b8601810191908601905f5b8181101562001ec457605f1988850301835262001eb184865162001dfa565b948d01949350918c019160010162001e92565b505050968901969350509087019060010162001e4c565b50909998505050505050505050565b5f815180845260208085019450602084015f5b8381101562001f255781516001600160e01b0319168752958201959082019060010162001efd565b509495945050505050565b5f60208083018184528085518083526040925060408601915060408160051b8701018488015f5b8381101562001fad57888303603f190185528151805187855262001f7e8886018262001dfa565b91890151858303868b015291905062001f98818362001eea565b96890196945050509086019060010162001f57565b509098975050505050505050565b5f60208083016020845280855180835260408601915060408160051b8701019250602087015f5b828110156200201457603f198886030184526200200185835162001dfa565b9450928501929085019060010162001fe2565b5092979650505050505050565b5f60208083018184528085518083526040925060408601915060408160051b8701018488015f5b8381101562001fad57888303603f19018552815180516001600160a01b03168452870151878401879052620020808785018262001eea565b958801959350509086019060010162002048565b634e487b7160e01b5f52601160045260245ffd5b80820180821115620020be57620020be62002094565b92915050565b602081525f620020d8602083018462001dfa565b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806200210857607f821691505b6020821081036200212757634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200078257805f5260205f20601f840160051c81016020851015620021545750805b601f840160051c820191505b8181101562000ba0575f815560010162002160565b815167ffffffffffffffff811115620021925762002192620020df565b620021aa81620021a38454620020f3565b846200212d565b602080601f831160018114620021e0575f8415620021c85750858301515b5f19600386901b1c1916600185901b17855562001d06565b5f85815260208120601f198616915b828110156200221057888601518255948401946001909101908401620021ef565b50858210156200222e57878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b60018060a01b03831681525f6020604060208401525f84546200226181620020f3565b806040870152606060018084165f8114620022855760018114620022a257620022d1565b60ff19851660608a0152606084151560051b8a01019550620022d1565b895f5260205f205f5b85811015620022c85781548b8201860152908301908801620022ab565b8a016060019650505b50939998505050505050505050565b5f82601f830112620022f0575f80fd5b815167ffffffffffffffff808211156200230e576200230e620020df565b604051601f8301601f19908116603f01168101908282118183101715620023395762002339620020df565b8160405283815286602085880101111562002352575f80fd5b6200236584602083016020890162001dd6565b9695505050505050565b5f805f6060848603121562002382575f80fd5b835167ffffffffffffffff808211156200239a575f80fd5b620023a887838801620022e0565b94506020860151915080821115620023be575f80fd5b620023cc87838801620022e0565b93506040860151915080821115620023e2575f80fd5b50620023f186828701620022e0565b9150509250925092565b5f602082840312156200240c575f80fd5b5051919050565b5f6020828403121562002424575f80fd5b81518015158114620020d8575f80fd5b8082028115828204841417620020be57620020be62002094565b5f826200246957634e487b7160e01b5f52601260045260245ffd5b500490565b606081525f62002482606083018662001dfa565b828103602084015262002496818662001dfa565b9050828103604084015262002365818562001dfa565b8215158152604060208201525f620024c8604083018462001dfa565b949350505050565b838152826020820152606060408201525f620024f0606083018462001dfa565b9594505050505056fe60e060405234801561000f575f80fd5b50604051610b20380380610b2083398101604081905261002e916100ee565b816001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6100658161008b565b508080602001905181019061007a91906101cf565b60c05260a052608052506101fa9050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b5f52604160045260245ffd5b5f80604083850312156100ff575f80fd5b82516001600160a01b0381168114610115575f80fd5b602084810151919350906001600160401b0380821115610133575f80fd5b818601915086601f830112610146575f80fd5b815181811115610158576101586100da565b604051601f8201601f19908116603f01168101908382118183101715610180576101806100da565b816040528281528986848701011115610197575f80fd5b5f93505b828410156101b8578484018601518185018701529285019261019b565b5f8684830101528096505050505050509250929050565b5f805f606084860312156101e1575f80fd5b8351925060208401519150604084015190509250925092565b60805160a05160c0516108af6102715f395f81816101db015281816102040152818161031301526104ff01525f818161027b015281816102de015281816103fa015281816104bf01526105b601525f8181610174015281816102b30152818161038a01528181610480015261054a01526108af5ff3fe608060405234801561000f575f80fd5b50600436106100f0575f3560e01c80638da5cb5b11610093578063c59ee1dc11610063578063c59ee1dc14610265578063d54dff2d1461026e578063e518a47114610276578063f2fde38b1461029d575f80fd5b80638da5cb5b146102265780638e75e48214610240578063a8d31c7814610248578063c3f909d414610250575f80fd5b806360b0b0f0116100ce57806360b0b0f0146101bc578063715018a6146101cf5780637b1b1de6146101d9578063833b9499146101ff575f80fd5b80630c611f24146100f457806337ba682d1461016f5780635d491abb146101a4575b5f80fd5b604080518082018252600b81526a08cc2d2e44098c2eadcc6d60ab1b6020808301919091528251808401845260148152732330b4b9102630bab731b41021b0b6b830b4b3b760611b818301528351808501855260038152624e2f4160e81b928101929092529251610166939190610718565b60405180910390f35b6101967f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610166565b6101ac6102b0565b6040519015158152602001610166565b6101966101ca366004610775565b610308565b6101d761036d565b005b7f0000000000000000000000000000000000000000000000000000000000000000610196565b6101967f000000000000000000000000000000000000000000000000000000000000000081565b5f546040516001600160a01b039091168152602001610166565b600154610196565b6101d7610380565b61025861045c565b604051610166919061079f565b61019660015481565b6101d7610540565b6101967f000000000000000000000000000000000000000000000000000000000000000081565b6101d76102ab3660046107e2565b61061d565b5f7f0000000000000000000000000000000000000000000000000000000000000000421015801561030357507f000000000000000000000000000000000000000000000000000000000000000060015410155b905090565b5f61031161065a565b7f000000000000000000000000000000000000000000000000000000000000000061034484670de0b6b3a7640000610816565b61034e9190610833565b90508260015f8282546103619190610852565b90915550909392505050565b61037561065a565b61037e5f610686565b565b61038861065a565b7f000000000000000000000000000000000000000000000000000000000000000042116103f85760405162461bcd60e51b815260206004820152601960248201527846756e6472616973696e67207374696c6c206f6e676f696e6760381b60448201526064015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001541061037e5760405162461bcd60e51b815260206004820152601060248201526f135a5b9a5b5d5b4819dbd85b081b595d60821b60448201526064016103ef565b604080516003808252608082019092526060916020820183803683370190505090507f0000000000000000000000000000000000000000000000000000000000000000815f815181106104b1576104b1610865565b6020026020010181815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106104f1576104f1610865565b6020026020010181815250507f00000000000000000000000000000000000000000000000000000000000000008160028151811061053157610531610865565b60200260200101818152505090565b61054861065a565b7f00000000000000000000000000000000000000000000000000000000000000004210156105b45760405162461bcd60e51b815260206004820152601960248201527846756e6472616973696e67207374696c6c206f6e676f696e6760381b60448201526064016103ef565b7f0000000000000000000000000000000000000000000000000000000000000000600154101561037e5760405162461bcd60e51b8152602060048201526014602482015273135a5b9a5b5d5b4819dbd85b081b9bdd081b595d60621b60448201526064016103ef565b61062561065a565b6001600160a01b03811661064e57604051631e4fbdf760e01b81525f60048201526024016103ef565b61065781610686565b50565b5f546001600160a01b0316331461037e5760405163118cdaa760e01b81523360048201526024016103ef565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f81518084525f5b818110156106f9576020818501810151868301820152016106dd565b505f602082860101526020601f19601f83011685010191505092915050565b606081525f61072a60608301866106d5565b828103602084015261073c81866106d5565b9050828103604084015261075081856106d5565b9695505050505050565b80356001600160a01b0381168114610770575f80fd5b919050565b5f8060408385031215610786575f80fd5b823591506107966020840161075a565b90509250929050565b602080825282518282018190525f9190848201906040850190845b818110156107d6578351835292840192918401916001016107ba565b50909695505050505050565b5f602082840312156107f2575f80fd5b6107fb8261075a565b9392505050565b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141761082d5761082d610802565b92915050565b5f8261084d57634e487b7160e01b5f52601260045260245ffd5b500490565b8082018082111561082d5761082d610802565b634e487b7160e01b5f52603260045260245ffdfea26469706673582212201e0afc5e6cb0129e26e66ff3a34d7a5834602912883845ee09bf5f6c65f10d4664736f6c634300081800330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d43616d706169676e2073686f756c64206e6f74206265207375636365737366756ca26469706673582212203f463bbc89a5d993af42044d80b978f250a8a2b3acc4ce3868b95b675161861a64736f6c63430008180033";

type FairLaunchCampaignTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FairLaunchCampaignTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FairLaunchCampaignTest__factory extends ContractFactory {
  constructor(...args: FairLaunchCampaignTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FairLaunchCampaignTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): FairLaunchCampaignTest__factory {
    return super.connect(runner) as FairLaunchCampaignTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FairLaunchCampaignTestInterface {
    return new Interface(_abi) as FairLaunchCampaignTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FairLaunchCampaignTest {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as FairLaunchCampaignTest;
  }
}
