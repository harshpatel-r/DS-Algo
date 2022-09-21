
//# Implement strstr

/*
Your task is to implement the function strstr. The function takes two strings 
as arguments (s,x) and  locates the occurrence of the string x in the string s. 
The function returns and integer denoting the first occurrence of the string x 
in s (0 based indexing).

Note: You are not allowed to use inbuilt function.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string} s
 * @param {string} x
 * @returns {number}
*/

class Solution {
    //Function to locate the occurrence of the string x in the string s.
    strstr(s, x) {
        return s.indexOf(x);
    }
}