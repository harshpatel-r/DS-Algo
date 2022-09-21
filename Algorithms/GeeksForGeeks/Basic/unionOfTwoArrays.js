
//# Union of two arrays

/*
Given two arrays a[] and b[] of size n and m respectively. The task is to find 
union between these two arrays.

Union of the two arrays can be defined as the set containing distinct elements 
from both the arrays. If there are repetitions, then only one occurrence of 
element should be printed in the union.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number[]} b
 * @param {number} m
 * @returns {number}
*/

class Solution {
    //Function to return the count of number of elements in union of two arrays.
    doUnion(a, n, b, m) {
        let arr = [...a, ...b];
        return [...new Set(arr)].length
    }
}
