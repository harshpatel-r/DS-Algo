
//# 1748. Sum of Unique Elements

/*
You are given an integer array nums. The unique elements of an array are the elements that appear 
exactly once in the array.

Return the sum of all the unique elements of nums.
*/


// SOLUTION

/**
 * @param {number[]} nums
 * @return {number}
 */

var sumOfUnique = function (nums) {
    let totalNums = {};
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        totalNums[nums[i]] ? totalNums[nums[i]]++ : totalNums[nums[i]] = 1;
    }

    for (let num in totalNums) {
        if (totalNums[num] === 1) {
            sum += parseInt(num);
        }
    }

    return sum;
};
