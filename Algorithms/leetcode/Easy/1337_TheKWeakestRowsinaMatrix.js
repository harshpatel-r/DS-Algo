
//# 1337. The K Weakest Rows in a Matrix

/*
You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). 
The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of 
all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.
*/


// SOLUTION 1: 

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function (mat, k) {
    const rowStrength = mat.map((row, index) => [index, row.reduce((acc, val) => acc + val, 0)]);

    rowStrength.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    return rowStrength.slice(0, k).map(row => row[0]);
};


// SOLUTION 2:

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function (mat, k) {
    let weakerRow = [];
    let res = [];

    for (let i = 0; i < mat.length; i++) {
        let countOne = 0;

        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                countOne++;
            }
        }

        weakerRow.push(countOne);
    }

    let weakestRow = {};

    for (let i = 0; i < weakerRow.length; i++) {
        if (weakestRow[weakerRow[i]] === undefined) {
            weakestRow[weakerRow[i]] = [i]
        } else {
            weakestRow[weakerRow[i]].push(i);
        }
    }

    let count = k;

    for (let key in weakestRow) {
        let i = 0;
        let n = weakestRow[key].length;

        while (i < n && count > 0) {
            res.push(weakestRow[key][i]);
            count--;
            i++;
        }

        if (count === 0) break;
    }

    return res;
};
