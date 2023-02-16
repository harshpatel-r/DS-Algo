
//# Remaining String

/*
Given a string S without spaces, a character ch, and an integer count, the task is to find 
the string after the specified character has occurred count number of times. 
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string} S
 * @param {string} ch
 * @param {number} count
 * @return {string}
*/

class Solution {
    printString(S, ch, count) {
        //code here
        let C = 0;

        for (let i = 0; i < S.length; i++) {
            if (C === count) {
                return S.slice(i);
            }

            if (S[i] === ch) {
                C += 1;
            }
        }

        return 'Empty string';
    }
}