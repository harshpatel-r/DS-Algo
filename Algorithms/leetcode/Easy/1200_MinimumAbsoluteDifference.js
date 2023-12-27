
//# 1200. Minimum Absolute Difference

/*
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute 
difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

-> a, b are from arr
-> a < b
-> b - a equals to the minimum absolute difference of any two elements in arr.
*/


// SOLUTION

/**
 * @param {number[]} arr
 * @return {number[][]}
 */

var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let max = Infinity;
    let res = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];

        if (diff < max) {
            max = diff;
            res = [];
            res.push([arr[i], arr[i + 1]]);
        } else if (diff === max) {
            res.push([arr[i], arr[i + 1]]);
        }
    }

    return res;
}
