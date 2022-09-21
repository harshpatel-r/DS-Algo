
//# Second Largest

// Given an array Arr of size N, print second largest element from an array.

//SOLUTION      

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    print2largest(arr, n) {
        //code here
        arr.sort((a, b) => a - b);
        let secMax = -1;
        let max = Math.max(...arr)
        for (let i = 0; i < n; i++) {
            if (arr[i] != max) {
                secMax = arr[i]
            }
        }
        return secMax;
    }
}
