
//# 1909. Remove One Element to Make the Array Strictly Increasing

/*
Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly 
one element, or false otherwise. If the array is already strictly increasing, return true.

The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).
*/


// SOLUTION:

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canBeIncreasing = function (nums) {
    let count = 0;
    let i = 1;

    while (i < nums.length) {
        if (nums[i - 1] >= nums[i]) {
            count++;

            if (i !== 1 && nums[i - 2] < nums[i]) {
                nums.splice(i - 1, 1);
            } else if (i === 1 && nums[i - 1] > nums[i]) {
                nums.splice(i - 1, 1);
            } else {
                nums.splice(i, 1);
            }

            if (count === 2) return false;
            continue;
        }

        i++;
    }

    return true;
};
