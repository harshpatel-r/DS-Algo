
//# 383. Ransom Note

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters 
from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

// SOLUTION

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
    let obj = {};

    for (let i = 0; i < magazine.length; i++) {
        obj[magazine[i]] = obj[magazine[i]] ? obj[magazine[i]] += 1 : 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (obj[ransomNote[i]] > 0) {
            obj[ransomNote[i]] -= 1
        } else {
            return false
        }
    }
    
    return true;
};