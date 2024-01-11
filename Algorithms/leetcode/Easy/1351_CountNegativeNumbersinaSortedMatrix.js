
//# 1351. Count Negative Numbers in a Sorted Matrix

/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return 
the number of negative numbers in grid.
*/


// SOLUTION

/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function (grid) {
    let negNum = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = grid[i].length - 1; j >= 0; j--) {
            if (grid[i][j] < 0) {
                negNum++;
            } else {
                break;
            }
        }
    }

    return negNum;
};
