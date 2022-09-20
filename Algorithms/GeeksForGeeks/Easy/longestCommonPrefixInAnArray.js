
//# Longest Common Prefix in an Array

// Given a array of N strings, find the longest common prefix among all strings present in the array.

// SOLUTION

//User function Template for javascript

/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
 */

class Solution {
    longestCommonPrefix(arr, n) {
        if (n == 1) return arr[0];
        arr = arr.sort();
        let ans = -1;

        for (let i = 0; i < arr[0].length; i++) {
            let num = 0;
            let str = arr[0].slice(0, 2 + i);

            for (let j = 1; j < arr.length; j++) {
                if (arr[j].includes(str)) num++;
                if (num == arr.length - 1) ans = str;
            }
            
        }
        return ans;
    }
}