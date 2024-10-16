
//# 2068. Check Whether Two Strings are Almost Equivalent

/*
Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of 
each letter from 'a' to 'z' between word1 and word2 is at most 3.

Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, 
or false otherwise.

The frequency of a letter x is the number of times it occurs in the string.
*/


// SOLUTION:

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

var checkAlmostEquivalent = function (word1, word2) {
    let freq = {};

    for (let letter of word1) {
        freq[letter] = (freq[letter] || 0) + 1;
    }

    for (let letter of word2) {
        freq[letter] = (freq[letter] || 0) - 1;
    }

    for (let letter in freq) {
        if (Math.abs(freq[letter]) > 3) return false;
    }

    return true;
};
