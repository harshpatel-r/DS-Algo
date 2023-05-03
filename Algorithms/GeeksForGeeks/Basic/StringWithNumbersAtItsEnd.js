
//# String with numbers at its end

/*
Given string s that is appended with a number at last. The task is to check whether the length of string excluding 
that number is equal to that number. 
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string} s
 * @return {number}
 */
class Solution {
    isSame(s) {
        //code here
        let str = "";
        let number = "";
        
        for (let i = 0; i < s.length; i++) {
            if (isNaN(s[i])) {
                str += s[i];
            } else {
                number += s[i];
            }
        }

        return str.length === parseInt(number) ? 1 : 0;
    }
}