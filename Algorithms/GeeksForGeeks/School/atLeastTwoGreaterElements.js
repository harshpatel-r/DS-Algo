
//# At least two greater elements

/*
Given an array of N distinct elements, the task is to find all elements in 
array except two greatest elements in sorted order.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
*/

class Solution {
    findElements(arr, n) {
        return arr.sort((a, b) => a - b).slice(0, n - 2);
    }
}