
//# 1758. Minimum Changes To Make Alternating Binary String

/*
You are given a string s consisting only of the characters '0' and '1'. In one operation, 
you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, 
the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.
*/


// SOLUTION :

/**
 * @param {string} s
 * @return {number}
 */

var minOperations = function (s) {
    let lastStr = s[0];
    let count = 0;
    let count1 = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === lastStr) {
            lastStr = s[i] === "0" ? "1" : "0";
            count++;
        } else {
            lastStr = s[i];
            count1++;
        }
    }

    return Math.min(count, count1);
};
