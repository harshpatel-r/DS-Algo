
//# Count of camel case characters

// Given a string. Count the number of Camel Case characters in it.

// SOLUTION

//User function Template for javascript

/**
 * @param {string} s
 * @returns {number}
*/

class Solution {
    countCamelCase(s) {
        //code here
        let newStr = s.toLowerCase();
        let camelCase = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] != newStr[i]) {
                camelCase++;
            }
        }
        return camelCase;
    }
}

