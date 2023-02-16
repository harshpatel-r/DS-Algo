
//# Reorganize The Array

/*
Given an array of elements of length N, ranging from 0 to N-1, your task is to write a program that
rearranges the elements of the array. All elements may not be present in the array, if the element
is not present then there will be -1 present in the array. Rearrange the array such that A[i] = i
and if i is not present, display -1 at that place.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    Rearrange(arr, n) {
        //code here
        let res = [];
        let set1 = new Set(arr);

        for (let i = 0; i < arr.length; i++) {
            if (set1.has(i)) {
                res.push(i);
            } else {
                res.push(-1);
            }
        }

        return res;
    }
}
