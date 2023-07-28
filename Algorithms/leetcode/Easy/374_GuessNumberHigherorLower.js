
//# 374. Guess Number Higher or Lower

/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-> -1: Your guess is higher than the number I picked (i.e. num > pick).
->  1: Your guess is lower than the number I picked (i.e. num < pick).
-> 0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.
*/

// SOLUTION


let guess = (n, pick = 6) => {
    if (n > pick) {
        return -1;
    } else if (n < pick) {
        return 1
    } else {
        return 0
    }
}

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

var guessNumber = function (n) {
    let lower = 1;
    let higher = n;

    while (lower <= higher) {
        let mid = Math.floor((lower + higher) / 2);
        let result = guess(mid);

        if (result === -1) {
            higher = mid - 1;
        } else if (result === 1) {
            lower = mid + 1;
        } else {
            return mid;
        }
    }
};

// code with my first trial

// var guessNumber = function (n) {
//     let lower = 0;
//     let higher = 0;
//     let i = 0;

//     while (true) {
//         if (guess(n) == -1) {
//             higher = n;
//             num = Math.floor((higher - lower) / 2);
//             n = n - num
//         }

//         if (guess(n) == 1) {
//             lower = n;
//             num = n + ((higher - lower) / 2)
//             n = Math.floor(num)
//         }

//         if (guess(n) == 0) {
//             return n
//         }
//     }
// };
