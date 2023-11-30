
//# 804. Unique Morse Code Words

/*
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

-> 'a' maps to ".-",
-> 'b' maps to "-...",
-> 'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.
*/


// SOLUTION

/**
 * @param {string[]} words
 * @return {number}
 */

var uniqueMorseRepresentations = function (words) {
    const dashesAndDot = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    const uniqueRepresentations = new Set();

    for (let word of words) {
        let newWord = "";
        
        for (let char of word) {
            const ind = Math.abs(97 - char.codePointAt(0));
            newWord += dashesAndDot[ind];
        }

        uniqueRepresentations.add(newWord);
    }

    return uniqueRepresentations.size;
};
