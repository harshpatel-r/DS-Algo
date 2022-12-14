
//# Three way partitioning

/*
Given an array of size n and a range [a, b]. The task is to partition the array around the range such that 
array is divided into three parts.
1) All elements smaller than a come first.
2) All elements in range a to b come next.
3) All elements greater than b appear in the end.
The individual elements of three sets can appear in any order. You are required to return the modified array.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} array
 * @param {number} a
 * @param {number} b
*/

class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    
    threeWayPartition(array, a, b) {
        array = array.sort((a, b) => a - b);
    }
}