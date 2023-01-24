
//# Identical Matrices

/*
Given two square matrices Grid1 and Grid2 with the same dimensions(NxN).
Check whether they are identical or not.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @param {number[]} grid1
 * @param {number[]} grid2
 * @returns {number}
*/

class Solution {
    areMatricesIdentical(n, grid1, grid2) {
        //code here
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (!(grid1[i][j] == grid2[i][j])) {
                    return 0;
                }
            }
        }
        return 1;
    }
}

