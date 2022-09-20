
//# Find Transition Point

// Given a sorted array containing only 0s and 1s, find the transition point. 

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
    transitionPoint(arr, n) {
        let a = arr.indexOf(1)
        if (a != -1) {
            return a;
        } else {
            return -1
        }
    }
}