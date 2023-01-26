
//# Uncommon characters

/*
Given two strings A and B. Find the characters that are not common in the two strings. 

Note :- Return the string in sorted order.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {string} A
 * @param {sring} B
 * @returns {string}
*/

class Solution {
    UncommonChars(A, B) {
        //code here
        A = [...new Set(A)];
        B = [...new Set(B)];
        let res = [];

        for (let i = 0; i < B.length; i++) {
            if (!(A.includes(B[i]))) {
                res.push(B[i]);
            }
        }

        for (let i = 0; i < A.length; i++) {
            if (!(B.includes(A[i]))) {
                res.push(A[i]);
            }
        }
        
        return (res.length != 0) ? res.sort().join("") : -1;
    }
}
