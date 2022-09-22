
//# Repeated Character

/*
Given a string consisting of lowercase english alphabets. Find the 
repeated character present first in the string.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {string} s
 * @return {string}
*/

class Solution {
    firstRep(s) {
        let n = s.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 1 + i; j < n; j++) {
                if (s[i] == s[j]) return s[i]
            }
        }
        return -1;
    }
}