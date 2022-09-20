
//# Product array puzzle

/*
Given an array nums[] of size n, construct a Product Array P (of same size n) such 
that P[i] is equal to the product of all the elements of nums except nums[i].
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */

class Solution {
    productExceptSelf(nums, n) {
        let arr = new Array(n).fill(1);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i != j) arr[i] *= nums[j]
            }
        }
        return arr
    }
}