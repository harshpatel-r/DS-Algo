
//# 1417. Reformat The String

/*
You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another 
digit. That is, no two adjacent characters have the same type.

Return the reformatted string or return an empty string if it is impossible to reformat the string.
*/


// SOLUTION 1:

/**
 * @param {string} s
 * @return {string}
 */

var reformat = function (s) {
    let digitArr = [];
    let charArr = [];
    let digitCount = 0;
    let charCount = 0;
    let output = "";
    let regNum = /[0-9]/;

    for (let char of s) {
        if (regNum.test(char)) {
            digitArr.push(char);
            digitCount++;
        } else {
            charArr.push(char);
            charCount++;
        }
    }

    if (Math.abs(digitCount - charCount) > 1) return "";

    let i = 0, j = 0;

    let addDigit = () => {
        if (j < digitArr.length) {
            output += digitArr[j];
            j++;
        }
    }

    let addChar = () => {
        if (i < charArr.length) {
            output += charArr[i];
            i++;
        }
    }

    while (i < charArr.length || j < digitArr.length) {
        if (digitCount > charCount) {
            addDigit();
            addChar();
        } else {
            addChar();
            addDigit();
        }
    }

    return output;
};


// SOLUTION 2:

/**
 * @param {string} s
 * @return {string}
 */

var reformat = function (s) {
    let digitCount = 0;
    let charCount = 0;
    let output = ""
    let regNum = /[0-9]/;

    for (let char of s) {
        regNum.test(char) ? digitCount++ : charCount++;
    }

    if (Math.abs(digitCount - charCount) > 1) return "";

    let i = 0, j = 0;

    let addDigit = () => {
        while (j < s.length) {
            if (regNum.test(s[j])) {
                output += s[j];
                j++;
                break;
            } else {
                j++;
            }
        }
    }

    let addChar = () => {
        while (i < s.length) {
            if (!regNum.test(s[i])) {
                output += s[i];
                i++;
                break;
            } else {
                i++;
            }
        }
    }

    while (i < s.length || j < s.length) {
        if (digitCount > charCount) {
            addDigit();
            addChar();
        } else {
            addChar();
            addDigit();
        }
    }

    return output;
};
