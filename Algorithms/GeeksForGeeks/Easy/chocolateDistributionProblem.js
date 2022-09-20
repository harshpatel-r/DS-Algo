
//# Chocolate Distribution Problem

/*
Given an array A[ ] of positive integers of size N, where each value represents 
the number of chocolates in a packet. Each packet can have a variable number of 
chocolates. There are M students, the task is to distribute chocolate packets 
among M students such that :

1. Each student gets exactly one packet.
2. The difference between maximum number of chocolates given to a student and 
minimum number of chocolates given to a student is minimum.
*/

// SOLUTION 

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution {
    findMinDiff(arr, n, m) {
        arr = arr.sort((a, b) => a - b)
        let ans = 100000;
        let a, res;

        for (let i = 0; i <= n - m; i++) {
            //  a = arr.slice(i,m+i);
            let j = (m - 1) + i;
            res = arr[j] - arr[i];
            if (res < ans) ans = res;
        }
        return ans
    }
}