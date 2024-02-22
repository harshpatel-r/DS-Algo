
//# 1221. Split a String in Balanced Strings

/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

-> Each substring is balanced.

Return the maximum number of balanced strings you can obtain.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {number}
 */

var balancedStringSplit = function (s) {
    let totalSubStr = 0;
    let rCount = 0;
    let lCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            rCount++;
        }

        if (s[i] === "L") {
            lCount++;
        }

        if (rCount === lCount) {
            totalSubStr++;
            rCount = 0;
            lCount = 0;
        }
    }

    return totalSubStr;
};
