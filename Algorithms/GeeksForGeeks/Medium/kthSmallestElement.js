
//# Kth Smallest Element

/*
Given an array arr[] and an integer K where K is smaller than size of array, 
the task is to find the Kth smallest element in the given array. It is given 
that all array elements are distinct.
*/

//SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} l (starting index of the array i.e 0)
 * @param {number} r (ending index of the array i.e size-1)
 * @param {number} k
 * @return {number}
*/

class Solution {
    kthSmallest(arr, l, r, k) {
        arr = arr.sort((a, b) => a - b);
        return arr[k - 1]
    }
}
