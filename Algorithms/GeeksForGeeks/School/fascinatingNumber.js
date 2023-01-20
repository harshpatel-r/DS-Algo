
//# Fascinating Number

/*
Given a number N. Your task is to check whether it is fascinating or not.
Fascinating Number: When a number(should contain 3 digits or more) is 
multiplied by 2 and 3 ,and when both these products are concatenated 
with the original number, then it results in all digits from 1 to 9 
present exactly once.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @return {boolean}
*/

class Solution {
    fascinating(N) {
        //code here
        let m2 = (N * 2).toString();
        let m3 = (N * 3).toString();
        N = N.toString();
        let res = N + m2 + m3;
        res = res.split("").sort();
        for (let i = 1; i <= 9; i++) {
            if (!(res[i - 1] == i)) {
                return false;
            }
        }
        return true;
    }
}
