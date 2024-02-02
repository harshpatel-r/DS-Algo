
//# 1437. Check If All 1's Are at Least Length K Places Away

/*
Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, 
otherwise return false.
*/


// SOLUTION

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var kLengthApart = function (nums, k) {
    let firstOne = nums.indexOf(1);
    let i = firstOne + 1;

    while (i < nums.length) {
        if (nums[i] === 1) {
            let diff = i - 1 - firstOne;

            if (!(diff >= k)) {
                return false;
            }

            firstOne = i;
        }

        i++;
    }

    return true;
};