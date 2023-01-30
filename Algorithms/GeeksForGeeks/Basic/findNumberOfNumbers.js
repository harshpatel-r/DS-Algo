
//# Find Number of Numbers

/*
Given an array A[]  of n elements. Your task is to complete the Function num 
which returns an integer denoting the total number of times digit k appears 
in the whole array.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    num(A, n, k) {
        //code here
        let res = 0;
        k = k.toString();
        let arr = A.join('').split('');

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == k) {
                res++;
            }
        }

        return res;
    }
}
