
//# Minimum Swaps to Sort

/*
Given an array of n distinct elements. Find the minimum number of swaps required 
to sort the array in strictly increasing order.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} nums
 * @returns {number}
*/

class Solution {
    //Function to find the minimum number of swaps required to sort the array.
    minSwaps(nums) {
        let n = nums.length;
        let arrpos = [];

        for (let i = 0; i < n; i++) {
            arrpos.push([nums[i], i]);
        }

        arrpos.sort((a, b) => a[0] - b[0]);

        let vis = new Array(n).fill(false);
        let ans = 0;

        for (let i = 0; i < n; i++) {
            if (vis[i] || arrpos[i][1] == i) {
                continue;
            }
            let cycle_size = 0;
            let j = i;

            while (!vis[j]) {
                vis[j] = true;
                j = arrpos[j][1];
                cycle_size++;
            }

            if (cycle_size > 0) {
                ans += (cycle_size - 1);
            }
        }
        return ans;
    }
}


