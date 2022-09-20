
//# Josephus problem

/*
Given the total number of persons n and a number k which indicates that k-1 
persons are skipped and kth person is killed in circle in a fixed direction.

The task is to choose the safe place in the circle so that when you perform 
these operations starting from 1st place in the circle, you are the last one
remaining and survive. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/
class Solution {
    josephus(n, k) {
        let prev = 1;
        for (let i = 1; i <= n; i++) {
            prev = (prev + k - 1) % i + 1;
        }
        return prev;
    }
}