
//# Smaller and Larger

/*
Given a sorted array Arr of size N and a value X, find the number of array 
elements less than or equal to X and elements more than or equal to X. 
*/

// SOLUTION

//User function Template for javascript\

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
*/

class Solution {
    getMoreAndLess(arr, n, x) {
        //code here
        let i = 0;
        let small = 0;
        let large = 0
        while (i < n) {
            if (arr[i] < x) {
                small++;
                i++;
            } else if (arr[i] > x) {
                large++;
                i++;
            } else {
                small++;
                large++;
                i++;
            }
        }
        return [small, large];
    }
}

