
//# 1464. Maximum Product of Two Elements in an Array

/*
Given the array of integers nums, you will choose two different indices i and j of that array. 
Return the maximum value of (nums[i]-1)*(nums[j]-1).
*/


// SOLUTION 1 :

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
    nums.sort((a, b) => b - a);

    return (nums[0] - 1) * (nums[1] - 1);
};


// SOLUTION 2 :

var maxProduct = function (nums) {
    let max1 = Math.max(nums[0], nums[1]);
    let max2 = Math.min(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > max1) {
            max2 = max1
            max1 = nums[i]
        } else if (nums[i] > max2) {
            max2 = nums[i]
        }
    }

    return (max1 - 1) * (max2 - 1);
};
