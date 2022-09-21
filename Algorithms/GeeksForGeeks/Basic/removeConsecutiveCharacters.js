
//# Remove Consecutive Characters

// Given a string S. For each index i(1<=i<=N-1), erase it if s[i] is equal to s[i-1] in the string.

// SOLUTION

//User function Template for javascript

/**
 * @param {string} s
 * @returns {string}
*/

class Solution {
    removeConsecutiveCharacter(s) {
        let str = ""
        let n = s.length - 1;
        for (let i = 0; i <= n; i++) {
            if (s[i] != s[i + 1]) {
                str += s[i]
            }
        }
        return str
    }
}


