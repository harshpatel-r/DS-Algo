
//# 1935. Maximum Number of Words You Can Type

/*
There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard 
work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string 
brokenLetters of all distinct letter keys that are broken, return the number of words in text you can 
fully type using this keyboard.
*/


// SOLUTION:

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */

var canBeTypedWords = function (text, brokenLetters) {
    let set = new Set(brokenLetters);
    text = text.split(" ");
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        let type = true;
        for (let j = 0; j < text[i].length; j++) {
            if (set.has(text[i][j])) {
                type = false;
                break;
            }
        }

        if (type) count++;
    }

    return count;
};
