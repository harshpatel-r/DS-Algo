
//# Anagram of String

/*
Given two strings S1 and S2 in lowercase, the task is to make them anagram. 
The only allowed operation is to remove a character from any string. Find 
the minimum number of characters to be deleted to make both the strings 
anagram. Two strings are called anagram of each other if one of them can 
be converted into another by rearranging its letters.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @returns {number} 
 */

class Solution {
    remAnagram(str1, str2) {
        // code here
        let match = 0;
        let unmatch = 0;
        let str = str2.split('');

        for (let i = 0; i < str1.length; i++) {
            if (str.includes(str1[i])) {
                let ind = str.indexOf(str1[i]);
                str.splice(ind, 1);
                match++;
            } else {
                unmatch++;
            }
        }

        return unmatch + str.length;
    }
}









