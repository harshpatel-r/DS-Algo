
//# 461. Hamming Distance

/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.
*/

// SOLUTION


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function (x, y) {
    x = x.toString(2);
    y = y.toString(2);
    let diff = Math.abs(x.length - y.length);

    let extraZero = "0".repeat(diff);

    if (x.length > y.length) {
        y = extraZero + y;
    } else if (y.length > x.length) {
        x = extraZero + x;
    }

    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            count += 1;
        }
    }

    return count;
};
