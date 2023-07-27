
//# 344. Reverse String

/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

// SOLUTION

// Solution 1: 

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
    let n = s.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
    }
};

// Solution 2: 

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
    let n = s.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        [s[i], s[n - i - 1]] = [s[n - i - 1], s[i]]
    }
};

