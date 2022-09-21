
//# Pythagorean Triplet

/*
Given an array arr of N integers, write a function that returns true if there 
is a triplet (a, b, c) that satisfies a2 + b2 = c2, otherwise false.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {boolean}
*/

class Solution {
    checkTriplet(arr, n) {
        //code here
        let ans = false;
        let res = arr.map((a) => a ** 2);
        res.sort((a, b) => a - b)
        for (let i = 0; i < n - 1; i++) {
            for (let j = 1 + i; j < n; j++) {
                if (res.includes(res[i] + res[j])) return ans = true
            }
        }
        return ans
    }
}