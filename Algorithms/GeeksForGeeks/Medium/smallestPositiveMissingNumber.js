
//# Smallest Positive missing number

/*
You are given an array arr[] of N integers including 0. The task is to find the smallest positive number 
missing from the array.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    //Function to find the smallest positive number missing from the array.
    missingNumber(arr, n) {
        //your code here
        for (let i = 0; i < n; i++) {
            let element = arr[i];
            if (element >= 1 && element <= n) {
                let ind = element - 1;
                if (arr[ind] != element) {
                    [arr[ind], arr[i]] = [arr[i], arr[ind]];
                    --i;
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (i + 1 !== arr[i]) {
                return i + 1;
            }
        }

        return n + 1;
    }
}
