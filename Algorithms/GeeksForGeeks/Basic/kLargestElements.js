
//# K largest elements

// Given an array of N positive integers, print k largest elements from the array. 

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
*/

class Solution {
    //Function to return k largest elements from an array.
    kLargest(arr, n, k) {
        arr = arr.sort((a, b) => a - b);
        return arr.slice(-k).reverse();
    }
}