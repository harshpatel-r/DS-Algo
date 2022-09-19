
//# Kadane's Algorithm

// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number} 
*/
class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N) {
        // code here
        let solution = arr[0];
        for (let i = 1; i < arr.length; i++) {
            arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
            solution = Math.max(solution, arr[i]);
        }
        return solution;
    }
}