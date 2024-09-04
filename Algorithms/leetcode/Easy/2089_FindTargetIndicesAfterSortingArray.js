
//# 2089. Find Target Indices After Sorting Array

/*
You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. 
If there are no target indices, return an empty list. The returned list must be sorted 
in increasing order.
*/


// SOLUTION 1:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    nums.sort((a, b) => a - b);

    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) return res;

        if (nums[i] === target) res.push(i);
    }

    return res;
};


// SOLUTION 2:

var targetIndices = function (nums, target) {
    let totalNums = {};
    let res = [];

    for (let num of nums) {
        totalNums[num] = (totalNums[num] | 0) + 1;
    }

    let lastIndex = -1;
    let index = 0;

    for (let num in totalNums) {
        if (num > target) {
            break;
        }

        if (num == target) {
            lastIndex = index + totalNums[num];
            break;
        } else {
            index += totalNums[num];
        }
    }

    for (let i = index; i < lastIndex; i++) {
        res.push(i);
    }

    return res;
};

