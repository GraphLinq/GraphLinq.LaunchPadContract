# Project Name: GraphLinq Contracts

## Setting up the repository

### Initialize and update submodules
git submodule update --init --recursive

### Install Foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup

### Install project dependencies
forge install

## Run static analysis

./lint.sh

## Run build

forge build

## Run Tests

forge test --fork-url https://mainnet.infura.io/v3/[API_KEY] --fork-block-number 19946000

## Static Analysis Report

This document details the results of the static analysis performed on the Solidity smart contracts in this project using Solhint and Slither. The issues identified have been reviewed and acknowledged.

| Linter  | Issue                                                                                                       | Severity       | File                                                           | Status      |
|---------|-------------------------------------------------------------------------------------------------------------|----------------|----------------------------------------------------------------|-------------|
| Slither | Reentrancy in `Fundraiser.setFailed()`                                                                      | High           | `src/Fundraiser.sol#144-152`                                   | Alleviated  |
| Slither | Ignored return value by `positionManager.createAndInitializePoolIfNecessary`                                | Medium         | `src/Fundraiser.sol#256-260`                                   | Acknowledged |
| Slither | Reentrancy in `Fundraiser.contribute(uint256)`                                                              | High           | `src/Fundraiser.sol#106-116`                                   | Alleviated  |
| Slither | Reentrancy in `Fundraiser.finalize()`                                                                       | High           | `src/Fundraiser.sol#121-139`                                   | Alleviated  |
| Slither | Reentrancy in `FundraiserFactory.createFundraiser(bytes,bytes,uint8)`                                       | High           | `src/FundraiserFactory.sol#63-111`                             | Alleviated  |
