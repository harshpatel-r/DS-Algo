
//# Binary String

/*
Given a binary string S. The task is to count the number of substrings 
that start and end with 1. For example, if the input string is “00100101”,
then there are three substrings “1001”, “100101” and “101”.
*/

// SOLUTION 

//User function Template for javascript

/**
 * @param {number} n (size of string)
 * @param {string} a (input string)
 * @returns {number}
*/
 
class Solution
{
    //Function to count the number of substrings that start and end with 1.
    binarySubstring(n, a)
    {
        // code here
        let c = 0;
        for(let i = 0 ; i<n ; i++ ){
            if(a[i] =="1") c++ ;
        }
        return c*(c-1)/2
    }
}