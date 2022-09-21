
//# Print Elements of Array

// Given an array Arr of size N, print all its elements.

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {
    printArray(arr, n) {
        // code here
        let str = "";
        for (let i = 0; i < n; i++) {
            str += arr[i];
            if (i < n - 1) str += " ";
        }
        console.log(str)
    }
}