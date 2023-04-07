
//# Minimum sum

/*
Given an array Arr of size N such that each element is from the range 0 to 9. Find the minimum possible sum of 
two numbers formed using the elements of the array. All digits in the given array must be used to form the two 
numbers.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {string}
*/

class Solution {
    solve(arr, n) {
        //code here
        if (n == 1) return arr[0]

        let num1 = "";
        let num2 = "";

        arr.sort((a, b) => a - b);

        for (let i = 0; i < n; i++) {
            if (i % 2 == 0) {
                num1 += arr[i];
            } else {
                num2 += arr[i];
            }
        }

        num1 = BigInt(num1)
        num2 = BigInt(num2);
        let res = num1 + num2;

        return res.toString();
    }
}
