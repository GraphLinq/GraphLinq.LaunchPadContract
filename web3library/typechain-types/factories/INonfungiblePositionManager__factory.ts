/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  INonfungiblePositionManager,
  INonfungiblePositionManagerInterface,
} from "../INonfungiblePositionManager";

const _abi = [
  {
    type: "function",
    name: "createAndInitializePoolIfNecessary",
    inputs: [
      {
        name: "token0",
        type: "address",
        internalType: "address",
      },
      {
        name: "token1",
        type: "address",
        internalType: "address",
      },
      {
        name: "fee",
        type: "uint24",
        internalType: "uint24",
      },
      {
        name: "sqrtPriceX96",
        type: "uint160",
        internalType: "uint160",
      },
    ],
    outputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct INonfungiblePositionManager.MintParams",
        components: [
          {
            name: "token0",
            type: "address",
            internalType: "address",
          },
          {
            name: "token1",
            type: "address",
            internalType: "address",
          },
          {
            name: "fee",
            type: "uint24",
            internalType: "uint24",
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
          {
            name: "amount0Desired",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount1Desired",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount0Min",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount1Min",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "liquidity",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "amount0",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amount1",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "payable",
  },
] as const;

export class INonfungiblePositionManager__factory {
  static readonly abi = _abi;
  static createInterface(): INonfungiblePositionManagerInterface {
    return new Interface(_abi) as INonfungiblePositionManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): INonfungiblePositionManager {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as INonfungiblePositionManager;
  }
}
