
//# 1805. Number of Different Integers in a String

/*
You are given a string word that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". 
Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

Return the number of different integers after performing the replacement operations on word.

Two integers are considered different if their decimal representations without any leading zeros are different.
*/


// SOLUTION 1:

/**
 * @param {string} word
 * @return {number}
 */
 
var numDifferentIntegers = word => new Set(word.split(/[a-z]+/).filter(a => a.length).map(BigInt)).size;


// SOLUTION 2:

var numDifferentIntegers = function (word) {
    let set = new Set();

    for (let i = 0; i < word.length; i++) {
        let num = "";

        if (isNaN(word[i])) continue;

        while (!isNaN(word[i])) {
            num += word[i];
            i++;
        }

        set.add(BigInt(num));
    }

    return set.size;
};
