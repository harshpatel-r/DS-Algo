
//# Binary Array Sorting

/*
Given a binary array A[] of size N. The task is to arrange the array in increasing order.
Note: The binary array contains only 0  and 1.
*/

// SOLUTION 1

//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} N
*/

class Solution {
    //Function to sort the binary array.
    binSort(A, N) {
        let i = 0, j = 0;
        while (j < N) {
            if (A[j] == 0) {
                A[j] = 1;
                A[i++] = 0;
            }
            j++;
        }
    }
}

// SOLUTION 2

//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} N
*/

class Solution {
    //Function to sort the binary array.
    binSort(A, N) {
        if (N == 0) return;
        let count = 0;

        for (let i = 0; i < N; i++) {
            if (A[i] == 0) count++;
        }

        for (let i = 0; i < count; i++) {
            A[i] = 0;
        }

        for (let i = count; i < N; i++) {
            A[i] = 1;
        }
    }
}
