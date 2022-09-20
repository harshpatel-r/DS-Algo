
//# Sort an array of 0s, 1s and 2s

// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/

class Solution {

    sort012(arr, N) {
        let str = arr.join("")
        let n1 = 0;
        let n3 = N - 1;

        for (let i = 0; i < N; i++) {
            if (str[i] == 1) continue;
            if (str[i] == 0) {
                arr[n1] = 0;
                ++n1;
            }

            if (str[i] == 2) {
                arr[n3] = 2;
                n3--;
            }
        }
        for (let j = n1; j < n3 + 1; j++) {
            arr[j] = 1;
        }
    }
}
