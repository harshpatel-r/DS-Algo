
//# Row with max 1s

/*
Given a boolean 2D array of n x m dimensions where each row is sorted. 
Find the 0-based index of the first row that has the maximum number of 1's.
*/

//SOLUTION

//User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
class Solution {

    rowWithMax1s(arr, n, m) {
        let ans = 0;
        let res = -1
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 0; j < m; j++) {
                sum += arr[i][j];
            }
            if (sum > ans) {
                ans = sum;
                res = i
            }
        }
        return res;
    }
}