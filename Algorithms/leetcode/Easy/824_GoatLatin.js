
//# 824. Goat Latin

/*
You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

-> If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
-For example, the word "apple" becomes "applema".

-> If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
-For example, the word "goat" becomes "oatgma".

-> Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
-For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.

Return the final sentence representing the conversion from sentence to Goat Latin.
*/


// SOLUTION
// STYLE-1:

/**
 * @param {string} sentence
 * @return {string}
 */

var toGoatLatin = function (sentence) {
    let vowel = /^[aeiouAEIOU]/;
    sentence = sentence.split(" ");
    let extras = "a";

    for (let i = 0; i < sentence.length; i++) {
        if (vowel.test(sentence[i])) {
            sentence[i] = `${sentence[i]}ma${extras}`;
        } else {
            sentence[i] = `${sentence[i].slice(1)}${sentence[i][0]}ma${extras}`;
        }
        extras += "a";
    }
    
    return sentence.join(" ");
};

// STYLE-2

var toGoatLatin = function (sentence) {
    const isVowel = (word) => /^[aeiouAEIOU]/.test(word);

    const extras = "a";
    const result = sentence.split(" ").map((word, index) => {
        const suffix = "ma" + extras.repeat(index + 1);
        return isVowel(word) ? word + suffix : word.slice(1) + word[0] + suffix;
    });

    return result.join(" ");
};
