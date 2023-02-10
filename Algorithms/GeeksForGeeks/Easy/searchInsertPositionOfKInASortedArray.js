
//# Search insert position of K in a sorted array

/*
Given a sorted array Arr[](0-index based) consisting of N distinct integers and an integer k, 
the task is to find the index of k, if its present in the array Arr[]. Otherwise, find the 
index where k must be inserted to keep the array sorted.
*/


// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/

class Solution {
    searchInsertK(arr, N, K) {
        //your code here
        for (let i = 0; i < N; i++) {
            if (arr[i] == K) {
                return i;
            }
            if (arr[i] > K) {
                return i;
            }
        }
        return N;
    }
}