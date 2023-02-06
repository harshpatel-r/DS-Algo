
//# Product Pair

/*
Given an array arr[] of size N of distinct elements and a number X, find if there is a 
pair in arr[] with product equal to X.
*/

// SOLUTION

// } Driver Code Ends
//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {boolean}
*/

class Solution {
    isProduct(arr, n, x) {
        //code here
        let pos = [];
        let neg = [];

        for (let i = 0; i < n; i++) {
            if (arr[i] < 0) {
                neg.push(arr[i]);
            } else {
                pos.push(arr[i]);
            }
        }

        pos.sort((a, b) => a - b);
        neg.sort((a, b) => b - a);
        let a = pos.length;
        let b = neg.length;

        if (x < 0) {

            let i = a - 1, j = 0;
            while (i >= 0 && j < b) {
                if (pos[i] * neg[j] === x) {
                    return true;
                }
                if (pos[i] * neg[j] > x) {
                    j++;
                } else {
                    i--;
                }
            }

        }

        if (x >= 0) {
            let i = 0, j = a - 1;
            while (i < j) {
                if (pos[i] * pos[j] === x) {
                    return true;
                }
                if (pos[i] * pos[j] > x) {
                    j--;
                } else {
                    i++;
                }
            }

            let k = 0, l = b - 1
            while (k < l) {
                if (neg[k] * neg[l] === x) {
                    return true;
                }
                if (neg[k] * neg[l] > x) {
                    l--;
                } else {
                    k++;
                }
            }

        }

        return false;
    }
}
