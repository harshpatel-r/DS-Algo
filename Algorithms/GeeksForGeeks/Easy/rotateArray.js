
//# Rotate Array

/*
Given an unsorted array arr[] of size N. Rotate the array to the left (counter-clockwise direction)
by D steps, where D is a positive integer. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} d
 * @param {number} n
 */

class Solution {
    //Function to rotate an array by d elements in counter-clockwise direction. 
    rotateArr(arr, d, n) {
        if (n < d) d = d - n;
        let a = arr.splice(0, d);
        arr.push(...a);
    }
}