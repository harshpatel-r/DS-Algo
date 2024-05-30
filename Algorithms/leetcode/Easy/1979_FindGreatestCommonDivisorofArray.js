
//# 1979. Find Greatest Common Divisor of Array

/*
Given an integer array nums, return the greatest common divisor of the smallest number and largest number in 
nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
*/


// SOLUTION:

/**
 * @param {number[]} nums
 * @return {number}
 */

var findGCD = function (nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    };

    return gcd(min, max);
};
