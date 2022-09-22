
//# Maximum money

/*
Given a street of N houses (a row of houses), each house having K amount of 
money kept inside; now there is a thief who is going to steal this money 
but he has a constraint/rule that he cannot steal/rob two adjacent houses. 
Find the maximum money he can rob.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
*/

class Solution {
    maximizeMoney(N, K) {
        //code here
        return Math.ceil(N / 2) * K;
    }
}