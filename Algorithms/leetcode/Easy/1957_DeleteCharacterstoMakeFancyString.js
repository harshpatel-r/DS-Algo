
//# 1957. Delete Characters to Make Fancy String

/*
A fancy string is a string where no three consecutive characters are equal.

Given a string s, delete the minimum possible number of characters from s to make it fancy.

Return the final string after the deletion. It can be shown that the answer will always be unique.
*/


// SOLUTION:

/**
 * @param {string} s
 * @return {string}
 */

var makeFancyString = function (s) {
    let fancyStr = s[0];
    let consecutiveCount = 1;
    let i = 1;

    while (i < s.length) {
        s[i - 1] === s[i] ? consecutiveCount++ : consecutiveCount = 1;

        if (consecutiveCount < 3) {
            fancyStr += s[i];
        }

        i++;
    }

    return fancyStr;
};
