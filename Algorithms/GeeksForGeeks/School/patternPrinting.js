
//# Pattern Printing

/*
Given a number N. The task is to print a series of asterisk(*) from 1 till N 
terms with increasing order and difference being 1.

Input:
N = 3
Output:
* ** ***
Explanation:
First, print 1 asterisk then space after
that print 2 asterisk and space after that 
print 3 asterisk now stop as N is 3.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 */
class Solution {
    printPattern(N) {
        //code here
        let j = N;
        let res = "";
        for (let i = 1; i <= N; i++) {
            j -= i;
            for (j; j < N; j++) {
                res += "*";
            }
            res += " ";
        }
        console.log(res);
    }
}
