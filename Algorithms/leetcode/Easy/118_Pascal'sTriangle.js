
//# 118. Pascal's Triangle

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
*/

// SOLUTION


/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
    let res = []

    for (let i = 1; i <= numRows; i++) {
        let arr = []

        for (let j = 0; j < i; j++) {
            if (j == i - 1 || j == 0) {
                arr.push(1)
            } else {
                let sum = res[i - 2][j - 1] + res[i - 2][j];
                arr.push(sum)
            }
        }

        res.push(arr);
    }

    return res;
};