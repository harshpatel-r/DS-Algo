
//# 1374. Generate a String With Characters That Have Odd Counts

/*
Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  
*/


// SOLUTION

/**
 * @param {number} n
 * @return {string}
 */

var generateTheString = function (n) {
    return n % 2 === 0 ? "a".repeat(n - 1) + "b" : "a".repeat(n);
};
