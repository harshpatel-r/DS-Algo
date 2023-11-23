
//# 728. Self Dividing Numbers

/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
*/


// SOLUTION

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var selfDividingNumbers = function (left, right) {
    let res = [];

    for (let i = left; i <= right; i++) {
        let selfDivNum = i.toString();

        if (selfDivNum.includes("0")) {
            continue;
        }

        let isSelfDividing = true;

        for (let j = 0; j < selfDivNum.length; j++) {
            if (i % selfDivNum[j] !== 0) {
                isSelfDividing = false;
                break;
            }
        }

        if (isSelfDividing) {
            res.push(i);
        }
    }
    return res;
};
