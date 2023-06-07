
//# 34. Find First and Last Position of Element in Sorted Array

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

// SOLUTION


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
    let jnotvalid;
    let inotvalid;
    let res = [-1, -1];
    let ii = 0, jj = 1;
    let i = 0, j = nums.length - 1;

    if (nums.length == 1) {
        return nums[0] == target ? [0, 0] : res;
    }

    while (i <= j) {
        if (i == j) {
            if (nums[i] == target) {
                res[ii] = i;
                i++;
                ii++;
                break;
            }
        }

        if (nums[i] == target && i != inotvalid) {
            res[ii] = i;
            ii += 1;
            inotvalid = i;
        }

        if (nums[j] == target && j != jnotvalid) {
            res[jj] = j;
            jj -= 1;
            jnotvalid = j;
        }

        if (ii == 1 && jj == 0) {
            break;
        }

        if (ii == 1) {
            j--;
        } else if (jj == 0) {
            i++
        } else {
            i++;
            j--;
        }
    }

    if (res[0] == -1 && res[1] != -1) {
        res[0] = res[1];
    }

    if (res[1] == -1 && res[0] != -1) {
        res[1] = res[0];
    }

    return res;
};
