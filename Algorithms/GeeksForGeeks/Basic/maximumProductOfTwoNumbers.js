
//# Maximum product of two numbers

/* 
Given an array Arr of size N with all elements greater than or equal to zero. Return the maximum product of 
two numbers possible.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    maxProduct(arr, n) {
        //code here
        let index;
        let firstMax = Math.max();
        let secondMax = Math.max();

        for (let i = 0; i < n; i++) {
            if (arr[i] > firstMax) {
                firstMax = arr[i];
                index = i;
            }
        }

        for (let j = 0; j < n; j++) {
            if (arr[j] > secondMax && j !== index) {
                secondMax = arr[j];
            }
        }

        return firstMax * secondMax;
    }
}