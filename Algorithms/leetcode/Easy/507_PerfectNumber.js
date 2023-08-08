
//# 507. Perfect Number

/*
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the 
number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.
*/

// SOLUTION


/**
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function(num) {
    if(num == 1) return false;
    let sum = 1; 
    let n = Math.sqrt(num);

    for(let i = 2; i <= n; i++){
        if(num%i === 0){
            sum += i;
            if(i !== n) sum += num/i;
        }
    }
    
    return sum === num ? true : false;
};