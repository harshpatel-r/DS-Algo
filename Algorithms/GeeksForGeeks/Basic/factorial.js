
//# Factorial

// Given a positive integer, N. Find the factorial of N.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    factorial(n) {
        let mul = 1;
        for (let i = n; i >= 1; i--) {
            mul *= i;
        }
        return mul;
    }
}
