
//# 859. Buddy Strings

/*
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
*/


// SOLUTION 1:

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var buddyStrings = function (s, goal) {
    const n = s.length;

    if (n !== goal.length) {
        return false;
    }

    if (s === goal && new Set(s).size < n) {
        return true;
    }

    const indices = [];
    for (let i = 0; i < n; i++) {
        if (s[i] !== goal[i]) {
            indices.push(i);
        }
    }

    return indices.length === 2 && s[indices[0]] === goal[indices[1]] && s[indices[1]] === goal[indices[0]];
};


//  SOLUTION 2: 

var buddyStrings = function (s, goal) {
    let constraintSameChar = false;
    let differentChar = 0;
    let n = s.length;

    // Check if the length is 1
    if (n === 1) {
        return false;
    }

    // Check if the sorted strings are different
    if (s.split("").sort().join("") !== goal.split("").sort().join("")) {
        return false;
    }

    // Check if there are at least one repeated character in the string
    if (new Set(s.split("")).size !== n) {
        constraintSameChar = true;
    }

    // Count different characters
    for (let i = 0; i < n; i++) {
        if (s[i] !== goal[i]) {
            differentChar++;
        }
    }

    return differentChar === 2 || (differentChar === 0 && constraintSameChar);
};