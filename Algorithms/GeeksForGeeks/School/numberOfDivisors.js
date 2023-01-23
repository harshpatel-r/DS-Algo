
//# Number of divisors

// Given an integer N, find the number of divisors of N that are divisible by 3.

// SOLUTION

//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */
class Solution {
    count_divisors(N) {
        //code here
        let res = 0;
        for (let i = 1; i <= N / 2; i++) {
            if (N % i == 0) {
                if (i % 3 == 0) {
                    res++;
                }
            }
        }
        return (N % 3 == 0) ? ++res : res;
    }
}
