
//# 896. Monotonic Array

/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone 
decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/


// SOLUTION 1:

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isMonotonic = function (nums) {
    if (nums.length < 3) return true;

    let isDescending = nums[0] > nums[nums.length - 1];

    for (let i = 0; i < nums.length - 1; i++) {
        if (isDescending && !(nums[i] >= nums[i + 1])) {
            return false;
        }
        if (!isDescending && !(nums[i] <= nums[i + 1])) {
            return false;
        }
    }

    return true;
};

// SOLUTION 2:

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isMonotonic = function (nums) {
    if (nums.length < 3) return true;

    let n = nums.length;
    let monotone = nums[0] > nums[n - 1] ? "desc" : "asc";

    if (monotone === undefined) return true;

    for (let i = 0; i < n - 1; i++) {
        if (monotone === "desc") {
            if (!(nums[i] >= nums[i + 1])) {
                return false;
            }
            continue;
        }

        if (monotone === "asc") {
            if (!(nums[i] <= nums[i + 1])) {
                return false;
            }
        }
    }

    return true;
};
