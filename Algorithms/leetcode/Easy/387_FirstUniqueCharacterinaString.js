
//# 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// SOLUTION

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
    let obj = {};
    let non_repeat = new Set();

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            non_repeat.add(s[i])
            obj[s[i]] = 1
        } else {
            non_repeat.delete(s[i])
        }
    }
    
    return s.indexOf([...non_repeat][0])
};
