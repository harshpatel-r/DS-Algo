
//# Non Repeating Numbers

/*
Given an array A containing 2*N+2 positive numbers, out of which 2*N 
numbers exist in pairs whereas the other two number occur exactly once 
and are distinct. Find the other two numbers. Return in increasing order.
*/

// SOLUTION 


//User function Template for javascript

/**
 * @param {number[]} nums
 * @return {number[]} 
*/

class Solution {
    singleNumber(nums) {
        let n = nums.length;
        let ans = [];
        nums = nums.sort((a, b) => a - b)
        for (let i = 0; i < n; i++) {
            let j = i + 1;
            let k = i - 1;
            if (i == 0 && nums.indexOf(nums[i], 1) == -1) ans.push(nums[i]);
            if ((nums.indexOf(nums[i], j) == -1) && (nums.lastIndexOf(nums[i], k) == -1)) ans.push(nums[i])
        }
        return ans
    }
}