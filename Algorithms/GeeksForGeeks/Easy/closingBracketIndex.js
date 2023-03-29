
//# Closing bracket index

/*
Given a string with brackets ('[' and ']') and the index of an opening bracket. Find the index of the corresponding 
closing bracket.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string} s
 * @param {number} pos
 * @return {number} 
*/

class Solution {
    closing(s, pos) {
        //code here
        let count = 1;
        
        for (let i = pos + 1; i < s.length; i++) {
            if (s[i] == "[") {
                count++;
            }
            if (s[i] == "]") {
                count--;
            }
            if (count == 0) {
                return i;
            }
        }
    }
}