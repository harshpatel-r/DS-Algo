
//# 541. Reverse String II

/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the 
start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than 
or equal to k characters, then reverse the first k characters and leave the other as original.
*/

// SOLUTION


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
    let n = s.length / (2 * k);
    let count = 0
    let res = ""

    for (let i = 0; i < n; i++) {
        let str = s.slice(count, count + 2 * k).split("");
        count += 2 * k;

        let l = str.length >= k ? k : str.length;

        for (let j = 0; j < Math.floor(l / 2); j++) {
            let temp = str[j];
            str[j] = str[l - 1 - j];
            str[l - 1 - j] = temp
        }

        res += str.join("");
    }

    return res
};
