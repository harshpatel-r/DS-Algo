
//# 1893. Check if All the Integers in a Range Are Covered

/*
You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] 
represents an inclusive interval between starti and endi.

Return true if each integer in the inclusive range [left, right] is covered by at least one interval in 
ranges. Return false otherwise.

An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.
*/


// SOLUTION:

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */

var isCovered = function (ranges, left, right) {
    for (let i = left; i <= right; i++) {
        let check = false;

        for (let j = 0; j < ranges.length; j++) {
            if (ranges[j][0] <= i && ranges[j][1] >= i) {
                check = true;
                break;
            }
        }

        if (check === false) return false;
    }

    return true;
};
