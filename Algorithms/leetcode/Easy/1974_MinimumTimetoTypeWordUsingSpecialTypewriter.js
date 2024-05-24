
//# 1974. Minimum Time to Type Word Using Special Typewriter

/*
There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a 
pointer. A character can only be typed if the pointer is pointing to that character. The pointer is 
initially pointing to the character 'a'.
*/

// SOLUTION: 


/**
 * @param {string} word
 * @return {number}
 */

var minTimeToType = function (word) {
    let n = word.length;
    let count = n;
    let currPosOfPointer = "a";

    for (let i = 0; i < n; i++) {
        let diffFromcurrPointer = Math.abs(word.charCodeAt(i) - currPosOfPointer.charCodeAt(0));
        count += Math.min(diffFromcurrPointer, (26 - diffFromcurrPointer))
        currPosOfPointer = word[i];
    }

    return count;
};
