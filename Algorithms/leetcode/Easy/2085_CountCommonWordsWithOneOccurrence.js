
//# 2085. Count Common Words With One Occurrence

// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.


// SOLUTION:

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

var countWords = function (words1, words2) {
    let totalWords1 = {};
    let totalWords2 = {};
    let count = 0;

    for (let word of words1) {
        totalWords1[word] = (totalWords1[word] || 0) + 1;
    }

    for (let word of words2) {
        totalWords2[word] = (totalWords2[word] || 0) + 1;
    }

    for (let word in totalWords1) {
        if (totalWords1[word] === 1 && totalWords2[word] === 1) {
            count += 1;
        }
    }

    return count;
};
