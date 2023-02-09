
//# Sum of elements between k1'th and k2'th smallest elements

/*
Given an array A[] of N positive integers and two positive integers K1 and K2. Find the sum of all elements 
between K1th and K2th smallest elements of the array. It may be assumed that (1 <= k1 < k2 <= n).
*/


// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k1
 * @param {number} k2
 * @return {number}
*/

class Solution {
    sumBetweenTwoKth(A, N, K1, K2) {
        //code here
        let sum = 0;
        A = A.sort((a, b) => a - b);
        for (let i = K1; i < K2 - 1; i++) {
            sum += A[i];
        }
        return sum;
    }
}
