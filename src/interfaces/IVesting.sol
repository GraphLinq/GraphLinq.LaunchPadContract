// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

interface IVesting {
    /**
     * @dev Adds a new vesting schedule for a beneficiary.
     * @param _beneficiary Address of the beneficiary to whom vesting tokens are allocated.
     * @param _start Unix timestamp for when vesting starts.
     * @param _duration Duration in seconds of the entire vesting period.
     * @param _amount Total number of tokens to be vested over the duration.
     */
    function addVestingSchedule(
        address _beneficiary,
        uint256 _start,
        uint256 _duration,
        uint256 _amount
    ) external;

    /**
     * @dev Releases vested tokens to a specified beneficiary.
     * @param beneficiary Address of the beneficiary claiming their vested tokens.
     */
    function releaseFor(address beneficiary) external;

    /**
     * @dev Returns the amount of tokens that have not yet been released but are releasable as of the latest block.
     * @param beneficiary Address of the beneficiary checking their releasable amount.
     * @return The number of tokens releasable.
     */
    function releasableAmount(address beneficiary) external view returns (uint256);
}
