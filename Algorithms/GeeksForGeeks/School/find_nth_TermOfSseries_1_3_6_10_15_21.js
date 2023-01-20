
//# Find n-th term of series 1, 3, 6, 10, 15, 21

// Given a number N, find the Nth term in the series 1, 3, 6, 10, 15, 21…

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
*/

class Solution {
    findNthTerm(N) {
        let ans = (N * (N + 1)) / 2;
        return ans;
    }
}
