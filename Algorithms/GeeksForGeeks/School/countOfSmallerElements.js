
//# Count of smaller elements

/*
Given an sorted array A of size N. Find number of elements which 
are less than or equal to given element X.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
*/

class Solution {
    countOfElements(arr, n, x) {
        //code here
        let ans = 0
        for (let i = 0; i < n; i++) {
            if (arr[i] <= x) ans++
        }
        return ans;
    }
}