
//# Check if two strings are k-anagrams or not

/*

Given two strings of lowercase alphabets and a value K, your task is to complete the 
given function which tells if  two strings are K-anagrams of each other or not.

Two strings are called K-anagrams if both of the below conditions are true.
1. Both have same number of characters.
2. Two strings can become anagram by changing at most K characters in a string.

*/


// SOLUTION

//User function Template for javascript

/**
 * @param {string} str1
 * @param {string} str2
 * @param {number} k
 * @returns {boolean}
*/

class Solution {
    areKAnagrams(str1, str2, k) {
        //code here
        let sameChar = 0;
        if (str1.length != str2.length) {
            return false;
        }

        str1 = Array.from(str1).sort();

        for (let i = 0; i < str1.length; i++) {
            if (str2.includes(str1[i])) {
                str2 = str2.replace(str1[i], "");
                sameChar++;
            }
        }
        let res = str1.length - sameChar;
        if (res <= k) {
            return true;
        } else {
            return false;
        }
    }
}