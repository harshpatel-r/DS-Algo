
//# Sum of upper and lower triangles

/*
Given a square matrix of size N*N, print the sum of upper and lower triangular 
elements. Upper Triangle consists of elements on the diagonal and above it. 
The lower triangle consists of elements on the diagonal and below it. 

Example :

Input:
N = 2
mat[][] = {{1, 2},
           {3, 4}}
Output: 7 8
Explanation:
Upper triangular matrix:
1 2
  4
Sum of these elements are 7.
Lower triangular matrix:
1
3 4
Sum of these elements are 8.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[][]} mat
 * @param {number} N
 * @returns {number[]} 
*/
class Solution {
    //Function to return sum of upper and lower triangles of a matrix.
    sumTriangles(mat, N) {
        // code here 
        let sumOfUT = 0;
        let sumOfLT = 0;

        for (let i = 0; i < N; i++) {
            for (let j = i; j < N; j++) {
                sumOfUT += mat[i][j];
                sumOfLT += mat[(N - 1) - i][(N - 1) - j];
            }
        }

        return [sumOfUT, sumOfLT];
    }
}
