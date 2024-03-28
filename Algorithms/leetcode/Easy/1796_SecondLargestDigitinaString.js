
//# 1796. Second Largest Digit in a String

/*
Given an alphanumeric string s, return the second largest numerical digit that appears in s, 
or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {number}
 */

var secondHighest = function (s) {
    const regex = /\d/g;
    let numbers = s.match(regex);

    if (!numbers || numbers.length < 2) {
        return -1;
    }

    numbers = [...new Set(numbers)].sort((a, b) => b - a);

    return numbers[1] || -1;
};
