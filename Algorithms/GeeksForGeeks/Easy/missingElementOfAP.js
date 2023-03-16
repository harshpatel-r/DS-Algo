
//# Missing element of AP

/*
Find the missing element from an ordered array arr[], consisting of N elements representing an Arithmetic Progression(AP).

Note: There always exists an element which upon inserting into sequence forms Arithmetic progression. Boundary elements 
(first and last elements) are not missing.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    findMissing(arr, n) {
        //code here
        let diff;

        if (n == 2) {
            diff = (arr[1] - arr[0]) / 2;
            return Math.min(...arr) + diff;
        }

        let firstDiff = arr[1] - arr[0];
        let lastDiff = arr[n - 1] - arr[n - 2];

        if (firstDiff > lastDiff) {
            diff = lastDiff
        } else if (firstDiff < lastDiff) {
            diff = firstDiff
        } else {
            diff = firstDiff;
        }

        for (let i = 1; i < n; i++) {
            if ((arr[i] - arr[i - 1]) !== diff) {
                return arr[i] - diff
            }
        }
    }
}