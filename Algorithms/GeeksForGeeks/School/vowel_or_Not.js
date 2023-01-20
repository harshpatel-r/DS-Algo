
//# Vowel or Not

// Given a English alphabet c, Write a program to check whether a character is a vowel or not.

// SOLUTION

//User function Template for javascript

/**
 * @param {string} c
 * @return {string}
 */
class Solution {
    isVowel(c) {
        //code here
        return "aioeuAIOEU".includes(c) ? "YES" : "NO";
    }
}
