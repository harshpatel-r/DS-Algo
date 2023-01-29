
// Quick Left Rotation

// Given an array arr[] of size N and an integer K, the task is to left rotate the array K indexes.

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} n
*/

class Solution {
    leftRotate(arr, k, n) {
        //code here
        let i = n - (((Math.ceil(k / n)) * n) - k);
        let left = arr.splice(0, i);
        arr.push(...left);
    }
}
