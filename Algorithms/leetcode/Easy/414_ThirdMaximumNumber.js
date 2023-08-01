
//# 414. Third Maximum Number

/*
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum 
does not exist, return the maximum number.
*/

// SOLUTION


/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function(nums) {
    nums = [...new Set(nums)];
    nums = nums.sort((a,b) => b-a);
    return nums.length > 2 ? nums[2] : nums[0];
};



// SOLUTION 2
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var thirdMax = function(nums) {
//     const set = new Set(nums.sort((a, b) => b - a));
//     const setIter = set.values();
//     if (set.size < 3) {
//         return setIter.next().value;
//     } else {
//         setIter.next().value;
//         setIter.next().value;
//         return setIter.next().value;
//     }
// };
