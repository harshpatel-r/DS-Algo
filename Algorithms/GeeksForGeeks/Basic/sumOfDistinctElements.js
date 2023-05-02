
//Sum of distinct elements

// You are given an array Arr of size N. Find the sum of distinct elements in an array.

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    findSum(arr, n) {
        //code here
        let sum = 0;
        let newArr = [... new Set(arr)];
        
        for (let i = 0; i < newArr.length; i++) {
            sum += newArr[i];
        }

        return sum;
    }
}