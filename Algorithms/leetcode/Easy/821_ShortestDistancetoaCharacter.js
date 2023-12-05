
//# 821. Shortest Distance to a Character

/*
Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and 
answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.
*/


// SOLUTION 1:

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

var shortestToChar = function (s, c) {
    let distance = new Array(s.length);
    let allIndexOfC = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            allIndexOfC.push(i)
        }
    }

    let j = 0;
    let k = 1;

    for (let i = 0; i < s.length; i++) {

        if (allIndexOfC.length != k) {
            let dist1 = Math.abs(i - allIndexOfC[j]);
            let dist2 = Math.abs(i - allIndexOfC[k]);

            if (dist1 < dist2) {
                distance[i] = dist1
            } else {
                distance[i] = dist2
                j++;
                k++;
            }
        } else {
            distance[i] = Math.abs(i - allIndexOfC[j]);
        }
    }

    return distance;
};


// SOLUTION 2:

var shortestToChar = function (s, c) {
    const n = s.length;
    const distance = new Array(n).fill(Infinity);

    let prevCharIndex = -Infinity;

    // Forward pass
    for (let i = 0; i < n; i++) {
        if (s[i] === c) {
            prevCharIndex = i;
        }
        distance[i] = Math.min(distance[i], Math.abs(i - prevCharIndex));
    }

    // Backward pass
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === c) {
            prevCharIndex = i;
        }
        distance[i] = Math.min(distance[i], Math.abs(i - prevCharIndex));
    }

    return distance;
};
