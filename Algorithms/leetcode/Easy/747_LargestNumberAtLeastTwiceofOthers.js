
//# 747. Largest Number At Least Twice of Others

/*
You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number 
in the array. If it is, return the index of the largest element, or return -1 otherwise.
*/


// SOLUTION

/**
 * @param {number[]} nums
 * @return {number}
 */

var dominantIndex = function (nums) {
    let maxNum = Math.max(...nums);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== maxNum && nums[i] * 2 > maxNum) {
            return -1;
        }
    }

    return nums.indexOf(maxNum);
};
