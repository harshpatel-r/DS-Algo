
//# Delete alternate characters

// Given a string S as input. Delete the characters at odd indices of the string.

// SOLUTION

//User function Template for javascript

/**
 * @param {String} S
 * @returns {String}
*/

class Solution {
    delAlternate(S) {
        let evenVal = "";
        for (let i = 0; i < S.length; i += 2) {
            evenVal += S[i];
        }
        return evenVal;
    }
}

