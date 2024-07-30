
//# 128. Longest Consecutive Sequence

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/


// SOLUTION: 

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
    let uniqueNums = new Set(nums);
    let longestStreak = 0;

    for (let num of uniqueNums) {
        if (!uniqueNums.has(num - 1)) {
            let currentNum = num + 1;
            let currentStreak = 1;

            while (uniqueNums.has(currentNum)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
