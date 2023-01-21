
//# Sum of Digit is Pallindrome or not

/*
Given a number N.Find if the digit sum(or sum of digits) of N is a Palindrome number or not.
Note:A Palindrome number is a number which stays the same when reversed.Example- 121,131,7 etc.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
*/

class Solution {
    isDigitSumPalindrome(N) {
        //code here
        let numStr = N.toString().split("");
        let res = 0;

        for (let i = 0; i < numStr.length; i++) {
            res += parseInt(numStr[i]);
        }

        return (res.toString() === res.toString().split("").reverse().join("")) ? 1 : 0;
    }
}