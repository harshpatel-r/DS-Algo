
//# Number of 1 Bits

// Given a positive integer N, print count of set bits in it. 

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {

    setBits(n) {
        n = n.toString(2);
        n = n.split("");
        n = n.sort();
        let a = n.indexOf("1");
        if (a == -1) return -1;
        let b = n.lastIndexOf("1");
        return (b - a) + 1
    }
}