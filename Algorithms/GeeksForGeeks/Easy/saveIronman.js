
//# Save Ironman

/*
Jarvis is weak in computing palindromes for Alphanumeric characters.

While Ironman is busy fighting Thanos, he needs to activate sonic punch but Jarvis is stuck in 
computing palindromes.

You are given a string S containing alphanumeric characters. Find out whether the string is a 
palindrome or not.

If you are unable to solve it then it may result in the death of Iron Man.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string} s
 * @returns {bool}
*/

class Solution {
    saveIronman(s) {
        let n = result.length;
        s = s.toLowerCase();
        let regx = /[^a-z1-9]/g;

        let result = s.replace(regx, '');

        for (let i = 0; i < Math.floor(n / 2); i++) {
            if (result[i] !== result[n - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}