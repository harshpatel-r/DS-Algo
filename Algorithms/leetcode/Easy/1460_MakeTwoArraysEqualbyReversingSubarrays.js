
//# 1460. Make Two Arrays Equal by Reversing Subarrays

/*
You are given two integer arrays of equal length target and arr. In one step, you can select any 
non-empty subarray of arr and reverse it. You are allowed to make any number of steps.

Return true if you can make arr equal to target or false otherwise.
*/


// SOLUTION

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 
var canBeEqual = function (target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            return false;
        }
    }

    return true;
};
