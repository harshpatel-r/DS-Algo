
//# 844. Backspace String Compare

/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/


// SOLUTION

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
    let i = 0;
    while (i < s.length) {
        if (s[i] === '#') {
            if (i === 0) {
                s = s.slice(i + 1);
            } else {
                s = s.slice(0, i - 1) + s.slice(i + 1);
                i--;
            }

        } else {
            i++;
        }
    }

    let j = 0;
    while (j < t.length) {
        if (t[j] === '#') {
            if (j === 0) {
                t = t.slice(j + 1);
            } else {
                t = t.slice(0, j - 1) + t.slice(j + 1);
                j--;
            }

        } else {
            j++;
        }
    }

    return s === t;
};
