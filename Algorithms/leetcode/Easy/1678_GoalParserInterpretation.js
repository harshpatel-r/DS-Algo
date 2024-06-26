
//# 1678. Goal Parser Interpretation

/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" 
and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", 
and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.
*/


// SOLUTION :

/**
 * @param {string} command
 * @return {string}
 */

var interpret = function (command) {
    let res = "";
    let i = 0;

    while (i < command.length) {
        if (command[i] === "(" && command[i + 1] === "a") {
            res += "al";
            i += 4;
        } else if (command[i] === "(" && command[i + 1] === ")") {
            res += "o";
            i += 2;
        } else {
            res += "G";
            i += 1;
        }
    }

    return res;
};
