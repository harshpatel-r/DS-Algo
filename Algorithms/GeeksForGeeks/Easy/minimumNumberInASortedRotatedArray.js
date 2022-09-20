
//# Minimum Number in a sorted rotated array

/*
Given an array of distinct elements which was initially sorted. 
This array is rotated at some unknown point. The task is to find 
the minimum element in the given sorted and rotated array. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 * @returns {number}
*/

class Solution {
    //Function to find the minimum element in sorted and rotated array.
    minNumber(arr, low, high) {
        arr = arr.sort((a, b) => a - b);
        return arr[0];
    }
}
