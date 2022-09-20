
//# Search in a matrix

/*
Given a matrix mat[][] of size N x M, where every row and column is sorted in 
increasing order, and a number X is given. The task is to find whether element 
X is present in the matrix or not.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[][]} matrix
 * @param {number} N
 * @param {number} M
 * @param {number} X
 * @returns {number}
*/

class Solution {
    matSearch(matrix, N, M, X) {
        // code here
        let arr = matrix.flat();
        if (arr.includes(X)) return 1;
        return 0;
    }
}

