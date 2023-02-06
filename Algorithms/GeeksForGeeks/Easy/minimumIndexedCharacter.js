
//# Minimum indexed character

/*
Given a string str and another string patt. Find the minimum index of the character in str that 
is also present in patt.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string} str
 * @param {string} patt
 * @returns {number}
*/
class Solution {
    minIndexChar(str, patt) {
        // code here
        patt = patt.split('');
        let set1 = new Set(patt);
        for (let i = 0; i < str.length; i++) {
            if (set1.has(str[i])) {
                return i;
            }
        }
        return -1;
    }
}
