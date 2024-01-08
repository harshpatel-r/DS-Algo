
//# 1304. Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.


// SOLUTION

/**
 * @param {number} n
 * @return {number[]}
 */

var sumZero = function (n) {
    let arr = new Array(n).fill(0);

    for (let i = 0; i < Math.floor(n / 2); i++) {
        arr[i] = i + 1;
        arr[n - 1 - i] = -arr[i]
    }

    return arr;
};
