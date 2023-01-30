
//# Keypad typing

/*
You are given a string S of lowercase alphabet characters and the task is to find 
its matching decimal representation as on the shown keypad. Output the decimal 
representation corresponding to the string. For ex: if you are given amazon then 
its corresponding decimal representation will be 262966.

https://contribute.geeksforgeeks.org/wp-content/uploads/Phone.png

Example 1:

Input:
S = geeksforgeeks
Output: 4335736743357
Explanation:geeksforgeeks is 4335736743357
in decimal when we type it using the given
keypad.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {string} s
 * @param {number} n
 * @returns {string}
*/
class Solution {
    //Function to find matching decimal representation of 
    //a string as on the keypad.
    printNumber(s, n) {
        // code here
        let res = '';
        let i = 0;
        while (i < n) {
            if ('abc'.includes(s[i])) {
                res += 2;
                i++;
                continue;
            }
            if ('def'.includes(s[i])) {
                res += 3;
                i++;
                continue;
            }
            if ('ghi'.includes(s[i])) {
                res += 4;
                i++;
                continue;
            }
            if ('jkl'.includes(s[i])) {
                res += 5;
                i++;
                continue;
            }
            if ('mno'.includes(s[i])) {
                res += 6;
                i++;
                continue;
            }
            if ('pqrs'.includes(s[i])) {
                res += 7;
                i++;
                continue;
            }
            if ('tuv'.includes(s[i])) {
                res += 8;
                i++;
                continue;
            }
            if ('wxyz'.includes(s[i])) {
                res += 9;
                i++;
            }
        }
        return res;
    }
}
