
//# 482. License Key Formatting

/*
You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. 
The string is separated into n + 1 groups by n dashes. You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, 
which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash 
inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key.
*/

// SOLUTION


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var licenseKeyFormatting = function (s, k) {
    s = s.toUpperCase();
    s = s.replace(new RegExp("-", "g"), "");

    let key = "";
    let count = 1;

    for (let i = s.length - 1; i >= 0; i--) {
        if (count == k && i != 0) {
            key = "-" + s[i] + key;
            count = 1;

        } else {
            key = s[i] + key;
            count++;
        }
    }

    return key;
}
