
//# Max distance between same elements

/*
Given an array with repeated elements, the task is to find the maximum 
distance between two occurrences of an element.
*/

// SOLUTION

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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.maxDistance(arr, n);
        console.log(res);

    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    maxDistance(arr, n) {
        let dist = 0;

        for (let i = 0; i < n; i++) {
            let s = arr.indexOf(arr[i]);
            let e = arr.lastIndexOf(arr[i]);
            let tl = e - s;
            if (tl > dist) dist = tl;
        }
        
        return dist;
    }
}