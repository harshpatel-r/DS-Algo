
//# Sum Array Puzzle

/*
Given an array A of size N, construct a Sum Array S(of same size) such that S is 
equal to the sum of all the elements of A except A[i]. Your task is to complete 
the function SumArray(A, N) which accepts the array A and N(size of array).
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
*/

class Solution {
    SumArray(arr, n) {
        //code here
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += arr[i];
        }

        for (let j = 0; j < n; j++) {
            arr[j] = sum - arr[j];
        }
    }
}