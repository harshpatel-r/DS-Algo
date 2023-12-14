
//# 2482. Difference Between Ones and Zeros in Row and Column

/*
# Problem Statement :

You are given a 0-indexed m x n binary matrix grid.

A 0-indexed m x n difference matrix diff is created with the following procedure:

-> Let the number of ones in the ith row be onesRowi.
-> Let the number of ones in the jth column be onesColj.
-> Let the number of zeros in the ith row be zerosRowi.
-> Let the number of zeros in the jth column be zerosColj.
-> diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj

Return the difference matrix diff.
*/


// SOLUTION

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

var onesMinusZeros = function (grid) {
    const onesRow = new Array(grid.length).fill(0);
    const onesCol = new Array(grid[0].length).fill(0);
    const zerosRow = new Array(grid.length).fill(0);
    const zerosCol = new Array(grid[0].length).fill(0);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                onesRow[i]++;
            } else {
                zerosRow[i]++;
            }
        }
    }

    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[j][i]) {
                onesCol[i]++;
            } else {
                zerosCol[i]++;
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const difference = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
            grid[i][j] = difference;
        }
    }

    return grid;
};
