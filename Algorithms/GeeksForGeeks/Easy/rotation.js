
//# Rotation

/*
Given an ascending sorted rotated array Arr of distinct integers of size N. 
The array is right rotated K times. Find the value of K.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {integer}
 */

class Solution {
    findKRotation(arr, n) {
        // code here 
        let min = Math.min(...arr);
        let ind = arr.indexOf(min);
        if (ind == 0) return 0;
        return ind;
    }
}