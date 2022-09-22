
//# Prime Number

/*
For a given number N check if it is prime or not. A prime number is a number 
which is only divisible by 1 and itself.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} n
 * @return {number}
*/

class Solution {
    isPrime(n) {
        //code here
        if (n == 2) return 1;
        if (n == 1 || n % 2 == 0) return 0;

        for (let i = 3; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return 0;
        }
        return 1;
    }
}