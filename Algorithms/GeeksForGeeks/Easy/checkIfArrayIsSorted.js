
//# Check if array is sorted

// Given an array arr[] of size N, check if it is sorted in non-decreasing order or not. 

// SOLUTION


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {boolean}
*/

class Solution {
    arraySortedOrNot(arr, n) {
        // code here
        for (let i = 0; i < n - 1; i++) {
            if (!(arr[i] <= arr[i + 1])) {
                return false;
            }
        }
        
        return true;
    }
}