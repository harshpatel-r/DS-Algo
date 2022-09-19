
//# CHECK FOR BINARY 

// Given a non-empty sequence of characters str, return true if sequence is Binary, else return false.

// SOLUTION

//User function Template for javascript

/**
 * @param {string} str
 * @returns {boolean}
*/

class Solution {
    isBinary(str) {
        //code here
        str = str.toString()
        let isbinary = false;
        if (str.length != 1) {
            if (str.includes("0") && str.includes("1")) isbinary = true;
        }
        else {
            if (str.includes("0") || str.includes("1")) isbinary = true;
        }
        return isbinary
    }
}