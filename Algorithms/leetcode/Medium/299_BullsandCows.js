
//# 299. Bulls and Cows

/*
You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, 
you provide a hint with the following info:

-> The number of "bulls", which are digits in the guess that are in the correct position.
-> The number of "cows", which are digits in the guess that are in your secret number but are located in the 
wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become 
bulls.

Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that 
both secret and guess may contain duplicate digits.
*/


// SOLUTION:

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

var getHint = function (secret, guess) {
    let digitCount = {};
    let cows = 0, bulls = 0;

    for (let i = 0; i < secret.length; i++) {
        digitCount[secret[i]] = (digitCount[secret[i]] || 0) + 1;
    }

    for (let i = 0; i < guess.length; i++) {
        if (secret[i] === guess[i]) {
            if (digitCount[guess[i]] !== 0) {
                digitCount[guess[i]] -= 1;
            } else {
                cows -= 1;
            }
            bulls += 1;
            continue;
        }

        if (digitCount[guess[i]]) {
            digitCount[guess[i]] -= 1;
            cows += 1;
        }
    }

    return `${bulls}A${cows}B`;
};
