
//# Rearrange Array Alternately

/*
Given a sorted array of positive integers. Your task is to rearrange  
the array elements alternatively i.e first element should be max 
value, second should be min value, third should be second max, 
fourth should be second min and so on.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 */

class Solution {
    //Function to rearrange  the array elements alternately.
    rearrange(arr, n) {
        // code here
        let newArr = arr.slice();
        let i = 0;
        let j = n - 1;
        let k = 0;
        while (i < j & k < n) {
            arr[k] = newArr[j];
            arr[k + 1] = newArr[i];
            i++;
            j--;
            k += 2;
        }

        if (n % 2 != 0) {
            arr[n - 1] = newArr[i]
        }
    }
}