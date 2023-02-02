
//# Rearrange the array

/*
Given an array arr of n integers, task is to print the array in the order – 
smallest number,largest number, 2nd smallest number, 2nd largest number,3rd
smallest number, 3rd largest number and so on.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 */

class Solution {
    rearrangeArray(arr, n) {
        //code here
        let small = 0, max = n - 1;
        let newArr = arr.slice().sort((a, b) => a - b);

        for (let i = 0; i < n; i++) {
            if (i % 2 == 0) {
                arr[i] = newArr[small];
                small++;
            } else {
                arr[i] = newArr[max];
                max--;
            }
        }
    }
}