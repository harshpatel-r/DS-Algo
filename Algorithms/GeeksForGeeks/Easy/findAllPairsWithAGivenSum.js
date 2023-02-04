
//# Find all pairs with a given sum

/*
Given two unsorted arrays A of size N and B of size M of distinct elements, the task is to 
find all pairs from both arrays whose sum is equal to X.

Note: All pairs should be printed in increasing order of u. For eg. for two pairs (u1,v1) 
and (u2,v2), if u1 < u2 then

(u1,v1) should be printed first else second.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} N
 * @param {number} M
 * @param {number} X
 * @param {number} n
 * @returns { }
*/

class Solution {
    allPairs(A, B, N, M, X) {
        //code here
        let res = [];
        let A1 = A.slice().sort((a, b) => a - b);
        let B1 = B.slice().sort((a, b) => a - b);

        let i = 0;
        let j = M - 1;

        while (i < N && j >= 0) {
            if (A1[i] + B1[j] === X) {
                res.push([A1[i], B1[j]]);
                i++;
                j--;
                continue;
            }

            if (A1[i] + B1[j] > X) {
                j--;
            } else {
                i++;
            }
        }

        return res;
    }
}
