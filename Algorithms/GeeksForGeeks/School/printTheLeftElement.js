
//# Print the left element

/*
Given a array of length N, at each step it is reduced by 1 element. In the first
 step the maximum element would be removed, while in the second step minimum 
 element of the remaining array would be removed, in the third step again 
 the maximum and so on. Continue this till the array contains only 1 element. 
 And find the final element remaining in the array.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    leftElement(arr, n) {
        arr.sort((a, b) => a - b);

        if (n % 2 == 0) {
            return arr[n / 2 - 1];
        } else {
            return arr[Math.floor(n / 2)];
        }
    }
}
