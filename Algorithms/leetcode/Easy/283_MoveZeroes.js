
//# 283. Move Zeroes

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

// SOLUTION


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    let n = nums.length;
    let i = 0;

    while (i < n) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
            --i;
            --n;
        }

        i++;
    }
};
