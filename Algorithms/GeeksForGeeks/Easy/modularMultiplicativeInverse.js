
//# Modular Multiplicative Inverse

/*
Given two integers ‘a’ and ‘m’. The task is to find the smallest modular multiplicative 
inverse of ‘a’ under modulo ‘m’.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number} a
 * @param {number} m
 * @returns {number}
*/
class Solution {
    modInverse(a, m) {
        for (let i = 1; i <= m; i++) {
            if ((i * a) % m == 1) return i;
        }

        return -1;
    }
}