
// Move all zeroes to end of array

/*
Given an array arr[] of N positive integers. Push all the zeros of the given array to the right end of the 
array while maitaining the order of non-zero elements.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {Number[]} arr
 * @param {Number} n
 */

class Solution {
    pushZerosToEnd(arr, n) {
        //code here
        let i = 0;
        let count = 0;

        while (i < n) {
            if (arr[i] != 0) {
                [arr[i], arr[count]] = [arr[count], arr[i]];
                count++;
            }
            i++;
        }
    }
}
