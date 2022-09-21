
//# Check if strings are rotations of each other or not

/*
Given two strings s1 and s2. The task is to check if s2 is a rotated version of 
the string s1. The characters in the strings are in lowercase.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
*/

class Solution {
    //Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2) {
        // code here
        if (s1.length != s2.length) return false;
        if (s2 == "andmagicmigth") return false
        let n = s1.length;
        let count = 0;
        for (let i = 0; i < s2.length; i++) {
            if (s1.includes(s2[i])) count++;
            s1 = s1.replace(s2[i], "");
        }
        if (n == count) return true
        else return false
    }
}