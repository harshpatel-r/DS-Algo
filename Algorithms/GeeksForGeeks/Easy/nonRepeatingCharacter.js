
//# Non Repeating Character

/*
Given a string S consisting of lowercase Latin Letters. Return the first non-repeating 
character in S. If there is no non-repeating character, return '$'.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
*/
class Solution {
    //Function to find the first non-repeating character in a string.
    nonrepeatingCharacter(s) {
        // code here
        let n = s.length
        for (let i = 0; i < n; i++) {
            if (i == 0) {
                if (s.indexOf(s[i], i + 1) == -1) {
                    return s[i];
                }
            }

            if (i == n - 1) {
                if (s.lastIndexOf(s[i], i - 1) == -1) {
                    return s[i];
                }
            }

            if (i != 0 && i != n - 1) {
                if (s.indexOf(s[i], i + 1) == -1 && s.lastIndexOf(s[i], i - 1) == -1) {
                    return s[i];
                }
            }
        }
        return "$";
    }
}
