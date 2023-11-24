
//# 744. Find Smallest Letter Greater Than Target

/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. 
There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character 
does not exist, return the first character in letters.
*/


// SOLUTION

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function (letters, target) {
    let uniqueLetters = [...new Set(letters)];
    let smallChar = uniqueLetters[0];
    let targetPoint = target.codePointAt(0);

    for (let i = 0; i < uniqueLetters.length; i++) {
        let letterPoint = uniqueLetters[i].codePointAt(0);

        if (targetPoint < letterPoint) {
            smallChar = uniqueLetters[i];
            break;
        }
    }

    return smallChar;
};
