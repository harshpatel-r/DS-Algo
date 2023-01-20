
//# Rotating an Array

// Given an array of size N. The task is to rotate array by D elements where D ≤ N.

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} d
 * @returns {void}
*/

class Solution {
    leftRotate(arr, n, d) {
        let newArr = arr.slice(0, d);
        arr.splice(0, d);
        arr.push(...newArr);
    }
}