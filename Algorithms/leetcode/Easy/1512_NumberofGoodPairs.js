
//# 1512. Number of Good Pairs

/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/


// SOLUTION

/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function (nums) {
    let totalNums = {};
    let pair = 0;

    for (let i = 0; i < nums.length; i++) {
        totalNums[nums[i]] ? totalNums[nums[i]]++ : totalNums[nums[i]] = 1;
    }

    for (let key in totalNums) {
        let n = totalNums[key];

        if (n > 1) {
            pair += (n * (n - 1)) / 2;
        }
    }

    return pair;
};
