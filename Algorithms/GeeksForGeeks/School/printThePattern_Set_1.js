
//# Print the pattern | Set-1

/*
You a given a number N. You need to print the pattern for the given value of N.

For N = 2 the pattern will be 
2 2 1 1
2 1

For N = 3 the pattern will be 
3 3 3 2 2 2 1 1 1
3 3 2 2 1 1
3 2 1

Note: Instead of printing a new line print a "$" without quotes.
*/

// SOLUTION 



//User function Template for javascript

/**
 * @param {number} n
*/

class Solution {
    printPat(n) {
        //code here
        var arr = "";
        for (var i = n; i > 0; i--) {
            for (var j = n; j > 0; j--) {
                for (var k = i; k > 0; k--) {
                    arr += j + " ";
                }
            }
            arr += "$";
        }
        console.log(arr);
    }
}