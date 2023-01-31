
// Greater on right side

/*
You are given an array Arr of size N. Replace every element with the next greatest 
element (greatest element on its right side) in the array. Also, since there is no 
element next to the last element, replace it with -1.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    nextGreatest(arr, n) {
        //code here
        let ind = 0;
        let number;
        for (let i = 0; i < n - 1; i++) {
            if (ind == i) {
                let newArr = arr.slice(i + 1);
                number = Math.max(...newArr);
                ind = newArr.indexOf(number) + i + 1;
            }
            arr[i] = number;
        }

        arr[n - 1] = -1;
    }
}
