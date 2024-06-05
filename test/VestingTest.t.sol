// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../src/Vesting.sol";
import "../src/test/MockERC20.sol";

contract VestingTest is Test {
    MockERC20 private token;
    Vesting private vesting;
    address private owner;
    address private nonOwner;
    address private beneficiary;
    uint256 private start;
    uint256 private duration;
    uint256 private amount;

    function setUp() public {
        owner = address(this);
        nonOwner = address(0x456);
        beneficiary = address(0x123);
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
        assertEq(vestingStart, start, "Vesting start mismatch");
        assertEq(vestingDuration, duration, "Vesting duration mismatch");
        assertEq(totalVestingAmount, amount, "Vesting amount mismatch");
        assertEq(releasedAmount, 0, "Released amount should be zero");
    }

    function testNonOwnerCannotAddVestingSchedule() public {
        vm.prank(nonOwner); // Set the message sender to nonOwner
        (bool success, ) = address(vesting).call(abi.encodeWithSignature("addVestingSchedule(address,uint256,uint256,uint256)", beneficiary, start, duration, amount));
        require(!success, "Non-owner should not be able to add vesting schedule");
    }

    function testInvalidParameters() public {
        (bool success, ) = address(vesting).call(abi.encodeWithSignature("addVestingSchedule(address,uint256,uint256,uint256)", address(0), start, duration, amount));
        require(!success, "Adding vesting schedule with zero address should fail");

        (success, ) = address(vesting).call(abi.encodeWithSignature("addVestingSchedule(address,uint256,uint256,uint256)", beneficiary, start, duration, 0));
        require(!success, "Adding vesting schedule with zero amount should fail");

        (success, ) = address(vesting).call(abi.encodeWithSignature("addVestingSchedule(address,uint256,uint256,uint256)", beneficiary, start, 0, amount));
        require(!success, "Adding vesting schedule with zero duration should fail");
    }

    function testCannotOverwriteVestingSchedule() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        // Attempt to overwrite the vesting schedule for the same beneficiary
        (bool success, ) = address(vesting).call(abi.encodeWithSignature("addVestingSchedule(address,uint256,uint256,uint256)", beneficiary, start + 100, duration, amount + 1000));
        require(!success, "Vesting schedule should not be overwritable");
    }

    function testPartialReleaseVestedTokens() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        // Fast forward time to 1/4 through the vesting period
        uint256 quarterDuration = duration / 4;
        vm.warp(start + quarterDuration);

        uint256 releasable = vesting.releasableAmount(beneficiary);
        require(releasable >= amount / 4 - 1 && releasable <= amount / 4 + 1, "Releasable amount mismatch");

        vesting.releaseFor(beneficiary);

        (uint256 vestingStart, uint256 vestingDuration, uint256 totalVestingAmount, uint256 releasedAmount) = vesting.vestingSchedules(beneficiary);
        require(releasedAmount == releasable, "Released amount mismatch after partial release");

        // Fast forward time to halfway through the vesting period
        uint256 halfDuration = duration / 2;
        vm.warp(start + halfDuration);

        releasable = vesting.releasableAmount(beneficiary) + releasedAmount; // releasable amount should be cumulative
        
        require(releasable >= amount / 2 - 1 && releasable <= amount / 2 + 1, "Releasable amount mismatch at halfway");

        vesting.releaseFor(beneficiary);

        (, , , releasedAmount) = vesting.vestingSchedules(beneficiary);
        require(releasedAmount == amount / 2, "Released amount mismatch after half release");
    }

    function testFinalVestingAmount() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        // Fast forward time to the end of the vesting period
        vm.warp(start + duration);

        uint256 releasable = vesting.releasableAmount(beneficiary);
        require(releasable == amount, "Releasable amount should equal the total vesting amount");

        vesting.releaseFor(beneficiary);

        (, , , uint256 releasedAmount) = vesting.vestingSchedules(beneficiary);
        require(releasedAmount == amount, "Released amount should equal the total vesting amount");
    }

    function testCannotReleaseBeforeVestingStart() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        (bool success, ) = address(vesting).call(abi.encodeWithSignature("releaseFor(address)", beneficiary));
        require(!success, "Releasing tokens before vesting start should fail");
    }

    function testCannotReleaseMoreThanVested() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        // Fast forward time to the end of the vesting period
        vm.warp(block.timestamp + duration);

        vesting.releaseFor(beneficiary);

        (bool success, ) = address(vesting).call(abi.encodeWithSignature("releaseFor(address)", beneficiary));
        require(!success, "Releasing more tokens than vested should fail");
    }

    function testReleasableAmountCalculation() public {
        vesting.addVestingSchedule(beneficiary, start, duration, amount);

        // Test at different points in time
        uint256[] memory times = new uint256[](5);
        times[0] = start + duration / 4;
        times[1] = start + duration / 2;
        times[2] = start + (3 * duration) / 4;
        times[3] = start + duration;
        times[4] = start + (5 * duration) / 4; // After vesting period

        uint256[] memory expectedReleasable = new uint256[](5);
        expectedReleasable[0] = amount / 4;
        expectedReleasable[1] = amount / 2;
        expectedReleasable[2] = (3 * amount) / 4;
        expectedReleasable[3] = amount;
        expectedReleasable[4] = amount; // No more vesting after duration

        for (uint256 i = 0; i < times.length; i++) {
            vm.warp(times[i]);

            uint256 releasable = vesting.releasableAmount(beneficiary);
            require(releasable >= expectedReleasable[i] - 1 && releasable <= expectedReleasable[i] + 1, "Releasable amount mismatch at time point");
        }
    }
}
