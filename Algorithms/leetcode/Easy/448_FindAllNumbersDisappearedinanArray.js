
//# 448. Find All Numbers Disappeared in an Array

/* 
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the 
integers in the range [1, n] that do not appear in nums.
*/

// SOLUTION 1

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let n = nums.length;
    nums = new Set(nums);
    let res = [];

    for (let i = 1; i <= n; i++) {
        if (!nums.has(i)) {
            res.push(i)
        }
    }

    return res;
};


// SOLUTION 2 

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
    let k = nums.length + 1;
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        nums[nums[i] % k - 1] = nums[nums[i] % k - 1] + k;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < k) res.push(i + 1);
    }

    return res;
};

