
//# Cyclically rotate an array by one

// Given an array, rotate the array by one position in clock-wise direction.

// SOLUTION

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    rotate(arr, n) {
        let num = new Array(n).fill(0);
        num[0] += arr[n - 1];
        for (let i = 0; i < n - 1; i++) {
            num[1 + i] += arr[i];
        }
        return num;
    }
}