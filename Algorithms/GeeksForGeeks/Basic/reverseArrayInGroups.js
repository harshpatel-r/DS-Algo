
//# Reverse array in groups

/*
Given an array arr[] of positive integers of size N. Reverse every sub-array 
group of size K.

Note: If at any instance, there are no more subarrays of size greater than or 
equal to K, then reverse the last subarray (irrespective of its size).
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 */

class Solution {
    //Function to reverse every sub-array group of size k.
    reverseInGroups(arr, n, k) {
        let number = [...arr];
        let i = 0;
        while (i < n) {
            arr.splice(i, k, ...number.splice(0, k).reverse());
            i += k;
        }
    }
}