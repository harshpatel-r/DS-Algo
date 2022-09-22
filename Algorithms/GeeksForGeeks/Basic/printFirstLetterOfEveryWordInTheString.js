
//# Print first letter of every word in the string

// Given a string S, the task is to create a string with the first letter of every word in the string.

// SOLUTION

//User function Template for javascript

/**
 * @param {string} str
 * @returns {str}
*/

class Solution {
    firstAlphabet(str) {
        str = str.split(" ");
        let ans = "";
        for (let i in str) {
            ans += str[i][0];
        }
        return ans;
    }
}
