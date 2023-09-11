
//# The Hurdle Race

/*
A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and 
the characters have a maximum height they can jump. There is a magic potion they can take that will increase -
their maximum jump height by  unit for each dose. How many doses of the potion must the character take to be able
to jump all of the hurdles. If the character can already clear all of the hurdles, return .

Example:
height = [1, 2, 2, 3, 2]
k = 1;

Result : 3 - 2 =  2

The character can jump  unit high initially and must take  doses of potion to be able to jump all of the hurdles.
*/

// SOLUTION


'use strict';

const fs = require('fs');

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
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    // Write your code here
    let unit = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > k) {
            let u = height[i] - k;
            unit = unit < u ? u : unit;
        }
    }

    return unit;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const height = readLine().replace(/\s+$/g, '').split(' ').map(heightTemp => parseInt(heightTemp, 10));

    const result = hurdleRace(k, height);

    ws.write(result + '\n');

    ws.end();
}
