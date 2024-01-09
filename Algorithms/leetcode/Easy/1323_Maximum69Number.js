
//# 1323. Maximum 69 Number

/*
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/


// SOLUTION

/**
 * @param {number} num
 * @return {number}
 */

var maximum69Number = function (num) {
    num = num.toString().split("");
    let ind = num.indexOf("6");

    if (ind !== -1) {
        num[ind] = "9";
    }

    return num.join("");
};
