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
  StealthLaunchCampaignTest,
  StealthLaunchCampaignTestInterface,
} from "../../StealthLaunchCampaignTest.t.sol/StealthLaunchCampaignTest";

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
  "0x6080604052600c8054600160ff199182168117909255601e8054909116909117905534801561002c575f80fd5b506126fc8061003a5f395ff3fe608060405234801562000010575f80fd5b50600436106200014c575f3560e01c806366d9a9a011620000c3578063b1218fd01162000083578063b1218fd0146200023c578063b5508aa91462000246578063ba414fa61462000250578063e20c9f71146200026b578063e3fd6a931462000275578063fa7626d4146200027f575f80fd5b806366d9a9a014620001dd57806385226c8114620001f6578063852b965c146200020f578063916a17c61462000219578063a109f39a1462000232575f80fd5b806334bdca70116200010f57806334bdca7014620001ab5780633e5e3c2314620001b55780633f7286f414620001bf5780634f9314d814620001c95780635197556914620001d3575f80fd5b806304a5223414620001505780630a9254e4146200015c5780631ed7831c146200016657806320d8cc9414620001885780632ade38801462000192575b5f80fd5b6200015a6200028d565b005b6200015a62000405565b62000170620004ec565b6040516200017f9190620016c0565b60405180910390f35b6200015a6200054e565b6200019c6200070b565b6040516200017f91906200175f565b6200015a62000853565b62000170620009b2565b6200017062000a12565b6200015a62000a72565b6200015a62000b15565b620001e762000cb3565b6040516200017f919062001868565b6200020062000e23565b6040516200017f9190620018f3565b6200015a62000ef8565b6200022362001109565b6040516200017f919062001959565b6200015a620011ee565b6200015a62001359565b6200020062001398565b6200025a6200146d565b60405190151581526020016200017f565b620001706200150b565b6200015a6200156b565b601e546200025a9060ff1681565b60205460405163ca669fa760e01b81526001600160a01b0390911660048201525f80516020620026768339815191529063ca669fa7906024015f604051808303815f87803b158015620002de575f80fd5b505af1158015620002f1573d5f803e3d5ffd5b50506020546040516001600160a01b0390911660248201525f8051602062002676833981519152925063f28dceb3915060440160408051601f198184030181529181526020820180516001600160e01b031663118cdaa760e01b1790525160e083901b6001600160e01b03191681526200036f9190600401620019cc565b5f604051808303815f87803b15801562000387575f80fd5b505af11580156200039a573d5f803e3d5ffd5b50505050601e60019054906101000a90046001600160a01b03166001600160a01b031663a8d31c786040518163ffffffff1660e01b81526004015f604051808303815f87803b158015620003ec575f80fd5b505af1158015620003ff573d5f803e3d5ffd5b50505050565b601f80546001600160a01b031990811630179091556020805490911661012317815569021e19e0c9bab24000006021819055670de0b6b3a764000060228190556040516200045c9301918252602082015260400190565b604051602081830303815290604052602390816200047b919062001a84565b50601f546040516001600160a01b03909116906023906200049c90620016b2565b620004a992919062001b4d565b604051809103905ff080158015620004c3573d5f803e3d5ffd5b50601e60016101000a8154816001600160a01b0302191690836001600160a01b03160217905550565b606060168054806020026020016040519081016040528092919081815260200182805480156200054457602002820191905f5260205f20905b81546001600160a01b0316815260019091019060200180831162000525575b5050505050905090565b5f805f601e60019054906101000a90046001600160a01b03166001600160a01b0316630c611f246040518163ffffffff1660e01b81526004015f60405180830381865afa158015620005a2573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052620005cb919081019062001c7e565b92509250925062000632836040518060400160405280600e81526020016d0a6e8cac2d8e8d04098c2eadcc6d60931b81525060405180604001604052806016815260200175086c2dae0c2d2cedc40dcc2daca40dad2e6dac2e8c6d60531b815250620015aa565b620006a9826040518060400160405280601781526020017f537465616c7468204c61756e63682043616d706169676e0000000000000000008152506040518060400160405280601d81526020017f43616d706169676e206465736372697074696f6e206d69736d61746368000000815250620015aa565b6200070681604051806040016040528060038152602001624e2f4160e81b8152506040518060400160405280601981526020017f43616d706169676e2064657461696c73206d69736d6174636800000000000000815250620015aa565b505050565b6060601d805480602002602001604051908101604052809291908181526020015f905b828210156200084a575f84815260208082206040805180820182526002870290920180546001600160a01b03168352600181018054835181870281018701909452808452939591948681019491929084015b8282101562000832578382905f5260205f20018054620007a090620019fb565b80601f0160208091040260200160405190810160405280929190818152602001828054620007ce90620019fb565b80156200081d5780601f10620007f3576101008083540402835291602001916200081d565b820191905f5260205f20905b815481529060010190602001808311620007ff57829003601f168201915b50505050508152602001906001019062000780565b5050505081525050815260200190600101906200072e565b50505050905090565b60205460405163ca669fa760e01b81526001600160a01b0390911660048201525f80516020620026768339815191529063ca669fa7906024015f604051808303815f87803b158015620008a4575f80fd5b505af1158015620008b7573d5f803e3d5ffd5b50506020546040516001600160a01b0390911660248201525f8051602062002676833981519152925063f28dceb3915060440160408051601f198184030181529181526020820180516001600160e01b031663118cdaa760e01b1790525160e083901b6001600160e01b0319168152620009359190600401620019cc565b5f604051808303815f87803b1580156200094d575f80fd5b505af115801562000960573d5f803e3d5ffd5b50505050601e60019054906101000a90046001600160a01b03166001600160a01b031663d54dff2d6040518163ffffffff1660e01b81526004015f604051808303815f87803b158015620003ec575f80fd5b606060188054806020026020016040519081016040528092919081815260200182805480156200054457602002820191905f5260205f209081546001600160a01b0316815260019091019060200180831162000525575050505050905090565b606060178054806020026020016040519081016040528092919081815260200182805480156200054457602002820191905f5260205f209081546001600160a01b0316815260019091019060200180831162000525575050505050905090565b5f601e60019054906101000a90046001600160a01b03166001600160a01b0316635d491abb6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000ac5573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000aeb919062001d0a565b905062000b1281604051806060016040528060318152602001620026966031913962001614565b50565b60205460405163ca669fa760e01b81526001600160a01b039091166004820152681b1ae4d6e2ef500000905f80516020620026768339815191529063ca669fa7906024015f604051808303815f87803b15801562000b71575f80fd5b505af115801562000b84573d5f803e3d5ffd5b50506020546040516001600160a01b0390911660248201525f8051602062002676833981519152925063f28dceb3915060440160408051601f198184030181529181526020820180516001600160e01b031663118cdaa760e01b1790525160e083901b6001600160e01b031916815262000c029190600401620019cc565b5f604051808303815f87803b15801562000c1a575f80fd5b505af115801562000c2d573d5f803e3d5ffd5b5050601e5460205460405163060b0b0f60e41b8152600481018690526001600160a01b0391821660248201526101009092041692506360b0b0f091506044016020604051808303815f875af115801562000c89573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000caf919062001d2b565b5050565b6060601b805480602002602001604051908101604052809291908181526020015f905b828210156200084a578382905f5260205f2090600202016040518060400160405290815f8201805462000d0990620019fb565b80601f016020809104026020016040519081016040528092919081815260200182805462000d3790620019fb565b801562000d865780601f1062000d5c5761010080835404028352916020019162000d86565b820191905f5260205f20905b81548152906001019060200180831162000d6857829003601f168201915b505050505081526020016001820180548060200260200160405190810160405280929190818152602001828054801562000e0a57602002820191905f5260205f20905f905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841162000dcb5790505b5050505050815250508152602001906001019062000cd6565b6060601a805480602002602001604051908101604052809291908181526020015f905b828210156200084a578382905f5260205f2001805462000e6690620019fb565b80601f016020809104026020016040519081016040528092919081815260200182805462000e9490620019fb565b801562000ee35780601f1062000eb95761010080835404028352916020019162000ee3565b820191905f5260205f20905b81548152906001019060200180831162000ec557829003601f168201915b50505050508152602001906001019062000e46565b601f5460405163ca669fa760e01b81526001600160a01b039091166004820152681b1ae4d6e2ef500000905f80516020620026768339815191529063ca669fa7906024015f604051808303815f87803b15801562000f54575f80fd5b505af115801562000f67573d5f803e3d5ffd5b5050601e5460205460405163060b0b0f60e41b8152600481018690526001600160a01b0391821660248201525f94506101009092041691506360b0b0f0906044016020604051808303815f875af115801562000fc5573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000feb919062001d2b565b90505f60225483670de0b6b3a764000062001007919062001d43565b62001013919062001d6d565b90506200105782826040518060400160405280601981526020017f546f6b656e20616c6c6f636174696f6e206d69736d61746368000000000000008152506200167b565b62000706601e60019054906101000a90046001600160a01b03166001600160a01b031663c59ee1dc6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620010ad573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620010d3919062001d2b565b84604051806040016040528060168152602001750a4c2d2e6cac840c2dadeeadce840dad2e6dac2e8c6d60531b8152506200167b565b6060601c805480602002602001604051908101604052809291908181526020015f905b828210156200084a575f8481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015620011d557602002820191905f5260205f20905f905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620011965790505b505050505081525050815260200190600101906200112c565b6200129c601e60019054906101000a90046001600160a01b03166001600160a01b031663d669e1d46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562001244573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200126a919062001d2b565b6021546040518060400160405280601081526020016f09ac2f040c6c2e040dad2e6dac2e8c6d60831b8152506200167b565b62001357601e60019054906101000a90046001600160a01b03166001600160a01b0316637b1b1de66040518163ffffffff1660e01b8152600401602060405180830381865afa158015620012f2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001318919062001d2b565b6022546040518060400160405280601881526020017f50726963652070657220746f6b656e206d69736d6174636800000000000000008152506200167b565b565b601f5460405163ca669fa760e01b81526001600160a01b0390911660048201525f80516020620026768339815191529063ca669fa7906024016200036f565b60606019805480602002602001604051908101604052809291908181526020015f905b828210156200084a578382905f5260205f20018054620013db90620019fb565b80601f01602080910402602001604051908101604052809291908181526020018280546200140990620019fb565b8015620014585780601f106200142e5761010080835404028352916020019162001458565b820191905f5260205f20905b8154815290600101906020018083116200143a57829003601f168201915b505050505081526020019060010190620013bb565b6008545f9060ff161562001485575060085460ff1690565b604051630667f9d760e41b81525f8051602062002676833981519152600482018190526519985a5b195960d21b60248301525f9163667f9d7090604401602060405180830381865afa158015620014de573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062001504919062001d2b565b1415905090565b606060158054806020026020016040519081016040528092919081815260200182805480156200054457602002820191905f5260205f209081546001600160a01b0316815260019091019060200180831162000525575050505050905090565b601f5460405163ca669fa760e01b81526001600160a01b0390911660048201525f80516020620026768339815191529063ca669fa79060240162000935565b6040516306decadb60e31b81525f8051602062002676833981519152906336f656d890620015e19086908690869060040162001d8d565b5f6040518083038186803b158015620015f8575f80fd5b505afa1580156200160b573d5f803e3d5ffd5b50505050505050565b60405163a34edc0360e01b81525f80516020620026768339815191529063a34edc039062001649908590859060040162001dcb565b5f6040518083038186803b15801562001660575f80fd5b505afa15801562001673573d5f803e3d5ffd5b505050505050565b6040516388b44c8560e01b81525f8051602062002676833981519152906388b44c8590620015e19086908690869060040162001def565b61085d8062001e1983390190565b602080825282518282018190525f9190848201906040850190845b81811015620017025783516001600160a01b031683529284019291840191600101620016db565b50909695505050505050565b5f5b838110156200172a57818101518382015260200162001710565b50505f910152565b5f81518084526200174b8160208601602086016200170e565b601f01601f19169290920160200192915050565b602080825282518282018190525f919060409081850190600581811b87018401888601875b848110156200181357603f198a8403018652815180516001600160a01b03168452880151888401889052805188850181905290890190606081871b8601810191908601905f5b81811015620017fc57605f19888503018352620017e984865162001732565b948d01949350918c0191600101620017ca565b505050968901969350509087019060010162001784565b50909998505050505050505050565b5f815180845260208085019450602084015f5b838110156200185d5781516001600160e01b0319168752958201959082019060010162001835565b509495945050505050565b5f60208083018184528085518083526040925060408601915060408160051b8701018488015f5b83811015620018e557888303603f1901855281518051878552620018b68886018262001732565b91890151858303868b0152919050620018d0818362001822565b9689019694505050908601906001016200188f565b509098975050505050505050565b5f60208083016020845280855180835260408601915060408160051b8701019250602087015f5b828110156200194c57603f198886030184526200193985835162001732565b945092850192908501906001016200191a565b5092979650505050505050565b5f60208083018184528085518083526040925060408601915060408160051b8701018488015f5b83811015620018e557888303603f19018552815180516001600160a01b03168452870151878401879052620019b88785018262001822565b958801959350509086019060010162001980565b602081525f620019e0602083018462001732565b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168062001a1057607f821691505b60208210810362001a2f57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200070657805f5260205f20601f840160051c8101602085101562001a5c5750805b601f840160051c820191505b8181101562001a7d575f815560010162001a68565b5050505050565b815167ffffffffffffffff81111562001aa15762001aa1620019e7565b62001ab98162001ab28454620019fb565b8462001a35565b602080601f83116001811462001aef575f841562001ad75750858301515b5f19600386901b1c1916600185901b17855562001673565b5f85815260208120601f198616915b8281101562001b1f5788860151825594840194600190910190840162001afe565b508582101562001b3d57878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b60018060a01b03831681525f6020604060208401525f845462001b7081620019fb565b806040870152606060018084165f811462001b94576001811462001bb15762001be0565b60ff19851660608a0152606084151560051b8a0101955062001be0565b895f5260205f205f5b8581101562001bd75781548b820186015290830190880162001bba565b8a016060019650505b50939998505050505050505050565b5f82601f83011262001bff575f80fd5b815167ffffffffffffffff8082111562001c1d5762001c1d620019e7565b604051601f8301601f19908116603f0116810190828211818310171562001c485762001c48620019e7565b8160405283815286602085880101111562001c61575f80fd5b62001c748460208301602089016200170e565b9695505050505050565b5f805f6060848603121562001c91575f80fd5b835167ffffffffffffffff8082111562001ca9575f80fd5b62001cb78783880162001bef565b9450602086015191508082111562001ccd575f80fd5b62001cdb8783880162001bef565b9350604086015191508082111562001cf1575f80fd5b5062001d008682870162001bef565b9150509250925092565b5f6020828403121562001d1b575f80fd5b81518015158114620019e0575f80fd5b5f6020828403121562001d3c575f80fd5b5051919050565b808202811582820484141762001d6757634e487b7160e01b5f52601160045260245ffd5b92915050565b5f8262001d8857634e487b7160e01b5f52601260045260245ffd5b500490565b606081525f62001da1606083018662001732565b828103602084015262001db5818662001732565b9050828103604084015262001c74818562001732565b8215158152604060208201525f62001de7604083018462001732565b949350505050565b838152826020820152606060408201525f62001e0f606083018462001732565b9594505050505056fe60c060405234801561000f575f80fd5b5060405161085d38038061085d83398101604081905261002e916100eb565b816001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006581610088565b508080602001905181019061007a91906101cc565b60a052608052506101ee9050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b5f52604160045260245ffd5b5f80604083850312156100fc575f80fd5b82516001600160a01b0381168114610112575f80fd5b602084810151919350906001600160401b0380821115610130575f80fd5b818601915086601f830112610143575f80fd5b815181811115610155576101556100d7565b604051601f8201601f19908116603f0116810190838211818310171561017d5761017d6100d7565b816040528281528986848701011115610194575f80fd5b5f93505b828410156101b55784840186015181850187015292850192610198565b5f8684830101528096505050505050509250929050565b5f80604083850312156101dd575f80fd5b505080516020909101519092909150565b60805160a05161063261022b5f395f81816101ac015281816101d501528181610284015261035a01525f8181610244015261031b01526106325ff3fe608060405234801561000f575f80fd5b50600436106100e5575f3560e01c80638e75e48211610088578063c59ee1dc11610063578063c59ee1dc14610236578063d54dff2d14610219578063d669e1d41461023f578063f2fde38b14610266575f80fd5b80638e75e48214610211578063a8d31c7814610219578063c3f909d414610221575f80fd5b8063715018a6116100c3578063715018a6146101a05780637b1b1de6146101aa578063833b9499146101d05780638da5cb5b146101f7575f80fd5b80630c611f24146100e95780635d491abb1461017057806360b0b0f01461017f575b5f80fd5b604080518082018252600e81526d0a6e8cac2d8e8d04098c2eadcc6d60931b60208083019190915282518084018452601781527f537465616c7468204c61756e63682043616d706169676e000000000000000000818301528351808501855260038152624e2f4160e81b92810192909252925161016793919061049b565b60405180910390f35b60405160018152602001610167565b61019261018d3660046104f8565b610279565b604051908152602001610167565b6101a86102de565b005b7f0000000000000000000000000000000000000000000000000000000000000000610192565b6101927f000000000000000000000000000000000000000000000000000000000000000081565b5f546040516001600160a01b039091168152602001610167565b600154610192565b6101a86102f1565b6102296102f9565b6040516101679190610522565b61019260015481565b6101927f000000000000000000000000000000000000000000000000000000000000000081565b6101a8610274366004610565565b61039b565b5f6102826103dd565b7f00000000000000000000000000000000000000000000000000000000000000006102b584670de0b6b3a7640000610599565b6102bf91906105b6565b90508260015f8282546102d291906105d5565b90915550909392505050565b6102e66103dd565b6102ef5f610409565b565b6102ef6103dd565b60408051600280825260608083018452926020830190803683370190505090507f0000000000000000000000000000000000000000000000000000000000000000815f8151811061034c5761034c6105e8565b6020026020010181815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061038c5761038c6105e8565b60200260200101818152505090565b6103a36103dd565b6001600160a01b0381166103d157604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6103da81610409565b50565b5f546001600160a01b031633146102ef5760405163118cdaa760e01b81523360048201526024016103c8565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f81518084525f5b8181101561047c57602081850181015186830182015201610460565b505f602082860101526020601f19601f83011685010191505092915050565b606081525f6104ad6060830186610458565b82810360208401526104bf8186610458565b905082810360408401526104d38185610458565b9695505050505050565b80356001600160a01b03811681146104f3575f80fd5b919050565b5f8060408385031215610509575f80fd5b82359150610519602084016104dd565b90509250929050565b602080825282518282018190525f9190848201906040850190845b818110156105595783518352928401929184019160010161053d565b50909695505050505050565b5f60208284031215610575575f80fd5b61057e826104dd565b9392505050565b634e487b7160e01b5f52601160045260245ffd5b80820281158282048414176105b0576105b0610585565b92915050565b5f826105d057634e487b7160e01b5f52601260045260245ffd5b500490565b808201808211156105b0576105b0610585565b634e487b7160e01b5f52603260045260245ffdfea2646970667358221220695e80395938d3e8606eff1fbd33c712ad8b38ecf62d2a26eb8d3a3b9248bd6364736f6c634300081800330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d537465616c74684c61756e636843616d706169676e2073686f756c6420616c77617973206265207375636365737366756ca2646970667358221220fd5df5399b5fad4b6685c02d26fbc57d880442de0dbdc49402274bc252bb3dd064736f6c63430008180033";

type StealthLaunchCampaignTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StealthLaunchCampaignTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StealthLaunchCampaignTest__factory extends ContractFactory {
  constructor(...args: StealthLaunchCampaignTestConstructorParams) {
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
      StealthLaunchCampaignTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): StealthLaunchCampaignTest__factory {
    return super.connect(runner) as StealthLaunchCampaignTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StealthLaunchCampaignTestInterface {
    return new Interface(_abi) as StealthLaunchCampaignTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): StealthLaunchCampaignTest {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as StealthLaunchCampaignTest;
  }
}
