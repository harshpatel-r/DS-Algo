
//# Maximum no of 1's row

// Given a boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.

// SOLUTION


//User function Template for javascript
/**
 * @param {number[][]} mat
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution {
    maxOnes(mat, n, m) {
        let max = Math.max();
        let row;

        for (let i = 0; i < n; i++) {
            let count = 0;

            for (let j = 0; j < m; j++) {
                if (mat[i][j] === 1) {
                    count++;
                }
            }

            if (count > max) {
                max = count;
                row = i;
            }

            if (count == m) {
                return i;
            }
        }

        return row;
    }
}
