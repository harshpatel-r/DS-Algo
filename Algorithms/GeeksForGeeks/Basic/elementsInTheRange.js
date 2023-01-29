
//# Elements in the Range

/*
Given an array arr[] containing positive elements. A and B are two numbers 
defining a range. The task is to check if the array contains all elements 
in the given range.
*/

// SOLUTION

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} A
 * @param {number} B
 * @returns {boolean}
*/

class Solution {
    check_elements(arr, n, A, B) {
        for (let i = A; i <= B; i++) {
            if (!(arr.includes(i))) {
                return false;
            }
        }
        return true;
    }
}
