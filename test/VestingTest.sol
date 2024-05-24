// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../contracts/Vesting.sol";
import "../contracts/test/MockERC20.sol";
import "hardhat/console.sol";

contract VestingTest {
    MockERC20 private token;
    Vesting private vesting;
    address private owner;
    address private beneficiary;
    uint256 private start;
    uint256 private duration;
    uint256 private amount;

    function setUp() public {
        owner = msg.sender;
        token = new MockERC20("Test Token", "TT");
        vesting = new Vesting(address(token), owner);
        start = block.timestamp + 60; // vesting starts in 1 minute
        duration = 3600; // 1 hour vesting duration
        amount = 1000 * 10**18; // 1000 tokens with 18 decimals

        token.mint(address(vesting), amount);
    }

    function testAddVestingSchedule() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        (uint256 vestingStart, uint256 vestingDuration, uint256 totalVestingAmount, uint256 releasedAmount) = vesting.vestingSchedules(beneficiary);
        require(vestingStart == start, "Vesting start mismatch");
        require(vestingDuration == duration, "Vesting duration mismatch");
        require(totalVestingAmount == amount, "Vesting amount mismatch");
        require(releasedAmount == 0, "Released amount should be zero");
    }

    function testNonOwnerCannotAddVestingSchedule() public {
        (bool success, ) = address(vesting).delegatecall(abi.encodeWithSignature("addVestingSchedule(address,uint256,uint256,uint256)", beneficiary, start, duration, amount));
        require(!success, "Non-owner should not be able to add vesting schedule");
    }

    function testInvalidParameters() public {
        (bool success, ) = address(vesting).delegatecall(abi.encodeWithSignature("addVestingSchedule(address,uint256,uint256,uint256)", address(0), start, duration, amount));
        require(!success, "Adding vesting schedule with zero address should fail");

        (success, ) = address(vesting).delegatecall(abi.encodeWithSignature("addVestingSchedule(address,uint256,uint256,uint256)", beneficiary, start, duration, 0));
        require(!success, "Adding vesting schedule with zero amount should fail");

        (success, ) = address(vesting).delegatecall(abi.encodeWithSignature("addVestingSchedule(address,uint256,uint256,uint256)", beneficiary, start, 0, amount));
        require(!success, "Adding vesting schedule with zero duration should fail");
    }

    function testReleaseVestedTokens() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        // Fast forward time to halfway through the vesting period
        uint256 halfDuration = duration / 2;
        block.timestamp += halfDuration;

        uint256 releasable = vesting.releasableAmount(beneficiary);
        require(releasable >= amount / 2 - 1 && releasable <= amount / 2 + 1, "Releasable amount mismatch");

        vesting.releaseFor(beneficiary);

        (uint256 vestingStart, uint256 vestingDuration, uint256 totalVestingAmount, uint256 releasedAmount) = vesting.vestingSchedules(beneficiary);
        require(releasedAmount == releasable, "Released amount mismatch");
    }

    function testCannotReleaseBeforeVestingStart() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        (bool success, ) = address(vesting).delegatecall(abi.encodeWithSignature("releaseFor(address)", beneficiary));
        require(!success, "Releasing tokens before vesting start should fail");
    }

    function testCannotReleaseMoreThanVested() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        // Fast forward time to the end of the vesting period
        block.timestamp += duration;

        vesting.releaseFor(beneficiary);

        (bool success, ) = address(vesting).delegatecall(abi.encodeWithSignature("releaseFor(address)", beneficiary));
        require(!success, "Releasing more tokens than vested should fail");
    }
}
