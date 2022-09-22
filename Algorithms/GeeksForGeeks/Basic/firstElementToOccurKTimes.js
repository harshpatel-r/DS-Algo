
//# First element to occur k times

// Given an array of N integers. Find the first element that occurs at least K number of times.

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    firstElementKTime(arr, n, k) {
        //code here
        var max = Math.max(...arr)
        var ans = new Array(max + 1).fill(0)
        for (var i = 0; i < n; i++) {
            ans[arr[i]]++
            if (ans[arr[i]] === k) {
                return arr[i]
            }
        }
        return -1
    }
}
