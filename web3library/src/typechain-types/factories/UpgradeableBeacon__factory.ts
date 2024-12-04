/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  UpgradeableBeacon,
  UpgradeableBeaconInterface,
} from "../UpgradeableBeacon";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "implementation_",
        type: "address",
        internalType: "address",
      },
      {
        name: "initialOwner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "implementation",
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
    name: "upgradeTo",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "BeaconInvalidImplementation",
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
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b5060405161042138038061042183398101604081905261002e9161015f565b806001600160a01b03811661005d57604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b61006681610077565b50610070826100c6565b5050610190565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b806001600160a01b03163b5f036100fb5760405163211eb15960e21b81526001600160a01b0382166004820152602401610054565b600180546001600160a01b0319166001600160a01b0383169081179091556040517fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a250565b80516001600160a01b038116811461015a575f80fd5b919050565b5f8060408385031215610170575f80fd5b61017983610144565b915061018760208401610144565b90509250929050565b6102848061019d5f395ff3fe608060405234801561000f575f80fd5b5060043610610055575f3560e01c80633659cfe6146100595780635c60da1b1461006e578063715018a6146100975780638da5cb5b1461009f578063f2fde38b146100af575b5f80fd5b61006c610067366004610221565b6100c2565b005b6001546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b61006c6100d6565b5f546001600160a01b031661007b565b61006c6100bd366004610221565b6100e9565b6100ca610128565b6100d381610154565b50565b6100de610128565b6100e75f6101d2565b565b6100f1610128565b6001600160a01b03811661011f57604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6100d3816101d2565b5f546001600160a01b031633146100e75760405163118cdaa760e01b8152336004820152602401610116565b806001600160a01b03163b5f036101895760405163211eb15960e21b81526001600160a01b0382166004820152602401610116565b600180546001600160a01b0319166001600160a01b0383169081179091556040517fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a250565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f60208284031215610231575f80fd5b81356001600160a01b0381168114610247575f80fd5b939250505056fea264697066735822122078857ed5e6c1ebe5c4f8b0fc300380d65e0a31a2d380b2666951285203074d4364736f6c63430008180033";

type UpgradeableBeaconConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeableBeaconConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeableBeacon__factory extends ContractFactory {
  constructor(...args: UpgradeableBeaconConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    implementation_: AddressLike,
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      implementation_,
      initialOwner,
      overrides || {}
    );
  }
  override deploy(
    implementation_: AddressLike,
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      implementation_,
      initialOwner,
      overrides || {}
    ) as Promise<
      UpgradeableBeacon & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UpgradeableBeacon__factory {
    return super.connect(runner) as UpgradeableBeacon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeableBeaconInterface {
    return new Interface(_abi) as UpgradeableBeaconInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UpgradeableBeacon {
    return new Contract(address, _abi, runner) as unknown as UpgradeableBeacon;
  }
}