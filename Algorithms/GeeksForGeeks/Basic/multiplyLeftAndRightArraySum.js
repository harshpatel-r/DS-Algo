
//# Multiply left and right array sum.

/*
Pitsy needs help with the given task by her teacher. The task is to divide 
an array into two sub-array (left and right) containing n/2 elements each 
and do the sum of the subarrays and then multiply both the subarrays.

Note: If the length of the array is odd then the right half will contain 
one element more than the left half.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    multiply(arr, n) {
        //code here
        let a = 0;
        let b = 0;
        let m = Math.ceil(n / 2)
        for (let i = 0; i < m; i++) {
            if (n % 2 == 0) {
                a += arr[i];
                b += arr[n - 1 - i]
            } else {
                if (i < m - 1) a += arr[i];
                b += arr[n - 1 - i]
            }
        }
        return a * b
    }
}