
//# 485. Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// SOLUTION


/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
    let res = 0;
    let count = 0;

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i]) {
            count += 1
        } else {
            if (res < count) {
                res = count;
            }
            count = 0;
        }
    }

    return res;
};
