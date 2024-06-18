
//# 17. Letter Combinations of a Phone Number

/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that 
the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 
does not map to any letters.

IMAGE : https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png
*/


// SOLUTION:

/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    let letters = {
        2: "abc", 3: "def", 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    }

    let digitLetters = [];

    for (let num of digits) {
        digitLetters.push(letters[num]);
    }

    let res = [...digitLetters[0].split("")];

    for (let i = 1; i < digitLetters.length; i++) {
        for (let j = 0; j < res.length; j++) {
            let letter = res[j];
            let arr = [];

            for (let k = 0; k < digitLetters[i].length; k++) {
                arr.push(letter + digitLetters[i][k]);
            }

            let n = arr.length;
            res.splice(j, 1, ...arr)
            j += n - 1;
        }
    }

    return res;
};
