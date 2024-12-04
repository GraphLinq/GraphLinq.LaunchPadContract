/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IVesting, IVestingInterface } from "../IVesting";

const _abi = [
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
] as const;

export class IVesting__factory {
  static readonly abi = _abi;
  static createInterface(): IVestingInterface {
    return new Interface(_abi) as IVestingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IVesting {
    return new Contract(address, _abi, runner) as unknown as IVesting;
  }
}