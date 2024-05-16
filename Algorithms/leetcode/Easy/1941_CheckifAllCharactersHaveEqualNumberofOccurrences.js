
//# 1941. Check if All Characters Have Equal Number of Occurrences

/*
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
*/


// SOLUTION:

/**
 * @param {string} s
 * @return {boolean}
 */

var areOccurrencesEqual = function (s) {
    let sumOfChar = {};

    for (let char of s) {
        sumOfChar[char] = (sumOfChar[char] || 0) + 1;
    }

    let val = sumOfChar[s[0]];

    for (let char in sumOfChar) {
        if (val !== sumOfChar[char]) {
            return false;
        }
    }

    return true;
};