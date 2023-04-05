
//# Sum of two large numbers

// Given two strings denoting non-negative numbers X and Y. Calculate the sum of X and Y. 

// SOLUTION


// User function Template for javascript
/**
 * @param {string} X
 * @param {string} Y
 * @return {string}
*/

class Solution {
    findSum(X, Y) {
        // code here
        X = BigInt(X);
        Y = BigInt(Y);
        let ans = X + Y;
        return ans.toString();
    }
}
