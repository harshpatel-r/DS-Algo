
//# 125. Valid Palindrome

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric 
characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
    let regex = /[^A-Za-z0-9]/gi;
    s = s.replace(regex, "").toLowerCase();

    let n = s.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (s[i] !== s[n - 1 - i]) return false
    }

    return true;
};
