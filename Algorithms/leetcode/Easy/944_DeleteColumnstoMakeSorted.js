
//# 944. Delete Columns to Make Sorted

/*
You are given an array of n strings strs, all of the same length.

The strings can be arranged such that there is one on each line, making a grid.

-> For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
    abc
    bce
    cae

You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), 
columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so 
you would delete column 1.

Return the number of columns that you will delete.
*/


// SOLUTION

/**
 * @param {string[]} strs
 * @return {number}
 */

var minDeletionSize = function (strs) {
    if (strs.length < 1) return 0;
    totalUnsortedColumn = 0;

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (!(strs[j - 1][i] <= strs[j][i])) {
                totalUnsortedColumn++;
                break;
            }
        }
    }

    return totalUnsortedColumn;
};
