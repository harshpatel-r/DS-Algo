
// Run Length Encoding

/*
Given a string, Your task is to  complete the function encode that returns the run
 length encoded string for the given string.
eg if the input string is “wwwwaaadexxxxxx”, then the function should return “w4a3d1e1x6″.
You are required to complete the function encode that takes only one argument the string 
which is to be encoded and returns the encoded string.
*/

// SOLUTION 

//User function Template for javascript

/**
 * @param {string} str
 * @returns {string} 
 */

class Solution {
    encode(str) {
        str = str.split("");
        let n = str.length;
        let ans = "";
        ans += str[0];
        let num = 1;

        for (let i = 0; i < n - 1; i++) {
            if (str[i] == str[i + 1]) num++;
            if (str[i] != str[i + 1]) {
                ans += num;
                ans += str[i + 1];
                num = 1;
            }
        }

        ans += num;
        return ans;
    }
}
