
//# 58. Length of Last Word

/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
    let lastWordlen = 0;

    s = s.trim();

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            break;
        } else {
            lastWordlen++;
        }
    }

    return lastWordlen;
};
