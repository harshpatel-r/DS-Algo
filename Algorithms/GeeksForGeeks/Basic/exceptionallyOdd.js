
//# Exceptionally odd

/*
Given an array of N positive integers where all numbers occur even number of times 
except one number which occurs odd number of times. Find the exceptional number.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    getOddOccurrence(arr, n) {
        let newArr = new Array(Math.max(...arr) + 1).fill(0);
        let res = 0;
        let ind = 0;
        for (let i = 0; i < n; i++) {
            newArr[arr[i]]++;
        }

        for (let j = 0; j < newArr.length; j++) {
            if (!(newArr[j] % 2 == 0)) {
                if (newArr[j] > res) {
                    res = newArr[j];
                    ind = j;
                }
            }
        }

        return ind;
    }
}
