
//# Maximize sum(arr[i]*i) of an Array

/*
Given an array A of N integers. Your task is to write a program to find the 
maximum value of ∑arr[i]*i, where i = 0, 1, 2,., n 1.
You are allowed to rearrange the elements of the array.

Note: Since output could be large, hence module 109+7 and then print answer.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number} 
*/

class Solution {
    Maximize(arr, n) {
        //code here
        arr = arr.sort((a, b) => a - b);
        let ans = arr.map((num, index) => num * index).reduce((accum, val) => accum += val);
        return ans % ((10 ** 9) + 7);
    }
}