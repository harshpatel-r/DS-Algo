
//# Merge k Sorted Arrays

// Given K sorted arrays arranged in the form of a matrix of size K*K. The task is to merge them into one sorted array.

// SOLUTION


//User function Template for javascript
/**
 * @param {number[][]} arr
 * @param {number} K
 * @returns {number[]}
 */

class Solution {
    mergeKArrays(arr, K) {
        //code here
        const res = arr.reduce((accum, element) => accum.concat(element));
        res.sort((a, b) => a - b);
        return res;
    }
}
