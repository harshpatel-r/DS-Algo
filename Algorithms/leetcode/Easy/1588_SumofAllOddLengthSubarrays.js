
//# 1588. Sum of All Odd Length Subarrays

/*
Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.
*/


// SOLUTION 1:

/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let prefixSum = 0;
        for (let j = i; j < arr.length; j++) {
            prefixSum += arr[j];
            if ((j - i + 1) % 2 === 1) {
                sum += prefixSum;
            }
        }
    }

    return sum;
};


// SOLUTION 2:

/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    let odd = 1;
    let n = odd - 1;

    for (let i = 0; i < arr.length - n; i++) {
        for (let j = i; j < i + odd; j++) {
            sum += arr[j];
        }

        if (i === arr.length - n - 1) {
            odd += 2;

            if (odd <= arr.length) {
                n = odd - 1;
                i = -1;
            } else {
                break;
            }
        }
    }

    return sum;
};
