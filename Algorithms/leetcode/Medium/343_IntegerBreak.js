
//# 343. Integer Break

/*
Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.
*/


// SOLUTION

/**
 * @param {number} n
 * @return {number}
 */

var integerBreak = function (n) {
    if (n <= 3) return n - 1;

    let num = n % 3;

    if (num === 0) {
        return 3 ** (n / 3);
    } else if (num === 1) {
        n = n - 4;
        return (3 ** (n / 3)) * 4;
    } else {
        n = n - 2;
        return (3 ** (n / 3)) * 2;
    }
};
