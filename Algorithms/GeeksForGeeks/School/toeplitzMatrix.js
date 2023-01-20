
//# Toeplitz matrix

/* A Toeplitz (or diagonal-constant) matrix is a matrix in which each 
descending diagonal from left to right is constant, i.e., all elements
 in a diagonal are same.
Given a matrix A of order N X M your task is to complete the function
isToeplitz which returns true if the matrix is Toeplitz otherwise
returns false.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[][]} edges
 * @param {number} N
 * @param {number} M
 * @return {boolean}
 */

class Solution {
    isToepliz(A, N, M) {
        //code here
        for (let i = 0; i < N - 1; i++) {
            for (let j = 1; j < M; j++) {
                if (!(A[i][j - 1] == A[i + 1][j])) {
                    return 0;
                }
            }
        }
        return 1;
    }
}

