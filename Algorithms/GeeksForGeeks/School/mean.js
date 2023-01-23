
//# Mean

/*
Given the marks of N students in an Array A, calculate the mean.

Note: If result is a Decimal Value, find it's floor Value. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @param {number[]} A
 * @return {number}
*/

class Solution {
    mean(N, A) {
        //code here
        let sum = A.reduce((accum, curVal) => {
            return accum += curVal;
        });
        return Math.floor(sum / N);
    }
}
