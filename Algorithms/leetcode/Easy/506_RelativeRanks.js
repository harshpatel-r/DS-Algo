
//# 506. Relative Ranks

/*
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. 
All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place 
athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

- The 1st place athlete's rank is "Gold Medal".
- The 2nd place athlete's rank is "Silver Medal".
- The 3rd place athlete's rank is "Bronze Medal".

For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's 
rank is "x").

Return an array answer of size n where answer[i] is the rank of the ith athlete.
*/

// SOLUTION


/**
 * @param {number[]} score
 * @return {string[]}
 */

var findRelativeRanks = function (score) {
    let arr = score.slice()
    arr = arr.sort((a, b) => b - a);

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i + 1;
    }

    arr = [];
    for (let i = 0; i < score.length; i++) {
        if (obj[score[i]] === 1) arr[i] = "Gold Medal";
        else if (obj[score[i]] === 2) arr[i] = "Silver Medal";
        else if (obj[score[i]] === 3) arr[i] = "Bronze Medal";
        else arr[i] = obj[score[i]].toString();
    }

    return arr;
};
