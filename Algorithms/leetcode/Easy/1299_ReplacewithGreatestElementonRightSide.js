
//# 1299. Replace Elements with Greatest Element on Right Side

/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, 
and replace the last element with -1.

After doing so, return the array.
*/


// SOLUTION

/**
 * @param {number[]} arr
 * @return {number[]}
 */

var replaceElements = function (arr) {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;

    for (let i = arr.length - 2; i >= 0; i--) {
        let tmp = arr[i];
        arr[i] = max;
        max = Math.max(max, tmp);
    }

    return arr;
};
