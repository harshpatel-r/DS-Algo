
//# 1309. Decrypt String from Alphabet to Integer Mapping

/*
You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {string}
 */

var freqAlphabets = function (s) {
    let n = s.length;
    let str = "";

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === "#") {
            str = String.fromCharCode(96 + parseInt(s.slice(i - 2, i))) + str;
            i -= 2;
        } else {
            str = String.fromCharCode(96 + parseInt(s[i])) + str;
        }
    }

    return str;
};
