
//# Sum of an AP

/*
Given n, a and d as the number of terms, first term and common difference 
respectively of an Arthimetic Series. Find the sum of the series upto nth 
term.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @param {number} a
 * @param {number} d
 * @returns {number}
*/

class Solution {
    sum_of_ap(n, a, d) {
        //code here
        return n / 2 * (2 * a + (n - 1) * d);
    }
}
