
//# 1446. Consecutive Characters

/*
The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {number}
 */

var maxPower = function (s) {
    let maxconsecutiveChar = 0;
    let consecutiveCharCount = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            consecutiveCharCount++;
        } else {
            if (consecutiveCharCount > maxconsecutiveChar) {
                maxconsecutiveChar = consecutiveCharCount;
            }

            consecutiveCharCount = 1;
        }
    }

    return maxconsecutiveChar;
};
