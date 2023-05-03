
//# longest substring containing '1'

/*
Given a function that takes a binary string. The task is to return the longest size of contiguous substring containing 
only ‘1’.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string} S
 * @return {number}
*/

class Solution {
    maxLength(S) {
        //code here
        let res = 0;
        let count = 0;

        for (let i = 0; i < S.length; i++) {
            if (S[i] == "1") {
                count += 1;
            } else {
                if (count > res) {
                    res = count;
                }
                count = 0;
            }

            if (i == S.length - 1) {
                if (count > res) {
                    res = count;
                }
            }
        }
        
        return res;
    }
}