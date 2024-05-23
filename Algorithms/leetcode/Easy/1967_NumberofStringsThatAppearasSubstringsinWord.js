
//# 1967. Number of Strings That Appear as Substrings in Word

/*
Given an array of strings patterns and a string word, return the number of strings in patterns that exist 
as a substring in word.

A substring is a contiguous sequence of characters within a string.
*/

// SOLUTION:

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */

var numOfStrings = function (patterns, word) {
    let subStrCount = 0;

    for (let value of patterns) {
        if (word.includes(value)) {
            subStrCount++
        };
    }

    return subStrCount;
};
