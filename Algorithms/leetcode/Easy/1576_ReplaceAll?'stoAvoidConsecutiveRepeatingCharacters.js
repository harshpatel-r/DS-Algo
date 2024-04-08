
//# 1576. Replace All ?'s to Avoid Consecutive Repeating Characters

/*
Given a string s containing only lowercase English letters and the '?' character, convert all the '?' characters into 
lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify 
the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, 
return any of them. It can be shown that an answer is always possible with the given constraints.
*/


// SOLUTION 1:

/**
 * @param {string} s
 * @return {string}
 */

var modifyString = function (s) {
    s = s.split("");
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "?") {
            let prev = i === 0 ? null : s[i - 1];
            let next = i === s.length - 1 ? null : s[i + 1];

            for (let char of alphabet) {
                if (char !== prev && char !== next) {
                    s[i] = char;
                    break;
                }
            }
        }
    }

    return s.join("");
};


// SOLUTION 2:

var modifyString = function (s) {
    s = s.split("");
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "?") {
            if (s[i - 1] !== "a" && s[i + 1] !== "a") {
                s[i] = "a";
            } else if (s[i - 1] !== "b" && s[i + 1] !== "b") {
                s[i] = "b";
            } else {
                s[i] = "c";
            }
        }
    }

    return s.join("");
};
 