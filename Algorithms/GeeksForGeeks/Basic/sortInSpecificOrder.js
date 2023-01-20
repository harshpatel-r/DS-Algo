
//# Sort in specific order

/*
Given an array A of positive integers. Your task is to sort them in such a way
 that the first part of the array contains odd numbers sorted in descending 
 order, rest portion contains even numbers sorted in ascending order.
 */

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
*/

class Solution {
    sortIt(arr, n) {
        //code here 1 2 3 4 5 7 10 => 1 2 3 4 5 10
        arr.sort((a, b) => a - b);
        let odd = []

        for (let i = n - 1; i >= 0; i--) {
            if (!(arr[i] % 2 == 0)) {
                let x = arr.splice(i, 1);
                odd.push(x);
            }
        }

        return arr.unshift(...odd);
    }
}

