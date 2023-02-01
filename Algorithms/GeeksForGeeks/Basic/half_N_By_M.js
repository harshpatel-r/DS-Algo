
// Half N by M

/*
Given two values N and M. Give the value when N is halved M-1 times.

Example 1:

Input: N = 100, M = 4
Output: 12
Explaination: The sequence of numbers is 
100, 50, 25, 12.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution {
    mthHalf(n, m) {
        //code here
        for (let i = 0; i < m - 1; i++) {
            n = Math.floor(n / 2);
        }
        return n;
    }
}
