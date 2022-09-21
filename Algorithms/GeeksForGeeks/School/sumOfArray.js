
//# Sum of Array

// Given an integer array Arr[] of size N. The task is to find sum of it.

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {integer}
 */

class Solution {
    sum(arr, n) {
        // code here
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += arr[i];
        }
        return sum;
    }
}