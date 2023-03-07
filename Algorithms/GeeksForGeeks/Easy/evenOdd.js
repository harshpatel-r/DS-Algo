
//# Even Odd

/*
We've learnt about operators and other basics of CPP. Now, it's time to take another leap and learn to use control 
structures that helps us choose flow of any code.

Given two integers a and b. Your task is to print the even number first and odd number next in individual lines.

Note: Must print end of the line at the end.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number} a
 * @param {number} b
 * @returns { }
*/

class Solution {
    evenOdd(a, b) {
        if (a % 2 == 0 && b % 2 != 0 || a % 2 == 0 && b % 2 == 0 || a % 2 != 0 && b % 2 != 0) {
            console.log(a);
            console.log(b);
        } else {
            console.log(b);
            console.log(a);
        }
    }
}
