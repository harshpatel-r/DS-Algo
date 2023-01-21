
//# The dice problem

/*
You are given a cubic dice with 6 faces. All the individual faces have a 
number printed on them. The numbers are in the range of 1 to 6, like any 
ordinary dice. You will be provided with a face of this cube, your task 
is to guess the number on the opposite face of the cube.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */

class Solution {
    oppositeFaceOfDice(N) {
        //code here
        let arr = [6, 5, 4, 3, 2, 1];
        return arr[N - 1];
    }
}
