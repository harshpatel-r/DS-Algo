
//# Single Number

/*
Given an array Arr of positive integers of size N where every element appears even times except for one. 
Find that number occuring odd number of times.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    getSingle(arr, n) {
        //code here
        let a = 0;

        for (let i = 0; i < n; i++) {
            a ^= arr[i];
        }

        return a;
    }
}
