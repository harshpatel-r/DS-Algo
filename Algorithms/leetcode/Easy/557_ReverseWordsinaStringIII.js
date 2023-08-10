
//# 557. Reverse Words in a String III

/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving 
whitespace and initial word order.
*/

// SOLUTION

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
    s = s.split(" ");

    for (let i = 0; i < s.length; i++) {
        let l = s[i].length
        s[i] = s[i].split("");

        for (let j = 0; j < Math.floor(l / 2); j++) {
            let temp = s[i][j];
            s[i][j] = s[i][l - 1 - j];
            s[i][l - 1 - j] = temp;
        }

        s[i] = s[i].join("")
    }

    return s.join(" ")
};
