
//# 1078. Occurrences After Bigram

/*
Given two strings first and second, consider occurrences in some text of the form "first second third", where second 
comes immediately after first, and third comes immediately after second.

Return an array of all the words third for each occurrence of "first second third".
*/


// SOLUTION

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */

var findOcurrences = function (text, first, second) {
    text = text.split(" ");
    let res = [];

    for (let i = 0; i < text.length - 2; i++) {
        if (text[i] === first && text[i + 1] === second) {
            res.push(text[i + 2])
        }
    }

    return res;
};
