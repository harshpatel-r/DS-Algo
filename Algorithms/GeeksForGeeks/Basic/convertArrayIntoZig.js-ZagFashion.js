
//# Convert array into Zig-Zag fashion

/*
Given an array arr of distinct elements of size N, the task is to rearrange the 
elements of the array in a zig-zag fashion so that the converted array should 
be in the below form: 

arr[0] < arr[1]  > arr[2] < arr[3] > arr[4] < . . . . arr[n-2] < arr[n-1] > arr[n]. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
*/

class Solution {
    zigZag(arr, n) {
        //code here
        let temp, bemp;
        for (let i = 1; i < n; i += 2) {
            if (arr[i - 1] > arr[i]) {
                temp = arr[i - 1]
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
            if ((i + 1 < n) && arr[i + 1] > arr[i]) {
                bemp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = bemp
            }
        }
    }
}