
//# 1752. Check if Array Is Sorted and Rotated

/*
Given an array nums, return true if the array was originally sorted in non-decreasing order, 
then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that 
A[i] == B[(i+x) % A.length], where % is the modulo operation.
*/


// SOLUTION :

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var check = function (nums) {
    let i = 0;
    let unsort = false;

    for (i; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            i++;
            unsort = true;
            break;
        }
    }

    if (!unsort) return true;

    let newArr = nums.splice(i, nums.length - i);
    nums.unshift(...newArr);

    for (let j = 0; j < nums.length - i + 1; j++) {
        if (nums[j] > nums[j + 1]) return false;
    }

    return true;
};
