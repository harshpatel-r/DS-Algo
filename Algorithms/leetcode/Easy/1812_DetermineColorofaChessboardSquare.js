
//# 1812. Determine Color of a Chessboard Square

/*
You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard 
for your reference.

--> https://assets.leetcode.com/uploads/2021/02/19/screenshot-2021-02-20-at-22159-pm.png

Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and 
the number second.
*/


// SOLUTION

/**
 * @param {string} coordinates
 * @return {boolean}
 */

var squareIsWhite = function (coordinates) {
    let strToNum = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8
    }

    let bottomLine = strToNum[coordinates[0]];

    if (bottomLine % 2 === 0) {
        return coordinates[1] % 2 !== 0;
    } else {
        return coordinates[1] % 2 == 0;
    }
};
