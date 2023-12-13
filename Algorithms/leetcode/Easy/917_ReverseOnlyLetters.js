
//# 917. Reverse Only Letters

/*
Given a string s, reverse the string according to the following rules:

=> All the characters that are not English letters remain in the same position.
=> All the English letters (lowercase or uppercase) should be reversed.

Return s after reversing it.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {string}
 */

var reverseOnlyLetters = function (s) {
    let letters = /[a-z]/i;
    s = s.split("");
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        while (!letters.test(s[i])) {
            i++;
        }

        while (!letters.test(s[j])) {
            j--;
        }

        if (i < j) {
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }
    }

    return s.join("");
};
