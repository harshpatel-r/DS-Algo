
//# 3110. Score of a String

/*
You are given a string s. The score of a string is defined as the sum of the absolute difference 
between the ASCII values of adjacent characters.

Return the score of s.
*/


// SOLUTION:

/**
 * @param {string} s
 * @return {number}
 */

var scoreOfString = function (s) {
    let output = 0;

    for (let i = 0; i < s.length - 1; i++) {
        output += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
    }

    return output;
};