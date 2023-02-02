
//# Anshuman's Favourite Number

/*
You are given an integer input N and you have to find whether it is the sum 
or the difference of the integer 5. (5+5, 5+5+5, 5-5,5-5-5+5+5…..)
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number} n
 * @returns {string}
*/

class Solution {
    isValid(n) {
        //code here
        if (n % 5 == 0) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
}
