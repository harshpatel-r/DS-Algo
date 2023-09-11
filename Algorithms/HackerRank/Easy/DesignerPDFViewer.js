
//# Designer PDF Viewer

/*
Problem Statement:
https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true
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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Write your code here
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let length = word.length;
    let maxHeight = Math.max();

    for (let i = 0; i < length; i++) {
        let height = h[letters.indexOf(word[i])];
        maxHeight = maxHeight < height ? height : maxHeight;
    }

    return maxHeight * length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    const result = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}
