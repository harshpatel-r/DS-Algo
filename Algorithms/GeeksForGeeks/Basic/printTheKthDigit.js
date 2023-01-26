
//# Print the Kth Digit

// Given two numbers A and B, find Kth digit from right of AB.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} A
 * @param {number} B
 * @param {number} K
 * @returns {number}
*/

class Solution {
    kthDigit(A, B, K) {
        //code here
        let pow = A ** B;
        let str = pow.toString()
        let n = str.length;
        return str[n - K]
    }
}
