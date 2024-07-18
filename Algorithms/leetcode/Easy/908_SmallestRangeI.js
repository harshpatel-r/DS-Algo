
//# 908. Smallest Range I

/*
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] 
to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation 
at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for 
each index in it.
*/


// SOLUTION:

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var smallestRangeI = function (nums, k) {
    let max = 0;
    let min = Infinity;

    /*
    You can use the following lines for a more concise approach, 
    but it takes more space(memory):

    let min = Math.min(...nums);
    let max = Math.max(...nums);
    */

    for (let num of nums) {
        if (num > max) max = num;
        if (num < min) min = num;
    }

    if ((max - min) <= (k * 2)) {
        return 0;
    } else {
        return (max - min) - (k * 2);
    }
};
