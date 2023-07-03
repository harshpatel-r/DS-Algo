//# 119. Pascal's Triangle II

/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
*/

// SOLUTION 1

/**
 * @param {number} r
 * @return {number[]}
 */

var getRow = function (r) {
    var ans = new Array(r + 1)
    ans[0] = ans[r] = 1

    for (i = 1, up = r; i < r; i++, up--){
        ans[i] = ans[i - 1] * up / i
    }

    return ans
};

// SOLUTION 2

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function (rowIndex) {
    let num = rowIndex + 1;
    let res = [];

    for (let i = 1; i <= num; i++) {
        let arr = []

        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i - 1) {
                arr.push(1);
            } else {
                let sum = res[0][j - 1] + res[0][j]
                arr.push(sum);
            }
        }

        res.push(arr);
        if (i > 1) {
            res.shift()
        }

    }

    return res[0];
};