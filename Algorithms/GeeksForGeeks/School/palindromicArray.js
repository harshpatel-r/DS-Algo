
//# Palindromic Array

/*
Given a Integer array A[] of n elements. Your task is to complete 
the function PalinArray. Which will return 1 if all the elements 
of the Array are palindrome otherwise it will return 0.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {

    PalinArray(arr, n) {
        //code here
        let res = "";
        let ans = 0;
        let i = 0;

        for (let i = 0; i < n; i++) {
            let a = "";
            a += arr[i];

            for (let j = a.length - 1; j >= 0; j--) {
                res += a[j]
            }
            if (i != n - 1) res += ","
        }

        res = res.split(",");
        for (let k = 0; k < n; k++) {
            if (arr[i] == res[i]) {
                i++;
                if (arr.length == i) {
                    ans = 1
                }
            }
        }
        return ans;
    }
}