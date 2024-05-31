
//# 2032. Two Out of Three

/*
Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that 
are present in at least two out of the three arrays. You may return the values in any order.
*/


// SOLUTION:

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */

var twoOutOfThree = function (nums1, nums2, nums3) {
    let countOfDistArrNums = {};
    let res = [];

    function countOfNums(arr) {
        for (let num of arr) {
            countOfDistArrNums[num] = (countOfDistArrNums[num] || 0) + 1;
        }
    }

    countOfNums(new Set(nums1));
    countOfNums(new Set(nums2));
    countOfNums(new Set(nums3));

    for (let key in countOfDistArrNums) {
        if (countOfDistArrNums[key] > 1) {
            res.push(parseInt(key));
        }
    }

    return res;
};
