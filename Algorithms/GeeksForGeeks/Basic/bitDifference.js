
//# Bit Difference

/* 
You are given two numbers A and B. The task is to count the number of 
bits needed to be flipped to convert A to B.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
*/
// Function to find number of bits needed to be flipped to convert A to B
class Solution {

    countBitsFlip(a, b) {
        a = a.toString(2);
        b = b.toString(2);
        let i = 0;
        while (true) {
            if (a.length == b.length) break;
            if (b.length > a.length) {
                a = '0' + a;
            } else b = '0' + b;
        }
        for (let n = 0; n < a.length; n++) {
            if ((a[n] == 0 && b[n] == 0) || (a[n] == 1 && b[n] == 1)) i++;
        }
        return a.length - i
    }
}