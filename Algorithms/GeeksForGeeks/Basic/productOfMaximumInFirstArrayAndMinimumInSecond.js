
//# Product of maximum in first array and minimum in second

/*
Given two arrays of A and B respectively of sizes N1 and N2, the task 
is to calculate the product of the maximum element of the first array 
and minimum element of the second array.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number[]} b
 * @param {number} m
 * @returns {number}
*/

class Solution {
    find_multiplication(a, n, b, m) {
        //code here
        let max = Math.max(...a)
        let min = Math.min(...b);
        return max * min
    }
}