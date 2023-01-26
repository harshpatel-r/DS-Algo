
//# Closest Number

/*
Given non-zero two integers N and M. The problem is to find the number closest 
to N and divisible by M. If there are more than one such number, then output 
the one having maximum absolute value.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @param {number} M
 * @return {number}
*/

class Solution {
    closestNumber(N,M){     
        //code here
        return Math.round(N/M)*M;
    }
}
