
//# Replace all 0's with 5

/*
Given a number N. The task is to complete the function convertFive() which 
replaces all zeros in the number with 5 and returns the number.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @return {number}
*/

class Solution {

    convertFive(n) {

        let s = n.toString();
        let res = "";
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') {
                res += "5";
            } else {
                res += s[i];
            }
        }
        return parseInt(res);
    }
}
