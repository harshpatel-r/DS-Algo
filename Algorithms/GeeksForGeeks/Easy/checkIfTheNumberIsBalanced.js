
//# Check if the number is balanced

/*
Given an integer N which has odd number of digits, find whether the given number is a balanced or not.

An odd digit number is called a balanced number if the sum of all digits to the left of the middle digit 
and the sum of all digits to the right of the middle digit is equal.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string} str
 * @returns {boolean}
*/

class Solution {
    balancedNumber(str) {
        let n = str.length - 1;
        let lhs = 0;
        let rhs = 0;
        
        for (let i = 0; i < n / 2; i++) {
            lhs += parseInt(str[i]);
            rhs += parseInt(str[n - i])
        }

        return (lhs == rhs) ? true : false;
    }
}
