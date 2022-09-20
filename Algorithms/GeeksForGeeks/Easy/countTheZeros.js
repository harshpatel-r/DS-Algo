
//# Count the Zeros

/*
Given an array of size N consisting of only 0's and 1's. The array is 
sorted in such a manner that all the 1's are placed first and then they 
are followed by all the 0's. Find the count of all the 0's.
*/

// SOLUTION

//User function Template for javascript

class Solution {
    countZeroes(arr, n) {
        let a = arr.indexOf(0);
        if (a == -1) return -1;
        let b = arr.lastIndexOf(0);
        
        return (b - a) + 1
    }
}