
//# Find duplicates in an array

/*
Given an array a[] of size N which contains elements from 0 to N-1, you 
need to find all the elements occurring more than once in the given array.
*/

// SOLUTION

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
*/

class Solution {

    duplicates(a, n) {
        let arr = [];
        let num = -1;

        a = a.sort((a, b) => a - b);

        for (let i = 0; i < n; i++) {
            if (a[i] == a[i + 1] && a[i] != num) {
                arr.push(a[i]);
                num = a[i];
            }
        }

        if (arr.length == 0) arr.push(-1);
        
        return arr;
    }
}