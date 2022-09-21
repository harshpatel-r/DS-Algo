
//# Display longest name

// Given a list of names, display the longest name.

// SOLUTION

//User function Template for javascript

/**
 * @param {string[]} names
 * @param {number} n
 * @return {number}
*/

class Solution {
    longest(names, n) {
        let max = 0;
        let ans;
        for (let i = 0; i < n; i++) {
            if (names[i].length > max) {
                max = names[i].length
                ans = names[i]
            }
        }
        return ans;
    }
}