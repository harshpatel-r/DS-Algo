
//# Unique Numbers

/* 
In the given range [L, R], print all numbers having unique digits. e.g. In range 10 to 20 should print all numbers 
except 11.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number} L
 * @param {number} R
 * @returns {number[]}
*/

class Solution {
    uniqueNumbers(L, R) {
        //code here
        let res = [];

        for (let i = L; i <= R; i++) {
            let str = i.toString();
            let size = new Set(str.split('')).size;

            if (str.length === size) {
                res.push(i);
            }
        }

        return res;
    }
}
