
//# Leap Year

// For an input year N, find whether the year is a leap or not. 

// SOLUTION

//User function Template for javascript
/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    isLeap(n) {
        //code here
        if (n % 4 == 0) {
            if (n % 100 == 0) {
                if (n % 400 == 0) {
                    return 1
                } else {
                    return 0;
                }
            } else {
                return 1;
            }
        } else {
            return 0;
        }
    }
}
