
//# Left most and right most index

/*
Given a sorted array with possibly duplicate elements. The task is to find indexes of first and last 
occurrences of an element X in the given array.

Note: If the element is not present in the array return {-1,-1} as pair.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} v
 * @param {number} x
 * @returns {number[]}
*/
class Solution {
    indexes(v, x) {
        // code here
        let ind = v.indexOf(x);
        if (ind == -1) return [-1, -1];
        let lastInd = v.lastIndexOf(x);
        return [ind, lastInd];
    }
}
