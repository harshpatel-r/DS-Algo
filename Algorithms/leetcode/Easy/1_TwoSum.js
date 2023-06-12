
//# 1. Two Sum

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// SOLUTION


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let res = [];

    let arr = nums.slice()
    arr.sort((a, b) => a - b);

    let i = 0, j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];

        if (sum === target) {
            res[0] = arr[i];
            res[1] = arr[j];
            break;
        }

        if (sum > target) {
            j--;
        } else {
            i++;
        }
    }

    res[0] = nums.indexOf(res[0]);
    res[1] = nums.lastIndexOf(res[1]);

    return res
}