
// 1047. Remove All Adjacent Duplicates In String

/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of 
choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that 
the answer is unique.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {string}
 */

var removeDuplicates = function (s) {
    let newStr = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== newStr[newStr.length - 1]) {
            newStr.push(s[i]);
        } else {
            newStr.pop();
        }
    }

    return newStr.join("");
};
