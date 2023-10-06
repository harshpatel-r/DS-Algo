
//# 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.


// SOLUTION 1

/** 
* @param {string} s
* @return {number}
*/

var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let start = 0;
    const charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charIndexMap.has(char)) {
            start = Math.max(start, charIndexMap.get(char) + 1);
        }

        charIndexMap.set(char, end);
        max = Math.max(max, end - start + 1);
    }

    return max;
};


// SOLUTION 2

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let start = 0;
    const character = new Set();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        while (character.has(char)) {
            character.delete(s[start]);
            start++;
        }

        character.add(char);
        max = Math.max(max, end - start + 1);
    }

    return max;
};
