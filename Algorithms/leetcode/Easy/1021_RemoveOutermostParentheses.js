
//# 1021. Remove Outermost Parentheses

/*
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses 
strings, and + represents string concatenation.

-> For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it 
into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi 
are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition 
of s.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {string}
 */

var removeOuterParentheses = function (s) {
    let output = "";
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (count > 0) {
                output += "(";
            }
            count++;
        } else if (s[i] === ")") {
            count--;
            if (count > 0) {
                output += ")";
            }
        }
    }

    return output;
};
