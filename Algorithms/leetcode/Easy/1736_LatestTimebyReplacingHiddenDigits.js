
//# 1736. Latest Time by Replacing Hidden Digits

/*
You are given a string time in the form of  hh:mm, where some of the digits in the string are hidden (represented by ?).

The valid times are those inclusively between 00:00 and 23:59.

Return the latest valid time you can get from time by replacing the hidden digits.
*/


// SOLUTION

/**
 * @param {string} time
 * @return {string}
 */

var maximumTime = function (time) {
    time = time.split("");

    for (let i = 0; i < 5; i++) {
        if (i === 2) {
            continue;
        }

        if (time[0] === "?") {
            if (parseInt(time[1]) > 3) {
                time[0] = "1";
            } else {
                time[0] = "2";
            }
        }

        if (time[1] === "?") {
            if (parseInt(time[0]) === 2) {
                time[1] = "3";
            } else {
                time[1] = "9";
            }
        }

        if (time[3] === "?") {
            time[3] = "5";
        }

        if (time[4] === "?") {
            time[4] = "9";
        }
    }

    return time.join("");
};
