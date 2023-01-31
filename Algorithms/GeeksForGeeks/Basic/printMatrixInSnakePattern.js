
//# Print Matrix in snake Pattern

/*
Given a matrix of size N x N. Print the elements of the matrix in the snake 
like pattern depicted below.

--> please check the image..link is below
https://contribute.geeksforgeeks.org/wp-content/uploads/snake-pattern.jpg

Input:
N = 3 
matrix[][] = {{45, 48, 54},
             {21, 89, 87}
             {70, 78, 15}}
Output: 45 48 54 87 89 21 70 78 15 
Explanation:
Matrix is as below:
45 48 54
21 89 87
70 78 15
Printing it in snake pattern will lead to 
the output as 45 48 54 87 89 21 70 78 15.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[][]} matrix
 * @returns {number[]} 
*/
class Solution {
    //Function to return list of integers visited in snake pattern in matrix.
    snakePattern(matrix) {
        // code here
        let n = matrix.length;
        let arr = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i == 0 || i % 2 == 0) {
                    arr.push(matrix[i][j])
                } else {
                    arr.push(matrix[i][(n - 1) - j]);
                }
            }
        }
        return arr;
    }
}
