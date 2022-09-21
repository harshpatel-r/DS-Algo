
//# Print 1 To N Without Loop

// Print numbers from 1 to N without the help of loops.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @returns { }
*/

class Solution {
    printNos(N) {
        let ans = "";

        (function gocount(i) {
            if (i == N + 1) return;

            if (i <= N) {
                ans += i + " ";
                i++;
            }
            gocount(i);
        })(1);
        console.log(ans)
    }
}