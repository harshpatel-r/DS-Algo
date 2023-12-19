
//# 922. Sort Array By Parity II

/*
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.
*/


// SOLUTION

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArrayByParityII = function (nums) {
    let i = 0;
    let j = nums.length - 1;

    while (i < nums.length && j > 0) {
        while (i < nums.length) {
            if (nums[i] % 2 === 0) {
                i += 2;
            } else {
                break;
            }
        }

        while (j > 0) {
            if (nums[j] % 2 !== 0) {
                j -= 2;
            } else {
                break;
            }
        }

        if (i < nums.length && j > 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i += 2;
            j -= 2;
        }
    }

    return nums;
};
