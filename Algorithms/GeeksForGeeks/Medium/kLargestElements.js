
//# k largest elements

/*
Given an array Arr of N positive integers and an integer K, find K largest elements from the array.  The output 
elements should be printed in decreasing order.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
*/

class Solution {
    kLargest(arr, n, k) {
        //code here
        let ans = [];
        arr = arr.sort((a, b) => a - b);
        for (let i = n - 1; i >= n - k; i--) {
            ans.push(arr[i]);
        }
        return ans;
    }
}
