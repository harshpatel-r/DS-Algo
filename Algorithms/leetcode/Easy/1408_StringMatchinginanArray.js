
//# 1408. String Matching in an Array

/*
Given an array of string words, return all strings in words that is a substring of another word. 
You can return the answer in any order.

A substring is a contiguous sequence of characters within a string
*/


// SOLUTION

/**
 * @param {string[]} words
 * @return {string[]}
 */

var stringMatching = function (words) {
    let res = [];

    for (let i = 0; i < words.length; i++) {
        let regWord = new RegExp(words[i]);

        for (let j = 0; j < words.length; j++) {
            if (i === j) continue;

            if (regWord.test(words[j])) {
                res.push(words[i]);
                break;
            }
        }
    }

    return res;
};
