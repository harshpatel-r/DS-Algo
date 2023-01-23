
//# Simple Interest 

/*
Given three integers P,R and T, denoting Principal, Rate of Interest and Time 
period respectively.Compute the simple Interest.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} P
 * @param {number} R
 * @param {number} T
 * @return {number}
*/

class Solution {
    simpleInterest(P, R, T) {
        //code here
        return ((P * R * T) / 100).toFixed(2);
    }
}
