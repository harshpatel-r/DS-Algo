
//# Number is sparse or not

/*
Given a number N. The task is to check whether it is sparse or not. 
A number is said to be a sparse number if no two or more consecutive 
bits are set in the binary representation.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {Number} n
 * @returns {boolean}
*/

class Solution {
    //Function to check if the number is sparse or not.
    isSparse(n) {
        n = n.toString(2);
        for (let i = 0; i < n.length - 1; i++) {
            if (n[i] == "1" && n[i + 1] == "1") {
                return 0
                break;
            }
        }
        return 1
    }
}