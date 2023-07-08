
//# 202. Happy Number

/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.

Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.
*/


// SOLUTION

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {

    let prevNum = new Set();

    let happyNum = (n) => {
        if (n === "1") return true;
        if (prevNum.has(n)) return false;

        prevNum.add(n);

        let num = 0;
        let i = 0;

        while (i < n.length) {
            num += n[i] ** 2;
            i++;
        }

        return happyNum(num.toString())
    }

    return happyNum(n.toString())
};
