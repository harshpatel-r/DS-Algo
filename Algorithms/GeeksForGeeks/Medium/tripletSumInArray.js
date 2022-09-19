
//# Triplet Sum in Array

/*
Given an array arr of size n and an integer X. Find if there's a triplet in 
the array which sums up to the given integer X. 
*/

// SOLUTION 

//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} n
 * @param {number} X
 * @returns {boolean}
*/

class Solution {
    //Function to find if there exists a triplet in the 
    //array A[] which sums up to X.
    find3Numbers(a, n, X) {
        a = a.sort((a, b) => a - b);
        for (let i = 0; i < n - 2; i++) {
            let j = i + 1;
            let k = n - 1;

            while (j < k) {
                if (a[i] + a[j] + a[k] === X) {
                    return true;
                } else if (a[i] + a[j] + a[k] > X) {
                    k--;
                } else j++;
            }
            
        }
        return false;
    }
}