
//# 884. Uncommon Words from Two Sentences

/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
*/


// SOLUTION 

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

var uncommonFromSentences = function (s1, s2) {
    const combinedWords = [...s1.split(" "), ...s2.split(" ")];
    const totalWords = {};
    const result = [];

    for (let word of combinedWords) {
        totalWords[word] ? totalWords[word]++ : totalWords[word] = 1;
    }

    for (let key in totalWords) {
        if (totalWords[key] === 1) {
            result.push(key);
        }
    }

    return result;
};
