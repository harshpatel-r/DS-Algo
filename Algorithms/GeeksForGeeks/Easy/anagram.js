
//# Anagram

/*
Given two strings a and b consisting of lowercase characters. The task is to check whether 
two given strings are an anagram of each other or not. An anagram of a string is another 
string that contains the same characters, only the order of characters can be different. 
For example, act and tac are an anagram of each other.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
*/

class Solution {
    //Function is to check whether two strings are anagram of each other or not.
    isAnagram(a, b) {
        a = a.split("").sort();
        b = b.split("").sort();
        a = a.join("");
        b = b.join("");
        if (a == b) {
            return true
        } else {
            return false
        }
    }
}