
//# Check if a string is Isogram or not

/*
Given a string S of lowercase alphabets, check if it is isogram or not. 
An Isogram is a string in which no letter occurs more than once.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string} s
 * @returns {boolean}
*/

class Solution {
    //Function to check if a string is Isogram or not.
    isIsogram(s) {
        for (let i = 0; i < s.length - 1; i++) {
            for (let j = i + 1; j < s.length; j++) {
                if (s[i] == s[j]) return false
            }
        }
        return true
    }
}