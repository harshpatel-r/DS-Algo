
//# Predict the Column

/*
Given a matrix(2D array) M of size N*N consisting of 0s and 1s only. The task is to find 
the column with maximum number of 0s.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[][]} M
 * @param {number} n
 * @returns {number}
*/

class Solution {
    columnWithMaxZeros(M, n) {
        //code here
        let newArr = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (M[i][j] == 0) {
                    newArr[j]++;
                }
            }
        }
        
        return newArr.indexOf(Math.max(...newArr));
    }
}
