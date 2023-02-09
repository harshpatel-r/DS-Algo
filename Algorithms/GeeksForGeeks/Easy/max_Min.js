
//# Max Min

/*
Given an array A of size N of integers. Your task is to find the sum of minimum and maximum 
element in the array.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    findSum(A, N) {
        //code here
        A.sort((a, b) => a - b);
        return A[0] + A[N - 1];
    }
}
