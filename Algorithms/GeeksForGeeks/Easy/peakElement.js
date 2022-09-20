
//# Peak element

/*
An element is called a peak element if its value is not smaller than the value 
of its adjacent elements(if they exists).
Given an array arr[] of size N, Return the index of any one of its peak elements.
Note: The generated output will always be 1 if the index that you return is correct. 
Otherwise output will be 0. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    peakElement(arr, n)
    {
        let max = Math.max(...arr);
        return arr.indexOf(max)
    } 
}