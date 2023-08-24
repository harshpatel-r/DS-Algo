
//# 628. Maximum Product of Three Numbers

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// SOLUTION


/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function (nums) {
    let min1 = Infinity;
    let min2 = Infinity;

    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (min1 > nums[i]) {
            min2 = min1;
            min1 = nums[i]
        } else if (min2 > nums[i]) {
            min2 = nums[i];
        }

        if (nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        } else if (nums[i] > max3) {
            max3 = nums[i];
        }
    }

    let pos = max1 * max2 * max3;
    let neg = min1 * min2 * max1;

    return Math.max(pos, neg);
};
