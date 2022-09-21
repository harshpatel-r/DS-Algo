
//# Palindrome

// Given an integer, check whether it is a palindrome or not.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns {string}
*/

class Solution {
    is_palindrome(n) {
        //code here
        let ans = "No";
        n = n.toString()
        let str = "";
        for (let i = n.length - 1; i >= 0; i--) {
            str += n[i];
        }
        if (n === str) ans = "Yes";
        return ans;
    }
}
