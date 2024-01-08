
//# 1295. Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.


// SOLUTION

/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function (nums) {
    let output = 0;

    for (let num of nums) {
        numLen = num.toString().length;

        if (numLen % 2 === 0) {
            output++;
        }
    }

    return output;
};
