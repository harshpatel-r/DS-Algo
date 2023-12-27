
//# 1207. Unique Number of Occurrences

/*
Given an array of integers arr, return true if the number of occurrences of each value in the array 
is unique or false otherwise.
*/


// SOLUTION

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function (arr) {
    let res = [];
    let uniqueNum = new Set(arr);
    let checkUniqueoccurrences = new Set();

    for (let i = 0; i < arr.length; i++) {
        res[arr[i]] ? res[arr[i]]++ : (res[arr[i]] = 1);
    }

    for (let i of uniqueNum) {
        if (!checkUniqueoccurrences.has(res[i])) {
            checkUniqueoccurrences.add(res[i])
        } else {
            return false;
        }
    }

    return true;
};
