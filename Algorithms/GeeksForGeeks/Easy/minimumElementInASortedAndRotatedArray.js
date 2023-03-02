// Minimum element in a sorted and rotated array

/*
A sorted(in ascending order) array A[ ] with distinct elements is rotated at some unknown point, the task is to 
find the minimum element in it.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    findMin(arr, n) {
        //code here
        for (let i = 1; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                return arr[i + 1];
            }
        }
        
        return arr[0];
    }
}
