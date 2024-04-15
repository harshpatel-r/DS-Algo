
//# 2942. Find Words Containing Character

/*
You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.
*/


// SOLUTION :

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

var findWordsContaining = function (words, x) {
    let res = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            res.push(i);
        }
    }

    return res;
};
