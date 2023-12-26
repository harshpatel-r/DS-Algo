
//# 1185. Day of the Week

/*
Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"}.
*/


// SOLUTION

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

var dayOfTheWeek = function (day, month, year) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let d = new Date(`${year}-${month}-${day}`).getDay();
    return days[d];
};
