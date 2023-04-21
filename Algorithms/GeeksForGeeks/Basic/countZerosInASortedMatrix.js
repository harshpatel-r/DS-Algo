
//# Count zeros in a sorted matrix

/*
Given a N X N binary Square Matrix where each row and column of the matrix is sorted in ascending order. Find the total 
number of zeros present in the matrix.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[][]} A
 * @param {number} N
 * @return {number}
*/

class Solution {

    countZeros(A, N) {
        //code here
        let count = 0;

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (A[i][j] === 0) {
                    count++;
                }
            }
        }
        
        return count;
    }
}