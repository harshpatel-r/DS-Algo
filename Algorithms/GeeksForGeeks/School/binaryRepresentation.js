
//# Binary representation

/*
Write a program to print Binary representation of a given number N.

Example 1:

Input:
N = 2
Output:
000000000000000000000000000010
Explanation:
The binary representation of 2 is '10'
but we need to print in 30 bits so append
remaining 0's in the left.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @return {string}
*/

class Solution {
    getBinaryRep(N) {
        //code here
        let newArr = new Array(30).fill("0");
        let binNum = N.toString(2).split("");
        newArr.splice(0, binNum.length);
        newArr.push(...binNum);
        return newArr.join("");
    }
}
