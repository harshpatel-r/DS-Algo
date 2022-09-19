
//# 0 - 1 Knapsack Problem

/*
You are given weights and values of N items, put these items in a knapsack of capacity W 
to get the maximum total value in the knapsack. Note that we have only one quantity of each item.

In other words, given two integer arrays val[0..N-1] and wt[0..N-1] which represent values 
and weights associated with N items respectively. Also given an integer W which represents knapsack
capacity, find out the maximum value subset of val[] such that sum of the weights of this subset 
is smaller than or equal to W. You cannot break an item, either pick the complete item or dont 
pick it (0-1 property).
 */

// SOLUTION 



//User function Template for javascript


/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
*/

class Solution {

    //Function to return max value that can be put in knapsack of capacity W.
    
    knapSack(W, wt, val, n) {
        let dp = Array.from(Array(n + 1), () => new Array(W + 1));

        for (let i = 0; i < n + 1; i++) {
            for (let j = 0; j < W + 1; j++) {
                if (i == 0 || j == 0)
                    dp[i][j] = 0;
                else if (wt[i - 1] <= j) {
                    dp[i][j] = Math.max(val[i - 1] + dp[i - 1][j - wt[i - 1]], dp[i - 1][j]);
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
        return dp[n][W];
    }
}
