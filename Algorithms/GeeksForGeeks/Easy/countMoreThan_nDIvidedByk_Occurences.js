
//Count More than n/k Occurences

/*
Given an array arr[] of size N and an element k. The task is to find all elements in array that appear 
more than n/k times.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    //Function to find all elements in array that appear more than n/k times.
    countOccurence(arr, n, k) {
        //your code here
        let count = 0;
        let num = n / k;
        let newArr = new Array(Math.max(...arr) + 1).fill(0);
        for (let i = 0; i < n; i++) {
            newArr[arr[i]]++;
        }
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] > num) {
                count++;
            }
        }
        return count;
    }
}
