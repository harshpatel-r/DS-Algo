
//# 217. Contains Duplicate

/*
Given an integer array nums, return true if any value appears at least twice in the array, and 
return false if every element is distinct.
*/

// SOLUTION

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    let newArrSize = new Set(nums).size;
    return nums.length !== newArrSize;
};
