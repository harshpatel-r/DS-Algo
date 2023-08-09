
//# 520. Detect Capital

/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".

Given a string word, return true if the usage of capitals in it is right.
*/

// SOLUTION


/**
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function (word) {
    let capital = word.toUpperCase();
    let lower = word.toLowerCase();

    if (capital === word || lower === word) {
        return true
    } else {
        return word.slice(1) === lower.slice(1) ? true : false;
    }
}
