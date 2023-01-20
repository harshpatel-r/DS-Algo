
//# Power of Pow | Even Number

/*
Given a single integer N, your task is to find the sum of the square of 
the first N even natural Numbers. 
 */

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    sum_of_square_evenNumbers(n) {
        //code here
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += (i * 2) ** 2;
        }
        return sum;
    }
}