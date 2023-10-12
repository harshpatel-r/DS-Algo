
//# 228. Summary Ranges

/*
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
*/

// SOLUTION


/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function (nums) {
    let res = [];
    let a = nums[0], b;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            b = nums[i + 1];
        } else {

            if (b === undefined) {
                res.push(`${a}`);
                a = nums[i + 1];
                b = undefined
            } else {
                res.push(`${a}->${b}`);
                a = nums[i + 1];
                b = undefined
            }

        }
    }

    return res;
};
