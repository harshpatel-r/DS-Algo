
//# Convert a list of characters into a String

// Given a list of characters, merge all of them into a string.

// SOLUTION 

//User function Template for javascript

/**
 * @param {char[]} arr
 * @param {number} n
 * @returns {string}
*/

class Solution {
    chartostr(arr, n) {
        //code here
        let ans = "";
        for (let i = 0; i < n; i++) {
            ans += arr[i];
        }
        return ans
    }
}
