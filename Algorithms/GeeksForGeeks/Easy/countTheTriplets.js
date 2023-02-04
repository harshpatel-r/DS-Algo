
//# Count the triplets

/*
Given an array of distinct integers. The task is to count all the triplets 
such that sum of two elements equals the third element.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {

    countTriplet(arr, n) {
        let count = 0;
        let set = new Set(arr);

        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (set.has(arr[i] + arr[j])) {
                    count++
                }
            }
        }

        return count;
    }
}
