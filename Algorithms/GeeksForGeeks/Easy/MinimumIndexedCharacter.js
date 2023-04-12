
//Minimum indexed character

// Given a string S and another string patt. Find the character in patt that is present at the minimum index in S.

// SOLUTION


//User function Template for javascript

/** 
 * @param {string} str
 * @param {string} patt
 * @return {string}
*/

class Solution {

    printMinIndexChar(S, patt) {
        //code here
        for (let i = 0; i < S.length; i++) {
            if (patt.includes(S[i])) {
                return S[i];
            }
        }
        
        return "$";
    }
}