//# Last cell in a Matrix

/*
Given a binary matrix of dimensions  with R rows and C columns. Start from cell(0, 0), moving in the right direction. 
Perform the following operations: 

    -> If the value of matrix[i][j] is 0, then traverse in the same direction and check the next value.

    -> If the value of matrix[i][j] is 1, then update matrix[i][j] to 0 and change the current direction clockwise. ie 
    - up, right, down, or left directions change to right, down, left, and up respectively.

Find the index of the cell where you will be forced to exit the matrix while performing the given traversal. 
*/

// SOLUTION


let matrix = [[0, 0, 1, 1, 0],
[1, 0, 1, 0, 1],
[1, 0, 0, 0, 0]];
let R = 3;
let C = 5;
let val = "right";
let dir = ["down", "left", "up", "right"];
let i = 0;
let j = 0;

while (R > i && C > i && i >= 0 && j >= 0) {
    if (matrix[i][j] == 0) {
        switch (val) {
            case "down":
                i++;
                break;
            case "left":
                j--;
                break;
            case "up":
                i--;
                break;
            case "right":
                j++;
                break;
        }

        continue;
    }

    if (matrix[i][j] == 1) {
        matrix[i][j] = 0;

        val = dir[0];
        dir.splice(0, 1);
        dir.push(val);

        switch (val) {
            case "down":
                i++;
                break;
            case "left":
                j--;
                break;
            case "up":
                i--;
                break;
            case "right":
                j++;
                break;
        }

    }
}

if (i == R) {
    i--;
} else if (i < 0) {
    i++;
} else if (j == C) {
    j--;
} else {
    j++;
}

return [i, j];