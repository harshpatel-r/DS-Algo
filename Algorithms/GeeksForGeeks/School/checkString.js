
//# Check String

// Given a string, check if all its characters are the same or not.

// SOLUTION

//User function Template for javascript

/**
 * @param {string} s
 * @return {boolean}
*/

class Solution {
    check(s) {
        if (s.length == 1) return true;
        for (let i = 0; i < s.length - 1; i++) {
            if (!(s[i] === s[i + 1])) {
                return false;
            }
        }
        return true;
    }
}
