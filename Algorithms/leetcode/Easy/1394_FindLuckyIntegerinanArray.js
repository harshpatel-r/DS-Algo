
//# 1394. Find Lucky Integer in an Array

/*
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.
*/


// SOLUTION

/**
 * @param {number[]} arr
 * @return {number}
 */

var findLucky = function (arr) {
    let totalDistinctNum = {};
    let luckyNum = -1;

    for (let i = 0; i < arr.length; i++) {
        totalDistinctNum[arr[i]] = (totalDistinctNum[arr[i]] || 0) + 1;
    }

    for (let key in totalDistinctNum) {
        if (totalDistinctNum[key] == key) {
            luckyNum = key;
        }
    }

    return luckyNum;
};
