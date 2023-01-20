
//# Find the smallest and second smallest element in an array

/*
Given an array of integers, your task is to find the smallest and second smallest
 element in the array. If smallest and second smallest do not exist, print -1.
*/

// SOLUTION

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    minAnd2ndMin(arr, n) {
        //code here
        arr.sort((a, b) => a - b);
        let res = [];

        for (let i = 0; i < n; i++) {
            if (res.length == 2) break;

            if (arr[i] != arr[i + 1]) {
                res.push(arr[i]);
            }

            if (i == n - 1) {
                if (!(res.includes(arr[i]))) {
                    res.push(arr[i])
                }
            }
        }

        return (res.length < 2) ? [-1] : res;
    }
}
