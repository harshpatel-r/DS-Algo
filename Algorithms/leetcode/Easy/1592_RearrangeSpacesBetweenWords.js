
//# 1592. Rearrange Spaces Between Words

/*
You are given a string text of words that are placed among some number of spaces. Each word consists of one or more 
lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one 
word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number 
is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the 
returned string should be the same length as text.

Return the string after rearranging the spaces.
*/


// SOLUTION

/**
 * @param {string} text
 * @return {string}
 */

var reorderSpaces = function (text) {
    let words = [];
    let spaces = -1;
    let str = "";
    let word = "";

    for (let i = 0; i <= text.length; i++) {
        if (text[i] !== " " && text[i] !== undefined) {
            word += text[i];
        } else {
            spaces++;
            if (word !== "") {
                words.push(word);
                word = "";
            }
        }
    }

    let eachSpaces = Math.floor(spaces / (words.length - 1));
    let i = 0;

    while (i < words.length) {
        if (spaces < eachSpaces || i === words.length - 1) {
            eachSpaces = spaces;
        }

        str += words[i] + " ".repeat(eachSpaces);
        spaces -= eachSpaces;
        i++;
    }

    return str;
};
