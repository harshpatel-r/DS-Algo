
//# 1832. Check if the Sentence Is Pangram

/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/


// SOLUTION

/**
 * @param {string} sentence
 * @return {boolean}
 */

var checkIfPangram = function (sentence) {
    let uniqueLetters = new Set(sentence);

    return uniqueLetters.size === 26;
};
