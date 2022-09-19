
//# Trapping Rain Water

// Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 

// SOLUTION 

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to find the trapped water between the blocks.
    trappingWater(arr, n) {
        let left = new Array(n);
        let right = new Array(n);
        left[0] = arr[0];

        for (let i = 1; i < n; i++) {
            left[i] = Math.max(left[i - 1], arr[i])
        }

        right[n - 1] = arr[n - 1];
        
        for (let i = n - 2; i >= 0; i--) {
            right[i] = Math.max(right[i + 1], arr[i])
        }

        let ans = 0;

        for (let i = 0; i < n; i++) {
            ans += (Math.min(left[i], right[i]) - arr[i]);
        }
        return ans;
    }
}