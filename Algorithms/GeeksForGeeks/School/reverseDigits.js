
//# Reverse digits

// Given N,  reverse the digits of N.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    reverse_digit(n) {
        //code here
        let strArr = n.toString().split("").reverse().join("");

        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] === "0") {
                strArr = strArr.slice(1);
                --i;
            } else {
                break;
            }
        }

        return strArr;
    }
}
