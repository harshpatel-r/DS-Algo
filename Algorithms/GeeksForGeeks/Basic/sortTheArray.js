
//# Sort The Array

// Given a random set of numbers, Print them in sorted order.

// SOLUTION

class Solution {
    /**
    * @param number n
    * @param number[] arr
    
    * @returns number[]
    */
   
    sortArr(n, arr) {
        // code here
        return arr.sort((a, b) => a - b)
    }
}
