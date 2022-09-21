
//# Reverse a String

// Given a String S , print the reverse of the string as output.

// SOLUTION

//User function Template for javascript

/**
 * @param {string} s
 * @return {string}
*/

class Solution {
    revStr(s) {
        //code here
        let ans = "";
        for (let i = s.length - 1; i >= 0; i--) {
            ans += s[i]
        }
        return ans;
    }
}