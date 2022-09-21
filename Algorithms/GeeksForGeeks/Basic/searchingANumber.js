
//# Searching a number

/*
Given an array Arr of N elements and a integer K. Your task is to return the 
position of first occurence of K in the given array.

Note: Position of first element is considered as 1.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {integer}
 */

class Solution {
    search(arr, n, k) {
        if (!(arr.includes(k))) return -1;
        else {
            let num = arr.indexOf(k);
            return num + 1;
        }
    }
}