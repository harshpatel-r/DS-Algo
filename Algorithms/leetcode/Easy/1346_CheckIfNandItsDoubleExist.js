
//# 1346. Check If N and Its Double Exist

/*
Given an array arr of integers, check if there exist two indices i and j such that :

-> i != j
-> 0 <= i, j < arr.length
-> arr[i] == 2 * arr[j]
*/


// SOLUTION 1:

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function (arr) {
    let set = new Set()

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] / 2) || set.has(arr[i] * 2)) {
            return true
        }

        set.add(arr[i])
    }

    return false
};


// SOLUTION 2:

var checkIfExist = function (arr) {
    let n = arr.length;
    let uniqueVal = {}

    for (let i = 0; i < n; i++) {
        uniqueVal[arr[i]] = i
    }

    for (let i = 0; i < arr.length; i++) {
        if (uniqueVal.hasOwnProperty(arr[i] * 2)) {
            if (i !== uniqueVal[arr[i] * 2]) {
                return true;
            }
        }
    }

    return false;
};
