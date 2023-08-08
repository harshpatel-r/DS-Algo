
//# 500. Keyboard Row

/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row 
of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
*/

// SOLUTION

var findWords = function (words) {
    let keyRows = {
        q: 0,
        w: 0,
        e: 0,
        r: 0,
        t: 0,
        y: 0,
        u: 0,
        i: 0,
        o: 0,
        p: 0,
        a: 1,
        s: 1,
        d: 1,
        f: 1,
        g: 1,
        h: 1,
        j: 1,
        k: 1,
        l: 1,
        z: 2,
        x: 2,
        c: 2,
        v: 2,
        b: 2,
        n: 2,
        m: 2,
    }

    let res = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();

        if (word.length === 1) {
            res.push(words[i])
        } else {
            let key = keyRows[word[0]];

            for (let j = 1; j < word.length; j++) {
                if (key !== keyRows[word[j]]) {
                    break;
                }

                if (word.length - 1 === j) res.push(words[i]);
            }
        }
    }

    return res;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));