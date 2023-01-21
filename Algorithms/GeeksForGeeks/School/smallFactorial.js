
//# Small Factorial

// Calculate factorial of a given number N.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    find_fact(n) {
        //code here
        let factNum = 1;
        for (let i = 1; i <= n; i++) {
            factNum *= i;
        }

        return factNum;
    }
}


