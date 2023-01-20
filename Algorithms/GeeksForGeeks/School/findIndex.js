
//# Find Index

/*
Given an unsorted array Arr[] of N integers and a Key which is present in 
 this array. You need to write a program to find the start index( index 
 where the element is first found from left in the array ) and end 
 index( index where the element is first found from right in the array)
 .If the key does not exist in the array then return -1 for both start 
 and end index in this case.
 */

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} key
 * @return {number[]}
*/

class Solution {
    findIndex(a, n, key) {
        let A = a.indexOf(key);
        let B = a.lastIndexOf(key);
        return [A, B]
    }
}