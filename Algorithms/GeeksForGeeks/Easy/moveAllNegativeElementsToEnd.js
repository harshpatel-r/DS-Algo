
//# Move all negative elements to end

/*
Given an unsorted array arr[] of size N having both negative and positive integers. The task is place all 
negative element at the end of array without changing the order of positive element and negative element.
*/

// SOLUTION

// } Driver Code Ends
//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
*/

class Solution {
    segregateElements(arr, n) {
        //code here
        let arr1 = [];
        let arr2 = [];

        for (let i = 0; i < n; i++) {
            if (arr[i] >= 0) {
                arr1.push(arr[i]);
            } else {
                arr2.push(arr[i]);
            }
        }

        for (let i = 0; i < arr1.length; i++) {
            arr[i] = arr1[i]
        }

        for (let i = arr1.length; i < n; i++) {
            arr[i] = arr2[i - arr1.length]
        }
    }
}
