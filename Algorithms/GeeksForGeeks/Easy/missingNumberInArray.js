
//# Missing number in array

/*
Given an array of size N-1 such that it only contains distinct integers in the range 
of 1 to N. Find the missing element.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
*/

class Solution {
    MissingNumber(array, n) {
        array = array.sort((a, b) => a - b);
        for (let i = 0; i < n; i++) {
            if (i + 1 != array[i]) return i + 1;
        }
    }
}