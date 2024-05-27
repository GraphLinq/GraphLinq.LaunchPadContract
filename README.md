# Project Name: GraphLinq Contracts

## Static Analysis Report

This document details the results of the static analysis performed on the Solidity smart contracts in this project using Solhint and Slither. The issues identified have been reviewed and acknowledged.

| Analyser | Issue                                                                                           | File                               | Status            |
|----------|-------------------------------------------------------------------------------------------------|------------------------------------|-------------------|
| Solhint  | Contract has 19 state declarations but allowed no more than 15                                   | `src/Fundraiser.sol`               | Acknowledged      |
| Slither  | Unused return value by `positionManager.mint(params)`                                            | `src/Fundraiser.sol`               | Acknowledged      |
| Slither  | Reentrancy in `Fundraiser.contribute(uint256)`                                                   | `src/Fundraiser.sol`               | nonReentrant      |
| Slither  | Reentrancy in `Fundraiser.finalize()`                                                            | `src/Fundraiser.sol`               | nonReentrant      |
| Slither  | Reentrancy in `Fundraiser.setFailed()`                                                           | `src/Fundraiser.sol`               | nonReentrant      |
| Slither  | Reentrancy in `FundraiserFactory.createFundraiser(bytes,bytes,uint8)`                            | `src/FundraiserFactory.sol`        | nonReentrant      |
| Slither  | Different Solidity version constraints are used across files                                     | Various files                      | Acknowledged      |
| Slither  | Unused import `{IERC165}` in `IERC1363.sol`                                                      | `lib/openzeppelin-contracts/`      | Acknowledged      |
| Slither  | Unused import `{IERC20}` in `IERC1363.sol`                                                       | `lib/openzeppelin-contracts/`      | Acknowledged      |
| Slither  | Unused import `{IERC20}` in `IERC20.sol`                                                         | `lib/openzeppelin-contracts/`      | Acknowledged      |
| Slither  | Unused import `{IERC165}` in `IERC165.sol`                                                       | `lib/openzeppelin-contracts/`      | Acknowledged      |

