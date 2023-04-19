// Sorted matrix

// Given an NxN matrix Mat. Sort all elements of the matrix.

// SOLUTION


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[][]} Mat
 * @return {number[][]}
*/

class Solution {
    sortedMatrix(N, Mat) {
        //code here
        let k = 0;
        let arr = [];

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                arr.push(Mat[i][j]);
            }
        }

        arr.sort((a, b) => a - b);

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                Mat[i][j] = arr[k];
                k++;
            }
        }

        return Mat;
    }
}
