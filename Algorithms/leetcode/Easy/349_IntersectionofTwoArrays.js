
//# 349. Intersection of Two Arrays

/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result 
must be unique and you may return the result in any order.
*/

// SOLUTION

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
    let set2 = new Set(nums2);
    let res = new Set()

    for (let i = 0; i < nums1.length; i++) {
        if (set2.has(nums1[i])) {
            res.add(nums1[i])
        }
    }
    
    return [...res]
};

// Similar to above solution...
// var intersection = function (nums1, nums2) {
//     let set2 = new Set(nums2);
//     nums1 = [...new Set(nums1)]
//     let res = []
//     for (let i = 0; i < nums1.length; i++) {
//         if (set2.has(nums1[i])) {
//             res.push(nums1[i])
//         }
//     }
//     return res;
// }
