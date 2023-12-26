
//# 1189. Maximum Number of Balloons

/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.
*/

// SOLUTION 1:


/**
 * @param {string} text
 * @return {number}
 */

var maxNumberOfBalloons = function (text) {
    let obj = {};

    for (let i = 0; i < text.length; i++) {
        obj[text[i]] ? obj[text[i]]++ : obj[text[i]] = 1;
    }

    let output = Math.min(
        Math.floor(obj['l'] / 2),
        Math.floor(obj['o'] / 2),
        obj['b'],
        obj['a'],
        obj['n']
    );

    return output ? output : 0;
};

// SOLUTION 2:
// In this solution..,
// if you wanted to find the maximum number of instances of the word "google" or any other words 
// then you would only need to change str(variable)...

// ex: let str = "balon";
//     let str = "google" or let str = "leetcode"

var maxNumberOfBalloons = function (text) {
    let obj = {};
    let str = "balon";
    let output = Math.min();

    for (let i = 0; i < text.length; i++) {
        if (!str.includes(text[i])) continue;
        obj[text[i]] ? obj[text[i]]++ : obj[text[i]] = 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            if (str[i] === "l" || str[i] === "o") {
                obj[str[i]] = Math.floor(obj[str[i]] / 2);
            }

            output = Math.min(output, obj[str[i]]);
        } else {
            return 0;
        }
    }

    return output;
};
