
//# 1122. Relative Sort Array

/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements 
that do not appear in arr2 should be placed at the end of arr1 in ascending order.
*/


// SOLUTION

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function (arr1, arr2) {
    let obj = {};
    let res = [];

    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] ? obj[arr1[i]]++ : obj[arr1[i]] = 1;
    }

    for (let i = 0; i < arr2.length; i++) {
        while (obj[arr2[i]] > 0) {
            res.push(arr2[i]);
            obj[arr2[i]]--;
        }

        delete obj[arr2[i]];
    }

    for (let i in obj) {
        while (obj[i] > 0) {
            res.push(parseInt(i));
            obj[i]--;
        }
    }

    return res;
};
