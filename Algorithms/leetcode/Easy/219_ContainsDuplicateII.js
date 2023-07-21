
//# 219. Contains Duplicate II

/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array 
such that nums[i] == nums[j] and abs(i - j) <= k.
*/

// SOLUTION

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] == undefined) {
            obj[nums[i]] = i;
        } else {
            let diff = i - obj[nums[i]];
            if (diff <= k) {
                return true;
            } else {
                obj[nums[i]] = i
            }
        }
    }

    return false;
};
