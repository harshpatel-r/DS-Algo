
//# Trailing zeroes in factorial

// For an integer N find the number of trailing zeroes in N!.

// SOLUTION

//User function Template for javascript

/**
 * @param {Number} N
 * @returns {Number}
 */

class Solution {
    trailingZeroes(N) {
        let ans = 0;
        let j = 5;
        while (j <= N) {
            ans += Math.trunc(N / j);
            j = j * 5
        }
        return ans
    }
}