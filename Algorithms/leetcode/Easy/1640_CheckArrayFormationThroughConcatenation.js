
//# 1640. Check Array Formation Through Concatenation

/*
You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers
in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. 
However, you are not allowed to reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces. Otherwise, return false.
*/


// SOLUTION :

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */

var canFormArray = function (arr, pieces) {
    for (let i = 0; i < pieces.length; i++) {
        let ind = arr.indexOf(pieces[i][0]);

        if (ind === -1) {
            return false;
        } else {
            arr.splice(ind, 1, "Used");
        }

        let j = 1;

        while (j < pieces[i].length) {
            if (pieces[i][j] === arr[++ind]) {
                j++;
                arr.splice(ind, 1, "Used");
            } else {
                return false;
            }
        }
    }

    return true;
};
