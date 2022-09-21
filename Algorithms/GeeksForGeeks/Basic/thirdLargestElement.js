
//# Third largest element

/*
Given an array of distinct elements. Find the third largest element in it.

Suppose you have A[] = {1, 2, 3, 4, 5, 6, 7}, its output will be 5 because it is 
the 3 largest element in the array A.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
*/

class Solution {
    thirdLargest(a, n) {
        a = a.sort((a, b) => a - b);
        let ans = 0;
        let max = Math.max(...a);
        let result = -1;
        if (n >= 3) {
            for (let i = n - 1; i >= 1; i--) {
                if (a[i] < max) {
                    max = a[i];
                    ans++;
                }
                if (ans == 2) return result = max;
            }
        }
        return result
    }
}