
//# Immediate Smaller Element

/*
Given an integer array Arr of size N. For each element in the array, check 
whether the right adjacent element (on the next immediate position) of the 
array is smaller. If next element is smaller, update the current index to 
that element. If not, then  -1.
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
        // let [V,E] =  readLine().trim().split(" ").map((x) => parseInt(x));
        let n = parseInt(readLine());
        // let X =  readLine().trim().split(" ").map((x) => parseInt(x));
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.immediateSmaller(arr, n);
        let s = "";
        for (let it of arr) {
            s += it + " ";
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
*/

class Solution {
    immediateSmaller(arr, n) {
        //code here
        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1];
            } else {
                arr[i] = -1;
            }
        }
    }
}