
//# Union of Two Sorted Arrays

/*
Union of two arrays can be defined as the common and distinct elements in the two arrays.
Given two sorted arrays of size n and m respectively, find their union.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} n
 * @param {number} m
 * @returns {number[]}
*/

class Solution {
    //Function to return a list containing the union of the two arrays. 
    findUnion(arr1, arr2, n, m) {
        let a = [...arr1, ...arr2];
        return [...new Set(a)].sort((a, b) => a - b);
    }
}