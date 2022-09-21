
//# Remove Spaces

// Given a string, remove spaces from it. 

// SOLUTION

//User function Template for javascript

/**
 * @param {string}s
 * @returns {string}
*/

class Solution {
    modify(s) {
        //code here
        s = s.split(" ");
        let ans = "";
        for (let i of s) {
            ans += i;
        }
        return ans;
    }
}
