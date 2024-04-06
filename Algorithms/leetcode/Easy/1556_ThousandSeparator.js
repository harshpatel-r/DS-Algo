
//# 1556. Thousand Separator

// Given an integer n, add a dot (".") as the thousands separator and return it in string format.


// SOLUTION

/**
 * @param {number} n
 * @return {string}
 */

var thousandSeparator = function (n) {
    const numStr = String(n);
    let result = '';

    for (let i = numStr.length - 1, count = 0; i >= 0; i--) {
        result = numStr[i] + result;
        count++;
        if (count % 3 === 0 && i !== 0) {
            result = '.' + result;
            count = 0;
        }
    }

    return result;
};
