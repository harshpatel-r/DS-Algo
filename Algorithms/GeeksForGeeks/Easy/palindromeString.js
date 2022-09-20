
//# Palindrome String

// Given a string S, check if it is palindrome or not.

// SOLUTION

//User function Template for javascript

/**
 * @param {string} S
 * @return {number}
*/

class Solution {
    isPalindrome(S) {
        let str = ""
        for (let i = S.length - 1; i >= 0; i--) {
            str += S[i]
        }

        if (str == S) {
            return 1;
        } else return 0;
    }
}