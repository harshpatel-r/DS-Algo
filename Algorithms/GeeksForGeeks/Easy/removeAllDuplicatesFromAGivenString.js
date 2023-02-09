
//# Remove all duplicates from a given string

/*
Given a string Str which may contains lowercase and uppercase chracters. The task is to 
remove all duplicate characters from the string and find the resultant string. The order 
of remaining characters in the output should be same as in the original string.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string} n
 * @return {string} 
*/

class Solution {
    removeDuplicates(str) {
        //code here
        str = str.split('');
        let arr = [...new Set(str)];
        return arr.join('');
    }
}