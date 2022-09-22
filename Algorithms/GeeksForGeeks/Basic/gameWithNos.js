
//# Game with nos

/*
You are given an array arr[], and you have to re-construct an array arr[].
The values in arr[] are obtained by doing Xor of consecutive elements in the array.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]} 
*/

class Solution {
    game_with_number(arr, n) {
        //code here
        let newArr = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            let num = arr[i] ^ arr[i + 1]
            newArr[i] += num;
        }
        return newArr;
    }
}