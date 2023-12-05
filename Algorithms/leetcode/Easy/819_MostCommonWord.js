
//# 819. Most Common Word

/*
Given a string paragraph and a string array of the banned words banned, return the most frequent word that 
is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is 
unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.
*/


// SOLUTION

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

var mostCommonWord = function (paragraph, banned) {
    if (!paragraph.trim()) {
        return '';
    }

    let mostOccursWordSize = 0;
    let sumOfTotalWords = {};
    let mostOccursWord;

    // Use a more robust word tokenization method
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);

    for (let word of words) {
        sumOfTotalWords.hasOwnProperty(word) ? sumOfTotalWords[word]++ : sumOfTotalWords[word] = 1;
    }

    for (let key in sumOfTotalWords) {
        if (!banned.includes(key) && mostOccursWordSize < sumOfTotalWords[key]) {
            mostOccursWordSize = sumOfTotalWords[key];
            mostOccursWord = key;
        }
    }

    return mostOccursWord || '';
};
