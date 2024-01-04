
//# 1275. Find Winner on a Tic Tac Toe Game

/*
Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

-> Players take turns placing characters into empty squares ' '.
-> The first player A always places 'X' characters, while the second player B always places 'O' characters.
-> 'X' and 'O' characters are always placed into empty squares, never on filled ones.
-> The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
-> The game also ends if all squares are non-empty.
-> No more moves can be played if the game is over.

Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return 
the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play 
return "Pending".

You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.
*/


// SOLUTION

/**
 * @param {number[][]} moves
 * @return {string}
 */

var tictactoe = function (moves) {
    let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    let n = matrix.length;
    let output = "Draw";

    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            matrix[moves[i][0]][moves[i][1]] = "X"
        } else {
            matrix[moves[i][0]][moves[i][1]] = "O"
        }
    }

    //# Diagoanl Section 
    for (let i = 0; i < 1; i++) {
        let firstCross = { 'X': 0, 'O': 0, 0: 0 };
        let secondCross = { 'X': 0, 'O': 0, 0: 0 };

        for (let j = 0; j < n; j++) {
            firstCross[matrix[j][j]]++;
            secondCross[matrix[j][n - j - 1]]++;
        }

        if (firstCross["X"] === 3 || firstCross["O"] === 3) {
            return firstCross["X"] === 3 ? "A" : "B";
        } else if (secondCross["X"] === 3 || secondCross["O"] === 3) {
            return secondCross["X"] === 3 ? "A" : "B";
        }
    }

    //# Raw & Column Section
    for (let i = 0; i < n; i++) {
        let rawValue = { 'X': 0, 'O': 0, 0: 0 };
        let columnValue = { 'X': 0, 'O': 0, 0: 0 };

        for (let j = 0; j < n; j++) {
            rawValue[matrix[i][j]]++;
            columnValue[matrix[j][i]]++;
        }

        if (rawValue["X"] === 3 || rawValue["O"] === 3) {
            return rawValue["X"] === 3 ? "A" : "B";
        } else if (columnValue["X"] === 3 || columnValue["O"] === 3) {
            return columnValue["X"] === 3 ? "A" : "B";
        }
    }

    if (matrix.flat().includes(0)) {
        output = "Pending"
    }

    return output;
};
