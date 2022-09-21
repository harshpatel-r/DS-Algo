
//# Reverse a String

// You are given a string s. You need to reverse the string.

// SOLUTION

//User function Template for javascript

/**
 * @param {string} str
 * @return {string}
*/

class Solution {
    reverseWord(str) {
        //Your code here
        let ans = "";
        for (let i = str.length - 1; i >= 0; i--) {
            ans += str[i];
        }
        return ans;
    }
}