
//# 905. Sort Array By Parity

/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.
*/


// SOLUTION 1: (BEST SOLUTION)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArrayByParity = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        while (left < right && nums[left] % 2 === 0) {
            left++;
        }

        while (left < right && nums[right] % 2 !== 0) {
            right--;
        }

        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }

    return nums;
}


// SOLUTION 2:

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArrayByParity = function (nums) {
    let oddNums = [];
    let evenNums = [];

    for (let num of nums) {
        num % 2 === 0 ? oddNums.push(num) : evenNums.push(num);
    }

    return [...oddNums, ...evenNums];
};
