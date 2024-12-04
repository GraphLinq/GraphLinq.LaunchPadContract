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
import type { StdError, StdErrorInterface } from "../../StdError.sol/StdError";

const _abi = [
  {
    type: "function",
    name: "arithmeticError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "assertionError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "divisionError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "encodeStorageError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "enumConversionError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "indexOOBError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "memOverflowError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "popError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "zeroVarError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
] as const;

const _bytecode =
  "0x61024a610035600b8282823980515f1a60731461002957634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061009b575f3560e01c8063986c5f681161006e578063986c5f68146100d5578063b22dc54d146100dd578063b67689da146100e5578063d160e4de146100ed578063fa784a44146100f5575f80fd5b806305ee86121461009f57806310332977146100bd5780631de45560146100c55780638995290f146100cd575b5f80fd5b6100a76100fd565b6040516100b491906101c8565b60405180910390f35b6100a7610138565b6100a761014a565b6100a761015c565b6100a761016e565b6100a7610180565b6100a7610192565b6100a76101a4565b6100a76101b6565b604051603260248201526044015b60408051601f198184030181529190526020810180516001600160e01b0316634e487b7160e01b17905281565b6040516001602482015260440161010b565b6040516021602482015260440161010b565b6040516011602482015260440161010b565b6040516041602482015260440161010b565b6040516031602482015260440161010b565b6040516051602482015260440161010b565b6040516022602482015260440161010b565b6040516012602482015260440161010b565b5f602080835283518060208501525f5b818110156101f4578581018301518582016040015282016101d8565b505f604082860101526040601f19601f830116850101925050509291505056fea26469706673582212202bc19af1d4aaef0331c6eedea027201a212904e78bbd067d2360a1e06407219b64736f6c63430008180033";

type StdErrorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdErrorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdError__factory extends ContractFactory {
  constructor(...args: StdErrorConstructorParams) {
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
      StdError & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): StdError__factory {
    return super.connect(runner) as StdError__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdErrorInterface {
    return new Interface(_abi) as StdErrorInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): StdError {
    return new Contract(address, _abi, runner) as unknown as StdError;
  }
}