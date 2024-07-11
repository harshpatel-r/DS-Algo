
//# 594. Longest Harmonious Subsequence

/*
We define a harmonious array as an array where the difference between its maximum value and its 
minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all 
its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no 
elements without changing the order of the remaining elements.
*/


// SOLUTION:

/**
 * @param {number[]} nums
 * @return {number}
 */

var findLHS = function (nums) {
    let totalNums = {};
    let maxLength = 0;

    // Count occurrences of each number
    for (let i = 0; i < nums.length; i++) {
        totalNums[nums[i]] = (totalNums[nums[i]] || 0) + 1;
    }

    // Check for the longest harmonious subsequence
    for (let key in totalNums) {
        let num = parseInt(key);
        if (totalNums[num + 1] !== undefined) {
            maxLength = Math.max(maxLength, totalNums[num] + totalNums[num + 1]);
        }
    }

    return maxLength;
};
