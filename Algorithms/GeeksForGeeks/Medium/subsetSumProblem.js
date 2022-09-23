
//# Subset Sum Problem

/*
Given an array of non-negative integers, and a value sum, determine if 
there is a subset of the given set with sum equal to given sum. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {boolean}
 */

class Solution {
    isSubsetSum(arr, n, sum) {
        // The value of subset[i%2][j] will be true
        // if there exists a subset of sum j in
        // arr[0, 1, ...., i-1]
        let subset = new Array(2);

        // Loop to create 2D array using 1D array
        for (var i = 0; i < subset.length; i++) {
            subset[i] = new Array(2);
        }

        for (let i = 0; i <= n; i++) {
            for (let j = 0; j <= sum; j++) {

                // A subset with sum 0 is always possible
                if (j == 0)
                    subset[i % 2][j] = true;

                // If there exists no element no sum
                // is possible
                else if (i == 0)
                    subset[i % 2][j] = false;
                else if (arr[i - 1] <= j)
                    subset[i % 2][j] = subset[(i + 1) % 2]
                    [j - arr[i - 1]] || subset[(i + 1) % 2][j];
                else
                    subset[i % 2][j] = subset[(i + 1) % 2][j];
            }
        }
        return subset[n % 2][sum];
    }
}
