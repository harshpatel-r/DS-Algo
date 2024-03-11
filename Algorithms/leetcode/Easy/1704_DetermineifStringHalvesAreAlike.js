
//# 1704. Determine if String Halves Are Alike

/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first 
half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). 
Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
*/


// SOLUTION

/**
 * @param {string} s
 * @return {boolean}
 */

var halvesAreAlike = function (s) {
    let mid = s.length / 2;
    let regex = /[aeiou]/gi;
    let a = s.slice(0, mid);
    let b = s.slice(mid);

    let aVowels = a.match(regex) || [];
    let bVowels = b.match(regex) || [];

    return aVowels.length === bVowels.length;
};
