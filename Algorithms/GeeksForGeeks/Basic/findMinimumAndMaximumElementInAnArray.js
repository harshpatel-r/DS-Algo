
//# Find minimum and maximum element in an array

/*
Given an array A of size N of integers. Your task is to find the minimum 
and maximum elements in the array.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    getMinMax(arr, n) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        return [min, max];
    }
}