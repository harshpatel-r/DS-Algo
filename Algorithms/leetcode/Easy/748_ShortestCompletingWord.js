
//# 748. Shortest Completing Word

/*
Given a string licensePlate and an array of strings words, find the shortest completing word in words.

A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces 
in licensePlate, and treat letters as case insensitive. If a letter appears more than once in 
licensePlate, then it must appear in the word the same number of times or more.

For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' 
twice. Possible completing words are "abccdef", "caaacab", and "cbca".

Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple 
shortest completing words, return the first one that occurs in words.
*/


// SOLUTION:

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

var shortestCompletingWord = function (licensePlate, words) {
    let letters = {};
    let totalLetters = 0;
    let res = "";

    for (let char of licensePlate) {
        if (isNaN(char) && char !== ' ') {
            let letter = char.toLowerCase();
            letters[letter] = (letters[letter] || 0) + 1;
            totalLetters++;
        }
    }

    for (let word of words) {
        let count = totalLetters;
        let tempLetters = { ...letters };

        for (let char of word) {
            if (tempLetters[char] !== undefined && tempLetters[char] > 0) {
                tempLetters[char]--;
                count--;
            }
        }

        if (count === 0 && (word.length < res.length || res === "")) {
            res = word;
        }
    }

    return res;
};
