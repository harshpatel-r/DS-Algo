
//# Floor in a Sorted Array

/*
Given a sorted array arr[] of size N without duplicates, and given a value x. 
Floor of x is defined as the largest element K in arr[] such that K is smaller 
than or equal to x. Find the index of K(0-based indexing).
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

    findFloor(arr, n, x) {
        let min = -1;
        for (let i = 0; i < n; i++) {
            if (arr[i] <= x) min = i;
            if (arr[i] > x) break;
        }
        return min
    }
}