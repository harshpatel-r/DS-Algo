
//# 1380. Lucky Numbers in a Matrix

/*
Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
*/


// SOLUTION

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var luckyNumbers = function (matrix) {
    let uniqueVal = new Set();

    for (let i = 0; i < matrix.length; i++) {
        let min = Infinity;

        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
            }
        }

        uniqueVal.add(min);
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let max = 0;

        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] > max) {
                max = matrix[j][i];
            }

        }

        if (uniqueVal.has(max)) {
            return [max]
        }
    }

    return [];
};
