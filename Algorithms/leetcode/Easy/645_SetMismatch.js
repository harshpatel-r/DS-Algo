
//# 645. Set Mismatch

/*
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some 
error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one 
number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.
*/

// SOLUTION


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function (nums) {
    let i = 0;

    while (i < nums.length) {
        const idx = nums[i] - 1;
        if (nums[idx] !== nums[i]) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const expected = i + 1;
        if (expected === nums[i]) continue;

        return [nums[i], expected];
    }
};
