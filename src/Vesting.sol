// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./interfaces/IVesting.sol";

contract Vesting is ReentrancyGuard, Ownable, IVesting {
    using SafeERC20 for IERC20;

    // The token being vested
    IERC20 immutable public TOKEN;

    // Structure to store vesting schedules
    struct VestingSchedule {
        uint256 vestingStart;
        uint256 vestingDuration;
        uint256 totalVestingAmount;
        uint256 releasedAmount;
    }

    // Mapping from beneficiary address to their vesting schedule
    mapping(address => VestingSchedule) public vestingSchedules;

    // Events
    event TokensReleased(address indexed beneficiary, uint256 amount);
    event VestingAdded(address indexed beneficiary, uint256 totalAmount, uint256 start, uint256 duration);

    /**
     * @dev Constructor to initialize the vesting contract
     * @param _token The token to be vested
     * @param owner_ The address of the contract owner
     */
    constructor(address _token, address owner_)
    Ownable() {
        require(_token != address(0), "Token address cannot be zero");
        TOKEN = IERC20(_token);
        _transferOwnership(owner_);
    }

    /**
     * @dev Adds a vesting schedule for a beneficiary
     * @param _beneficiary The address of the beneficiary
     * @param _start The start time of the vesting
     * @param _duration The duration of the vesting
     * @param _amount The total amount of tokens to be vested
     */
    function addVestingSchedule(
        address _beneficiary,
        uint256 _start,
        uint256 _duration,
        uint256 _amount
    ) public override onlyOwner {
        require(_beneficiary != address(0), "Beneficiary cannot be the zero address");
        require(_amount > 0, "Vesting amount must be positive");
        require(_duration > 0, "Vesting duration must be positive");
        require(vestingSchedules[_beneficiary].vestingStart == 0, "Vesting already set for this beneficiary");

        vestingSchedules[_beneficiary] = VestingSchedule({
            vestingStart: _start,
            vestingDuration: _duration,
            totalVestingAmount: _amount,
            releasedAmount: 0
        });

        emit VestingAdded(_beneficiary, _amount, _start, _duration);
    }

    /**
     * @dev Releases the vested tokens for a beneficiary
     * @param beneficiary The address of the beneficiary
     */
    function releaseFor(address beneficiary) public override nonReentrant {
        VestingSchedule storage schedule = vestingSchedules[beneficiary];
        require(schedule.vestingStart != 0, "Vesting not set for this beneficiary");
        require(block.timestamp >= schedule.vestingStart, "Vesting has not started yet");

        uint256 unreleased = releasableAmount(beneficiary);
        require(unreleased > 0, "No tokens are due for release");

        schedule.releasedAmount += unreleased;
        TOKEN.safeTransfer(beneficiary, unreleased);

        emit TokensReleased(beneficiary, unreleased);
    }

    /**
     * @dev Calculates the releasable amount of tokens for a beneficiary
     * @param beneficiary The address of the beneficiary
     * @return The amount of tokens that can be released
     */
    function releasableAmount(address beneficiary) public override view returns (uint256) {
        VestingSchedule storage schedule = vestingSchedules[beneficiary];
        if (block.timestamp < schedule.vestingStart) {
            return 0;
        }

        uint256 timeElapsed = block.timestamp - schedule.vestingStart;
        uint256 totalReleasable = schedule.totalVestingAmount * timeElapsed / schedule.vestingDuration;

        if (totalReleasable > schedule.totalVestingAmount) {
            totalReleasable = schedule.totalVestingAmount;
        }

        return totalReleasable - schedule.releasedAmount;
    }
}
