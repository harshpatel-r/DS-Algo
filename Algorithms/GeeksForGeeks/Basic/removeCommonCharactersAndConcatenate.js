
//# Remove common characters and concatenate

/*
Given two strings s1 and s2. Modify both the strings such that all the common
 characters of s1 and s2 are to be removed and the uncommon characters of s1
  and s2 are to be concatenated.
Note: If all characters are removed print -1.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
*/

class Solution {
    //Function to remove common characters and concatenate two strings.
    concatenatedString(s1, s2) {
        // code here
        let res = "";
        for (let i = 0; i < s1.length; i++) {
            if (!(s2.includes([s1[i]]))) {
                res += s1[i];
            }
        }

        for (let j = 0; j < s2.length; j++) {
            if (!(s1.includes([s2[j]]))) {
                res += s2[j];
            }
        }

        if (res.length == 0) return -1;

        return res;
    }
}