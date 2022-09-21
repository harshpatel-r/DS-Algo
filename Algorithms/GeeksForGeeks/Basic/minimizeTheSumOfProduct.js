
//# Minimize the sum of product

/*
You are given two arrays, A and B, of equal size N. The task is to find the 
minimum value of A[0] * B[0] + A[1] * B[1] + .... + A[N-1] * B[N-1], where 
shuffling of elements of arrays A and B is allowed.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} n
 * @returns {number}
*/

class Solution {
    minValue(arr, brr, n) {
        //code here
        arr = arr.sort((a, b) => a - b);
        brr = brr.sort((a, b) => b - a);

        let res = 0;
        for (let i = 0; i < n; i++) {
            let total = arr[i] * brr[i];
            res += total;
        }
        return res
    }
}