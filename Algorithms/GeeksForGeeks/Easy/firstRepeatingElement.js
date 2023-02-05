
//# First Repeating Element

/*
Given an array arr[] of size n, find the first repeating element. The element should occur more 
than once and the index of its first occurrence should be the smallest.

Note:- The position you return should be according to 1-based indexing. 
*/

// SOLUTION

// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to return the position of the first repeating element.
    firstRepeated(arr, n) {

        let newArr = new Array(Math.max(...arr) + 1).fill(0);
        for (let i = 0; i < n; i++) {
            newArr[arr[i]]++;
        }

        for (let i = 0; i < n; i++) {
            if (newArr[arr[i]] >= 2) {
                return i + 1;
            }
        }
        return -1;

    }
}
