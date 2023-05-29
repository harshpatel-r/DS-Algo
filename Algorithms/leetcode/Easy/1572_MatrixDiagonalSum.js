//# 1572. Matrix Diagonal Sum

/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary 
diagonal that are not part of the primary diagonal.
*/

// SOLUTION


/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    const n = mat.length;
    let mid = Math.floor(n / 2);
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += mat[i][i];

        if (n % 2 !== 0) {
            if (i !== mid) {
                sum += mat[n - 1 - i][i];
            }
        }

        if (n % 2 == 0) {
            sum += mat[n - 1 - i][i];
        }
    }
    return sum;
};
