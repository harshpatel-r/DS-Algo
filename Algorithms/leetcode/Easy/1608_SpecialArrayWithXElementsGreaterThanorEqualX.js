
//# 1608. Special Array With X Elements Greater Than or Equal X

/*
You are given an array nums of non-negative integers. nums is considered special if there exists a 
number x such that there are exactly x numbers in nums that are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, 
the value for x is unique.
*/


// SOLUTION

/**
 * @param {number[]} nums
 * @return {number}
 */

var specialArray = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let n = nums.length;
    let x = 1;
    let i = 0;

    while (i < n) {
        if (nums[i] >= x) {
            if (x === n - i) {
                return x;
            } else if (x < n - i) {
                x++;
            } else {
                return -1;
            }  
        } else {
            i++;
        }
    }

    return -1;
}
