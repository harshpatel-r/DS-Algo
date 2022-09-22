
//# Find position of set bit

/*
Given a number N having only one ‘1’ and all other ’0’s in its binary 
representation, find position of the only set bit. If there are 0 or 
more than 1 set bit the answer should be -1. Position of  set bit '1' 
should be counted starting with 1 from LSB side in binary representa-
tion of the number.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    findPosition(n) {
        let bin = n.toString(2)
        let arr = new Array(32).fill(0);
        let a = bin.indexOf("1")
        let b = bin.lastIndexOf("1")
        arr[0] = 1

        for (let i = 1; i < 32; i++) {
            arr[i] = arr[i - 1] + arr[i - 1]
        }

        if (n == 0) return -1
        if (a == b) {
            return arr.indexOf(n) + 1;
        } else return -1
    }
}
