
//# 441. Arranging Coins

/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where 
the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.
*/

// SOLUTION


/**
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function (n) {
    let i = 0;

    while (n >= 0) {
        n = n - 1 - i;
        if (n < 0) return i;
        i++;
    }
};
