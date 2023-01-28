
//# Balanced Array

/* 
Given an array of even size N, task is to find minimum value that can be added 
to an element so that array become balanced. An array is balanced if the sum of t
he left half of the array elements is equal to the sum of right half. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    minValueToBalance(arr, n) {
        //code here
        let left = 0, rigth = 0;
        for (let i = 0; i < n / 2; i++) {
            left += arr[i];
        }

        for (let j = n / 2; j < n; j++) {
            rigth += arr[j];
        }

        return Math.abs(left - rigth);
    }
}
