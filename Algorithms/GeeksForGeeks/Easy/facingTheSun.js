
//# Facing the sun

/*
Given an array H representing heights of buildings. You have to count the buildings which 
will see the sunrise (Assume : Sun rise on the side of array starting point).

Note : Height of building should be strictly greater than height of buildings in left in 
order to see the sun.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} h
 * @param {number} n
 * @returns {number}
*/

class Solution {
    countBuildings(h, n) {
        //code here
        let max = h[0];
        let count = 1;
        for (let i = 1; i < h.length; i++) {
            if (max < h[i]) {
                max = h[i]
                count += 1;
            }
        }
        return count;
    }
}
