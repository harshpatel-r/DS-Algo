
//# 2006. Count Number of Pairs With Absolute Difference K

/*
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such 
that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
*/


// SOLUTION:

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var countKDifference = function (nums, k) {
    let pairs = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let diff = Math.abs(nums[i] - nums[j]);
            if (k === diff) pairs++;
        }
    }

    return pairs;
};
