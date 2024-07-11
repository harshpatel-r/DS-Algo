
//# 598. Range Addition II

/*
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] 
means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return the number of maximum integers in the matrix after performing all the operations.
*/


// SOLUTION: 

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */

var maxCount = function (m, n, ops) {
    if (ops.length === 0) return m * n;

    let minRow = m;
    let minCol = n;

    for (let i = 0; i < ops.length; i++) {
        minRow = Math.min(minRow, ops[i][0]);
        minCol = Math.min(minCol, ops[i][1]);
    }

    return minRow * minCol;
};
