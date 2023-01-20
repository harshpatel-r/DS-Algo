
//# Sum of elements in a matrix

// Given a non null integer matrix Grid of dimensions NxM.Calculate the sum of its elements.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @param {number} M
 * @param {number[][]} Grid
 * @return {number} 
*/

class Solution {
    sumOfMatrix(N, M, Grid) {
        //code here
        let sum = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                sum += Grid[i][j];
            }
        }
        return sum;
    }
}