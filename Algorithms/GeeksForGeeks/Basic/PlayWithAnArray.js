
// Play with an array

/*
Given an unsorted array arr of size N, rearrange the elements of array such that 
number at the odd index is greater than the number at the previous even index. 
The task is to complete the function formatArray() which will return formatted 
array.

NOTE:
If the array formed is according to rules print 1, else 0.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[] }
*/

class Solution {
    formatArray(arr, n) {
        //code here
        for (let i = 1; i < n; i += 2) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            }
        }

        return arr;
    }
}
