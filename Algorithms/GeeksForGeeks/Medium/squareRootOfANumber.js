
//# Square root of a number

// Given an integer x, find the square root of x. If x is not a perfect square, then return floor(√x).

//SOLUTION

//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.floorSqrt(n));

    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @returns {number}
*/

class Solution {

    floorSqrt(x) {
        let n = Math.floor(x / 2);
        for (let i = n; i >= 1; i--) {
            if (i * i == x) return i;
            if (i * i < x) return i;
        }
        return x;
    }
}

