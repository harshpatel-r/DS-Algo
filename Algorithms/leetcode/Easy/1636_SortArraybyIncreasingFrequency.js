//# 1636. Sort Array by Increasing Frequency

/*
Given an array of integers nums, sort the array in increasing order based on the frequency of 
the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.
*/


// SOLUTION

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var frequencySort = function (nums) {
  let obj = {};
  let arr = [];
  nums = nums.sort((a, b) => a - b);
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
    } else {
      obj[count] === undefined ? obj[count] = [nums[i]] : obj[count].unshift(nums[i]);
      count = 1;
    }
  }

  for (let key in obj) {
    let i = 0;
    let j = parseInt(key);

    while (i < obj[key].length) {
      arr.push(obj[key][i]);
      j--;
      if (j === 0) {
        i++;
        j = parseInt(key);
      }
    }
  }

  return arr;
};
