
//# Maximize Toys

/*
Given an array arr[ ] of length N consisting cost of N toys and an integer K depicting the amount 
with you. Your task is to find maximum number of toys you can buy with K amount. 
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/

class Solution {
    toyCount(arr, N, K) {
        //your code here
        arr.sort((a, b) => a - b);
        let count = 0;

        for (let i = 0; i < N; i++) {
            if (K >= arr[i]) {
                K = K - arr[i];
                count++;
            } else {
                break;
            }
        }

        return count;
    }
}
