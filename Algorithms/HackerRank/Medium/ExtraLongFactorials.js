
//# Extra Long Factorials

/*
Problem Statement :-
https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true
*/

// SOLUTION


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    let res = BigInt(1);
    
    for (let i = n; i > 0; i--) {
        res = res * BigInt(i);
    }

    console.log(res.toString());
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
