
//# Maximum number of zeroes

/*
Given an array arr[] of N values, the task is to find the number which has the maximum number of zeroes. If there 
are no zeroes then print -1.

Note: If there are multiple numbers with the same (max) number of zeroes then print the Maximum number among them.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string[]} a
 * @param {number} n
 * @return {string}
*/

class Solution {
    MaxZero(a, n) {
        //code here
        let maxZero = Math.max();
        let number;

        for (let i = 0; i < n; i++) {
            let count = 0;
            let num = a[i].toString();

            for (let j = 0; j < num.length; j++) {
                if (num[j] == "0") {
                    count += 1;
                }
            }

            if (maxZero < count) {
                maxZero = count;
                number = a[i];
            }

            if (maxZero == count) {
                if (parseInt(number) < parseInt(a[i])) {
                    number = a[i];
                }
            }
        }

        return maxZero == 0 ? -1 : number;
    }
}
