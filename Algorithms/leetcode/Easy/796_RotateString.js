
//# 796. Rotate String

/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
*/


// SOLUTION 1: 

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var rotateString = function (s, goal) {
    return (s.length === goal.length) && ((s + s).includes(goal));
};


// SOLUTION 2: 

var rotateString = function (s, goal) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === goal[0]) {
            if ((s.slice(i) + s.slice(0, i)) === goal) {
                return true;
            }
        }
    }

    return false;
};
