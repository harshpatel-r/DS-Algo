//# 119. Pascal's Triangle II

/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
*/

// SOLUTION


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
