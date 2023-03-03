
//# Rotate by 90 degree

/*
Given a square matrix of size N x N. The task is to rotate it by 90 degrees in anti-clockwise direction 
without using any extra space. 
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[][]} matrix
 * @param {number} n
*/

class Solution {
    //Function to rotate matrix anticlockwise by 90 degrees.
    rotateby90(matrix, n) {
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < Math.floor(n / 2); j++) {
                [matrix[j][i], matrix[n - j - 1][i]] = [matrix[n - j - 1][i], matrix[j][i]];
            }
        }

        return matrix;
    }
}
