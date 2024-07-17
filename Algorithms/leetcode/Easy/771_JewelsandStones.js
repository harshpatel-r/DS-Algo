
//# 771. Jewels and Stones

/*
You're given strings jewels representing the types of stones that are jewels, and stones representing 
the stones you have. Each character in stones is a type of stone you have. You want to know how many 
of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/


// SOLUTION:

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function (jewels, stones) {
    let output = 0;
    let totalStones = {};

    for (let stone of stones) {
        totalStones[stone] = (totalStones[stone] || 0) + 1;
    }

    for (let stone of jewels) {
        output += totalStones[stone] || 0;
    }

    return output;
};