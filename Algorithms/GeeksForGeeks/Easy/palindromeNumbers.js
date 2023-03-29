
//# Palindrome numbers

// Check if the binary representation of a number is palindrome or not.

// SOLUTION


//User function Template for javascript
/**
 * @param {number} N
 * @return {number}
*/

class Solution {
    isPallindrome(N) {
        //code here
        let num = N.toString(2);
        let n = num.length;

        for (let i = 0; i < Math.floor(n / 2); i++) {
            if (num[i] !== num[n - i - 1]) {
                return 0;
            }
        }
    
        return 1;
    }
}