
//# 1360. Number of Days Between Two Dates

/*
Write a program to count the number of days between two dates.

The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.
*/


// SOLUTION

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */

var daysBetweenDates = function (date1, date2) {
    const d1 = new Date(date1);
    let time1 = d1.getTime();

    const d2 = new Date(date2);
    let time2 = d2.getTime();

    return Math.abs(time1 - time2) / 86400000;
};
