
//# 350. Intersection of Two Arrays II

/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result 
must appear as many times as it shows in both arrays and you may return the result in any order.
*/

// SOLUTION

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
    let obj = {};
    let res = [];

    for (let i = 0; i < nums1.length; i++) {
        obj[nums1[i]] = obj[nums1[i]] ? obj[nums1[i]] += 1 : 1;
    }

    for (let i = 0; i < nums2.length; i++) {
        if (obj[nums2[i]] > 0) {
            obj[nums2[i]] -= 1;
            res.push(nums2[i])
        }
    }

    return res;
};
