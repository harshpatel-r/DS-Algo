
//# Ishaan Loves Chocolates

/*
As we know, Ishaan has a love for chocolates. He has bought a huge chocolate 
bar that contains N chocolate squares. Each of the squares has a tastiness 
level which is denoted by an array A[].
Ishaan can eat the first or the last square of the chocolate at once. Ishaan 
has a sister who loves chocolates too and she demands the last chocolate 
square. Now, Ishaan being greedy eats the more tasty square first. 
Determine the tastiness level of the square which his sister gets.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    chocolates(arr, n) {
        return Math.min(...arr)
    }
}
