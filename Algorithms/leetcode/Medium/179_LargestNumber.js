
//# 179. Largest Number

/*
Given a list of non-negative integers nums, arrange them such that they form the largest number 
and return it.

Since the result may be very large, so you need to return a string instead of an integer.
*/


// SOLUTION:

/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function (nums) {
    nums = nums.map(String);

    nums.sort((a, b) => (b + a) - (a + b));

    let result = nums.join('');

    return result[0] === '0' ? '0' : result;
};
