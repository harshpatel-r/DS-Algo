
//# 551. Student Attendance Record I

/*
You are given a string s representing an attendance record for a student where each character signifies whether the student 
was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.

The student is eligible for an attendance award if they meet both of the following criteria:

- The student was absent ('A') for strictly fewer than 2 days total.
- The student was never late ('L') for 3 or more consecutive days.

Return true if the student is eligible for an attendance award, or false otherwise.
*/

// SOLUTION

/**
 * @param {string} s
 * @return {boolean}
 */

var checkRecord = function (s) {
    let absent = 0;
    let late = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            absent += 1;
            if (absent > 1) return false;
            continue;
        }

        if (s[i] === "L" && s[i + 1] === "L") {
            late += 1;
            if (late > 2) return false
        } else {
            late = 1;
        }
    }

    return true;
};
