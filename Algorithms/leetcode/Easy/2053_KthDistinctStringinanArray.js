
//# 2053. Kth Distinct String in an Array

/*
A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. 
If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.
*/


// SOLUTION:

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */

var kthDistinct = function (arr, k) {
    let uniqueStr = {};
    let count = 0;

    for (let str of arr) {
        if (!(str in uniqueStr)) {
            uniqueStr[str] = true;
        } else {
            uniqueStr[str] = false;
        }
    }

    for (let key in uniqueStr) {
        if (uniqueStr[key]) {
            count++;
        }

        if (count === k) {
            return key;
        }
    }

    return "";
};
