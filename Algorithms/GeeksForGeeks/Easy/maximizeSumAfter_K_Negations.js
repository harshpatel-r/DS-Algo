
// Maximize sum after K negations

/*
Given an array of integers of size N and a number K., You must modify array arr[] exactly K number of times. 
Here modify array means in each operation you can replace any array element either arr[i] by -arr[i] or 
-arr[i] by arr[i]. You need to perform this operation in such a way that after K operations, the sum of 
the array must be maximum.
*/

// SOLUTION



//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {number} 
*/

class Solution {
    maximizeSum(arr, n, k) {
        //code here
        let j;
        let ind;
        let sum = 0;
        let l = 0;

        arr.sort((a, b) => a - b);

        for (let i = 0; i < k; i++) {
            if (arr[i] < 0) {
                let val = arr[i]
                arr[i] = Math.abs(val);
            } else {
                j = i;
                l = k - j;
                break;
            }
        }

        if (!(l % 2 == 0)) {
            ind = arr.indexOf(Math.min(...arr));
            let val = arr[ind];
            arr[ind] = -val
        }

        for (let i = 0; i < n; i++) {
            sum += arr[i];
        }

        return sum;
    }
}
