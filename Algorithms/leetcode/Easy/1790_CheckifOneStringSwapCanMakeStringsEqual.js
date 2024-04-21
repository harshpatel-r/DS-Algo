
//# 1790. Check if One String Swap Can Make Strings Equal

/*
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose 
two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on 
exactly one of the strings. Otherwise, return false.
*/


// SOLUTION :

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var areAlmostEqual = function (s1, s2) {
    let unmatch = [];
    let count = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            unmatch.push(i);
            count++;
            if (count > 2) return false;
        }
    }

    if (count === 0) return true;

    if (count === 2 && s1[unmatch[0]] === s2[unmatch[1]] && s1[unmatch[1]] === s2[unmatch[0]]) {
        return true;
    } else {
        return false;
    }
};
