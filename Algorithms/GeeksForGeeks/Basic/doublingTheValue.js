
//# Doubling the value

/* 
Given an array and an integer B, traverse the array (from the beginning) and 
if the element in array is B, double B and continue traversal.Find the value 
of B after the complete traversal.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} b
 * @param {number} n
 * @return {number} 
*/

class Solution {
    solve(arr, b, n) {
        //code here
        for (let i = 0; i < n; i++) {
            if (arr[i] == b) {
                b *= 2;
            }
        }
        return b;
    }
}
