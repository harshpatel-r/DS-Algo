
//# Key Pair

/*
Given an array Arr of N positive integers and another number X. Determine 
whether or not there exist two elements in Arr whose sum is exactly X.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */

class Solution {
    hasArrayTwoCandidates(arr, n, x) {
        arr = arr.sort((a, b) => a - b)
        let i = 0;
        let j = n - 1;

        while (j > i) {
            if (arr[i] + arr[j] > x) {
                j--;
                continue;
            }
            else if (arr[i] + arr[j] < x) {
                i++;
            }
            else if (arr[i] + arr[j] == x) {
                return true;
            }
        }
        return false;
    }
}