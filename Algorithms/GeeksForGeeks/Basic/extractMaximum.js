
//# Extract Maximum

// Given a alphanumeric string S, extract maximum numeric value from S.

// SOLUTION


//User function Template for javascript

/**
 * @param {string} s
 * @return {number}
*/

class Solution {
    extractMaximum(S) {
        //code here
        let n = S.length;
        let maxNum = -1;
        let num = ""

        for (let i = 0; i <= n; i++) {
            let a = parseInt(S[i]);

            if (!isNaN(a)) {
                num += S[i];
            } else {
                if (maxNum < parseInt(num)) {
                    maxNum = parseInt(num);
                }
                num = "";
            }
        }
        
        return maxNum;
    }
}
