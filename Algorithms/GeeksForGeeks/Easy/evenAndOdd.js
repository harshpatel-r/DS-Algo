
//# Even and Odd

/*
Given an array arr[] of size N containing equal number of odd and even numbers. Arrange the numbers in such 
a way that all the even numbers get the even index and odd numbers get the odd index.

Note: There are multiple possible solutions, Print any one of them. Also, 0-based indexing is considered.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns { }
*/

class Solution {
    reArrange(arr, n) {
        //code here
        let i = 0;
        let j = n - 1;
        while (i <= n && j >= 0) {
            if (arr[i] % 2 == 0) {
                i += 2
            }
            if (arr[j] % 2 !== 0) {
                j -= 2
            }
            if (arr[i] % 2 != 0 && arr[j] % 2 == 0) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
}
