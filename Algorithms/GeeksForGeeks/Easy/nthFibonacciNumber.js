
//# Nth Fibonacci Number

/*
Given a positive integer n, find the nth fibonacci number. Since the answer 
can be very large, return the answer modulo 1000000007.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {

    nthFibonacci(n) {
        let m = 1000000007;
        let f = new Array(n + 2);
        f[0] = 0;
        f[1] = 1;
        for (let i = 2; i <= n; i++) {
            f[i] = f[i - 1] % m + f[i - 2] % m;
        }
        return f[n] % m;
    }
}