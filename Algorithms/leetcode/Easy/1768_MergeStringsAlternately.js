
//# 1768. Merge Strings Alternately

/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
starting with word1. If a string is longer than the other, append the additional letters onto the 
end of the merged string.

Return the merged string.
*/


// SOLUTION

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
    let str = "";
    let ind = 0;
    let n = Math.min(word1.length, word2.length);

    for (let i = 0; i < n; i++) {
        str += word1[ind] + word2[ind];
        ind++;
    }

    word1.length > word2.length ? str += word1.slice(ind) : str += word2.slice(ind);

    return str;
};
