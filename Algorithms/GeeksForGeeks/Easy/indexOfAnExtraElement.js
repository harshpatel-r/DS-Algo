
//# Index Of an Extra Element

/*
Given two sorted arrays of distinct elements. There is only 1 difference
between the arrays. First array has one element extra added in between.
Find the index of the extra element.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {Number[]} a
 * @param {Number[]} b
 * @param {Number} n
 * @returns {Number} 
 */
class Solution {
    findExtra(a, b, n) {
        let i = 0
        while (i < n) {
            if (a[i] != b[i]) { return a.indexOf(a[i]) }
            i++;
        }
    }
}