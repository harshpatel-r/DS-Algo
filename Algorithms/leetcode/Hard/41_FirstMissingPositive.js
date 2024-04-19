
//# 41. First Missing Positive

/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.
*/


// SOLUTION 1 : [Modified Solution (20/04/2024)]

/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let elem = nums[i];
        if (elem < nums.length && elem > 0 && nums[elem - 1] !== elem) {
            nums[i] = nums[elem - 1];
            nums[elem - 1] = elem;
            i--;
        }
    }

    let posNum = 1;
    for (let i = 0; i < nums.length; i++) {
        if (posNum < nums[i]) {
            return posNum;
        } else if (posNum === nums[i]) {
            posNum++;
        }
    }

    return posNum;
};


// SOLUTION 2 : [Old Solution]

var firstMissingPositive = function (nums) {
    nums = [...new Set(nums)];

    let n = nums.length;
    if (n == 0) return 1;

    if (n == 1) {
        return nums[0] == 1 ? 2 : 1;
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            if (nums[i] <= n && nums[i] != i) {
                ind = nums[i];
                nums[i] = nums[ind];
                nums[ind] = ind;
                i--;
            }
        }
    }

    let m = nums.length;

    for (let j = 1; j < m; j++) {
        if (j !== nums[j]) {
            return j;
        }

        if (j == m - 1) {
            return j + 1;
        }
    }
};
