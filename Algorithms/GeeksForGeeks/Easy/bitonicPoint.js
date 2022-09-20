
//# Bitonic Point

/*
Given an array arr of n elements which is first increasing and then may be decreasing, 
find the maximum element in the array.

Note: If the array is increasing then just print then last element will be the maximum value.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    findMaximum(arr, n) {
        return Math.max(...arr);

    }
}