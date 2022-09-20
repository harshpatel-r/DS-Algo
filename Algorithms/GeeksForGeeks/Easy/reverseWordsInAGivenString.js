
//# Reverse words in a given string

// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

// SOLUTION

//User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
*/

class Solution {
    //Function to reverse words in a given string.
    reverseWords(s) {
        let str = s.split(".")
        str = str.reverse();
        str = str.join(".")
        return str
    }
}