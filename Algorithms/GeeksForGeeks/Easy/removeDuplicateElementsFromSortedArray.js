
//# Remove duplicate elements from sorted Array

/*
Given a sorted array A[] of size N, delete all the duplicated elements from A[].
Update the array such that if there are X distinct elements in it then the first
X positions of the array should be filled with them in increasing order.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number}
 */

class Solution {
    remove_duplicate(arr, n) {
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                arr.splice(i + 1, 1);
                --i;
                n--;
            }
        }
        return arr.length
    }
}