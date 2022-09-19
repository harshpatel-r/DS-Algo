
//# Majority Element

// Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.

// SOLUTION 

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} size
 * @returns {number}
*/

class Solution {

    majorityElement(arr, size) {
        //CODE HERE
        if (arr.length == 1) return arr[0];
        if (arr.length == 2) {
            if (arr[0] == arr[1]) {
                return arr[0];
            } else return -1;
        }

        arr = arr.sort((a, b) => a - b);
        let check = size / 2;
        let i = 0;
        let s = 1;

        while (i < size) {
            if (arr[i - 1] == arr[i]) {
                s++;
            }
            if (arr[i] != arr[i - 1]) {
                s = 1;
            }
            if (s > check) {
                return arr[i]
            }
            i++;
        }
        return -1;
    }
}
