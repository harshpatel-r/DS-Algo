
//# Sum Of Digits

// Given a number, N. Find the sum of all the digits of N

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
*/

class Solution {

    sumOfDigits(N) {
        let s = N.toString();
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            res += parseInt(s[i]);
        }
        return res;
    }
}