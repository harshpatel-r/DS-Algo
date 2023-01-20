
//# Sum of numbers in string

/* 
Given a string str containing alphanumeric characters. The task is to calculate
 the sum of all the numbers present in the string.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
*/

class Solution {
    //Function to calculate sum of all numbers present in a string.
    findSum(str) {
        let str1 = str.toUpperCase();
        let res = "";

        for (let i = 0; i < str.length; i++) {
            if (str[i] == str1[i]) {
                res += str[i];
            } else {
                res += " ";
            }
        }

        res = res.split(" ");

        let res1 = 0;
        for (let j = 0; j < res.length; j++) {
            if (res[j] != "") {
                res1 += parseInt(res[j])
            }
        }

        return res1;
    }
}
