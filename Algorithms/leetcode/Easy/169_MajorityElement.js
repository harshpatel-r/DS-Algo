
//# 169. Majority Element

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority 
element always exists in the array.
*/


// SOLUTION


/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    let count = 0;
    let number;

    for (let num of nums) {
        if (count === 0) {
            number = num;
        }

        count += (number === num) ? 1 : -1;
    }

    return number;
};
