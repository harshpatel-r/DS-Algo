
//# 35. Search Insert Position

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index 
where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

// SOLUTION


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {

    let myfunction = (nums, target, min, max) => {
        let mid = Math.floor((min + max) / 2);

        if (min > max) return mid + 1;

        if (nums[mid] === target) return mid;

        if (nums[mid] > target && target > nums[mid - 1] && target < nums[mid + 1]) {
            return mid
        }

        if (nums[mid] > target) {
            return myfunction(nums, target, min, mid - 1);
        }

        if (nums[mid] < target) {
            return myfunction(nums, target, mid + 1, max);
        }
    }
    
    const ans = myfunction(nums, target, 0, nums.length - 1);
    return ans;
};
