
//# Count Odd Even

// Given an array A[] of N elements. The task is to count number of even and odd elements in the array.

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
*/

class Solution {

    countOddEven(arr, n) {
        let even = 0;
        let odd = 0;
        let i = 0;
        while (i < n) {
            if (arr[i] % 2 == 0) {
                even++
            } else {
                odd++;
            }
            i++;
        }
        console.log(odd, even)
    }
}