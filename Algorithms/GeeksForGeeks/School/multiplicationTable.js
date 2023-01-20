
//# Multiplication Table

// Print the multiplication table of a given number N. 

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @return {number[]}
 */
class Solution {
    getTable(N) {
        let list = [];

        for (let i = 1; i <= 10; i++) {
            let ans = N * i;
            list.push(ans);
        }
        
        return list;
    }
}