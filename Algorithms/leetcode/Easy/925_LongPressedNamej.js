
//# 925. Long Pressed Name

/*
Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, 
and the character will be typed 1 or more times.

You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with 
some characters (possibly none) being long pressed.
*/


// SOLUTION

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

var isLongPressedName = function (name, typed) {
    let i = 0;
    let j = 0;

    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            i++;
            j++;
        } else if (j === 0 || typed[j] !== typed[j - 1]) {
            return false;
        } else {
            j++;
        }
    }

    return i === name.length && j === typed.length;
};