
//# First and last occurrences of x

/*
Given a sorted array arr containing n elements with possibly duplicate 
elements, the task is to find indexes of first and last occurrences of 
an element x in the given array.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number[]}
*/

class Solution {
    find(arr, n, x) {
        //code here
        let first = arr.indexOf(x);
        let last = arr.lastIndexOf(x);
        return [first, last]
    }
}