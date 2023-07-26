
//# 290. Word Pattern

/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a 
non-empty word in s.
*/

// SOLUTION


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function (pattern, s) {
    pattern = pattern.split("")
    s = s.split(" ");

    if (s.length !== pattern.length) return false;

    let newVal = new Set()
    let obj = {};

    for (let i = 0; i < s.length; i++) {
        if (obj[pattern[i]] === undefined) {
            if (newVal.has(s[i])) {
                return false
            }
            obj[pattern[i]] = s[i];
            newVal.add(s[i])
        }

        if (obj[pattern[i]] !== s[i]) {
            return false;
        }
    }
    return true;
};
