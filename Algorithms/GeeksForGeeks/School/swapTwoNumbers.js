
//# Swap two numbers

// Swap given two numbers and print them. (Try to do it without a temporary variable.) and return it.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} a
 * @param {number} b
 * @return {number[]}
*/

class Solution {
    get(a, b) {
        //return [b,a]
        a = a + b;
        b = a - b;
        a = a - b;
        return [a, b];
    }
}
