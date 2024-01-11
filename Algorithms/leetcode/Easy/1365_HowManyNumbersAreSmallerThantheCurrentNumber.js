
//# 1365. How Many Numbers Are Smaller Than the Current Number

/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each 
nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
*/


// SOLUTION

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function (nums) {
    const sortedNums = [...nums].sort((a, b) => b - a);
    const smallerCountMapping = {};

    for (let i = 0; i < sortedNums.length; i++) {
        smallerCountMapping[sortedNums[i]] = sortedNums.length - 1 - i;
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = smallerCountMapping[nums[i]];
    }

    return nums;
};
