
//# 1502. Can Make Arithmetic Progression From Sequence

/*
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.
*/


// SOLUTION

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => b - a);

    let diff = arr[0] - arr[1];

    for (let i = 1; i < arr.length - 1; i++) {
        let val = arr[i] - arr[i + 1];

        if (val !== diff) {
            return false;
        }
    }

    return true;
};
