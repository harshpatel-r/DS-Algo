
//# 409. Longest Palindrome

/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome 
that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

// SOLUTION

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
    let obj = {};
    let odd = 0;
    let even = 0;

    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] ? obj[s[i]] += 1 : 1;
    }

    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            even += obj[key]
        } else {
            even += obj[key] - 1;
            if (odd === 0) {
                odd++;
            }
        }
    }

    return odd + even;
};
