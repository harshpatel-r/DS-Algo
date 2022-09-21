
//# Value equal to index value

/*
Given an array Arr of N positive integers. Your task is to find the elements 
whose value is equal to that of its index value ( Consider 1-based indexing ).
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    valueEqualToIndex(arr, n) {
        //code here
        let ans = [];
        for (let i = 0; i < n; i++) {
            if (arr[i] == i + 1) {
                ans.push(i + 1)
            }
        }
        return ans;
    }
}

