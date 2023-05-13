
//# Find difference between sum of diagonals

// Given a matrix Grid[][] of size NxN. Calculate the absolute difference between the sums of its diagonals.

// SOLUTION


//User function Template for javascript

/**
 * @param {number[][]} grid
 * @param {number} n
 * @return {number}
 */

class Solution {
    diagonalSumDifference(grid, n) {
        //code here
        let sum1 = 0;
        let sum2 = 0;

        for (let i = 0; i < n; i++) {
            sum1 += grid[i][i];
            sum2 += grid[i][n - 1 - i];
        }

        return Math.abs(sum1 - sum2);
    }
}
