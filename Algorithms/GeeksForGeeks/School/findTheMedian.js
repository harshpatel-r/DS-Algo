
//# Find the median

// Given an array arr[] of N integers, calculate the median.

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
*/

class Solution {
    find_median(arr) {
        //code here
        arr = arr.sort((a, b) => a - b);
        let ans;
        if (arr.length % 2 != 0) {
            let l1 = Math.floor(arr.length / 2)
            ans = arr[l1];
        }
        else {
            let l2 = arr.length / 2;
            ans = Math.floor((arr[l2] + arr[l2 - 1]) / 2);
        }
        return ans
    }
}