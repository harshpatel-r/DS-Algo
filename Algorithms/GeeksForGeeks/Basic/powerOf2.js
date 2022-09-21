
//# Power of 2

/*
Given a non-negative integer N. The task is to check if N is a power of 2. 
More formally, check if N can be expressed as 2x for some x.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {Number} n
 * @returns {boolean}
*/

class Solution {
    // Function to check if given number n is a power of two.
    isPowerofTwo(n) {
        let i = 0;// code here
        while (true) {
            if (2 ** i == n) return true;
            if (2 ** i > n) break;
            i++;
        }
        return false;
    }
}