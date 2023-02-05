
//# Two Repeated Elements

/*
You are given an array of N+2 integer elements. All elements of the array are in the range 1 to N. Also, 
all elements occur once except two numbers which occur twice. Find the two repeating numbers.

Note: Return the numbers in their order of appearing twice. So, if X and Y are the repeating 
numbers, and X repeats twice before Y repeating twice, then the order should be (X, Y).
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    //Function to find two repeated elements.
    twoRepeated(arr, N) {
        //your code here
        let newArr = [...new Set(arr)];

        let res = [];
        let i = 0;
        let j = 0;

        while (i < (N + 2)) {
            if (arr[i] == newArr[j]) {
                i++;
                j++;
            } else {
                res.push(arr[i]);
                i++;
            }
        }

        return res;
    }
}
