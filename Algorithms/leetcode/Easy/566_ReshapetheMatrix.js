
//# 566. Reshape the Matrix

/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new 
one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and 
the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same 
row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped 
matrix; Otherwise, output the original matrix.
*/


// SOLUTION:

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function (mat, r, c) {
    let n = mat.length;
    let m = mat[0].length;
    let reshapedMatrix = [[]];
    let raw = 0;
    let column = 0;

    if ((m * n) !== (c * r)) {
        return mat;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (column === c) {
                reshapedMatrix.push([]);
                raw++;
                column = 0;
            }

            reshapedMatrix[raw][column] = mat[i][j];
            column++;
        }
    }

    return reshapedMatrix;
};
 