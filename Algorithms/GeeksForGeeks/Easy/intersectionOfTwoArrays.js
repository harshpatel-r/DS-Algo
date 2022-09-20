
//# Intersection of two arrays

/*
Given two arrays a[] and b[] respectively of size n and m, the task is to print the count 
of elements in the intersection (or common elements) of the two arrays.

For this question, the intersection of two arrays can be defined as the set containing 
distinct common elements between the two arrays. 
*/

// SOLUTION

//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);

        let a = new Array(n);
        let b = new Array(m);

        input_line = readLine().split(' ');
        for (let i = 0; i < n; i++) {
            a[i] = parseInt(input_line[i]);
        }

        input_line = readLine().split(' ');
        for (let i = 0; i < m; i++) {
            b[i] = parseInt(input_line[i]);
        }
        let obj = new Solution();

        let ans = obj.NumberofElementsInIntersection(a, b, n, m);
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
class Solution {
    // Function to return the count of the number of elements in
    // the intersection of two arrays.
    NumberofElementsInIntersection(a, b, n, m) {
        a = new Set(a);
        b = new Set(b);
        let arr = [...a, ...b];
        let l = arr.length;
        let ans = [...new Set(arr)].length;
        return l - ans;
    }
}
