
//# Check if two arrays are equal or not

/*
Given two arrays A and B of equal size N, the task is to find if given arrays 
are equal or not. Two arrays are said to be equal if both of them contain same 
set of elements, arrangements (or permutation) of elements may be different 
though.

Note : If there are repetitions, then counts of repeated elements must also be 
same for two array to be equal.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} N
 * @returns {boolean}
*/

class Solution {
    //Function to check if two arrays are equal or not.
    check(A, B, N) {
        A = A.sort((a, b) => a - b);
        B = B.sort((a, b) => a - b);
        let count = 0;
        for (let i in A) {
            if (A[i] == B[i]) count++;
        }
        if (count == N) return true;
        return false;
    }
}
