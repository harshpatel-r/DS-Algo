
//# Middle of Three

/*
Given three distinct numbers A, B and C. Find the number with value 
in middle (Try to do it with minimum comparisons).
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @returns {number}
*/

class Solution {
    middle(A, B, C) {
        //code here
        let arr = [A, B, C];
        arr.sort((a, b) => a - b);
        return arr[1];
    }
}
