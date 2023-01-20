
//# Print 1 to n without using loops

// You are given an integer N. Print numbers from 1 to N without the help of loops.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns {void}
*/

class Solution {
    printTillN(n) {
        let res = "";
        function num(N) {
            res += N + " ";

            if (N == n) return;

            num(N + 1);
        }
        num(1);
        console.log(res);
    }
}
