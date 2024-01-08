
//# 1287. Element Appearing More Than 25% In Sorted Array

/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of 
the time, return that integer.
*/


// SOLUTION

/**
 * @param {number[]} arr
 * @return {number}
 */

var findSpecialInteger = function (arr) {
    let count = 1;
    let max = 0;
    let output;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            if (max < count) {
                max = count;
                output = arr[i];
            }
            count = 1;
        }
    }

    return output;
};
