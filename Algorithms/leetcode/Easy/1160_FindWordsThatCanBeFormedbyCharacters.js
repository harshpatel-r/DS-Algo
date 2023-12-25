
//# 1160. Find Words That Can Be Formed by Characters

/*
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.
*/

// SOLUTION

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function (words, chars) {
    let letters = new Array(26).fill(0);
    let totalValidSum = 0;

    for (let i = 0; i < chars.length; i++) {
        let ind = chars[i].charCodeAt(0) - 97;
        letters[ind]++;
    }

    for (let word of words) {
        let wordLetters = new Array(26).fill(0);
        totalValidSum += word.length;

        for (let i = 0; i < word.length; i++) {
            let ind = word[i].charCodeAt(0) - 97;
            wordLetters[ind]++;
        }

        for (let i = 0; i < letters.length; i++) {
            if (!(letters[i] >= wordLetters[i])) {
                totalValidSum -= word.length;
                break;
            }
        }
    }

    return totalValidSum;
};
