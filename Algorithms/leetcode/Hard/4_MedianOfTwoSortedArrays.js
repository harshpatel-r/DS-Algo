//# 4. Median of Two Sorted Arrays

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two 
sorted arrays.
*/

// SOLUTION


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [];
    let result;
    let n = nums1.length,
        m = nums2.length;
    let i = 0;
    let j = 0;

    if (nums1.length == 0) {
        arr.push(...nums2.slice(0));
    } else if (nums2.length == 0) {
        arr.push(...nums1.slice(0));
    }

    while (i < n && j < m) {
        if (nums1[i] <= nums2[j]) {
            arr.push(nums1[i]);
            i++;
        } else {
            arr.push(nums2[j]);
            j++;
        }
        if (i == n) {
            arr.push(...nums2.slice(j))
        }
        if (j == m) {
            arr.push(...nums1.slice(i))
        }
    }

    const l = arr.length;

    if (l % 2 == 0) {
        let mid = l / 2;
        result = (arr[mid - 1] + arr[mid]) / 2;
    } else {
        let mid = Math.floor(l / 2);
        result = arr[mid];
    }

    return result;
};
