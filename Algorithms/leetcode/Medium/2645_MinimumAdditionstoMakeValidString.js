
//# 2645. Minimum Additions to Make Valid String

/*
Given a string word to which you can insert letters "a", "b" or "c" anywhere and any number of times, return the 
minimum number of letters that must be inserted so that word becomes valid.

A string is called valid if it can be formed by concatenating the string "abc" several times.
*/


// SOLUTION

/**
 * @param {string} word
 * @return {number}
 */

var addMinimum = function (word) {
    let i = 0;
    let output = 0;

    while (i < word.length) {
        let k = 0;
        if (word[i] === "a") {
            i++;
            k++;
        }

        if (i < word.length && word[i] === "b") {
            i++;
            k++;
        }

        if (i < word.length && word[i] === "c") {
            i++;
            k++;
        }

        output += 3 - k;
    }

    return output;
};
