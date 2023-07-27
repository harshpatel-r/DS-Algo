
//# 345. Reverse Vowels of a String

/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

// SOLUTION

/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function (s) {
    s = s.split("");
    let i = 0;
    let j = s.length - 1;
    let val1 = "";
    let val2 = "";

    while (i < j) {
        if (val1 === "") {
            if ("aieouAIEOU".includes(s[i])) {
                val1 = s[i];
            } else {
                i++;
            }
        }

        if (val2 === "") {
            if ("aieouAIEOU".includes(s[j])) {
                val2 = s[j];
            } else {
                j--;
            }
        }

        if (val1 !== "" && val2 !== "") {
            [s[i], s[j]] = [s[j], s[i]];
            val1 = "";
            val2 = ""
            i++;
            j--
        }
    }

    return s.join("")
};
