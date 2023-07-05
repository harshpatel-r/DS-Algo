
//# 136. Single Number

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/


// SOLUTION 1 : TC = O(n) & SC = O(1) // Xor - Bit Manipulation

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let n = nums.length;
    let xor = 0;
    
    for (let i = 0; i < n; i++) {
        xor = xor ^ nums[i];
    }

    return xor; 
};


// SOLUTION 2 : TC = O(nlogn) & SC = O(1) // sorting

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    nums.sort((a,b) => a-b);

    for(let i = 0 ; i < nums.length; i+=2){
        if(nums[i] !== nums[i+1]){
           return nums[i]
        }
    }
};