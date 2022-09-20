
//# Search in a Rotated Array

/*
Given a sorted and rotated array A of N distinct elements which is rotated at 
some point, and given an element key. The task is to find the index of the given 
element key in the array A.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} l
 * @param {number} h
 * @param {number} key
 * @return {number}
*/

class Solution {
    search(A, l, h, key) {
        // l: The starting index
        // h: The ending index, you have to search the key in this range
        //code here
        return A.indexOf(key);
    }
}
