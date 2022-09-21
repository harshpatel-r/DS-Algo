
//# Searching an element in a sorted array

/*
Given an array arr[] sorted in ascending order of size N and an integer K. 
Check if K is present in the array or not.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/

class Solution {
    searchInSorted(arr, N, K) {
        //your code here
        let ans = -1;
        if (arr.includes(K)) ans = 1;
        return ans;
    }
}