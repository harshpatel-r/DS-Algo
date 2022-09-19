
//# Bubble Sort

// Given an Integer N and a list arr. Sort the array using bubble sort algorithm.

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {
    //Function to sort the array using bubble sort algorithm.
    bubbleSort(arr, n) {
        let temp;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}