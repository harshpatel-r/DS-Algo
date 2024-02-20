
//# 1694. Reformat Phone Number

/*
You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. 
Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The 
final digits are then grouped as follows:

-> 2 digits: A single block of length 2.
-> 3 digits: A single block of length 3.
-> 4 digits: Two blocks of length 2 each.

The blocks are then joined by dashes. Notice that the reformatting process should never produce any 
blocks of length 1 and produce at most two blocks of length 2.

Return the phone number after formatting.
*/


// SOLUTION

/**
 * @param {string} number
 * @return {string}
 */

var reformatNumber = function (number) {
    number = number.replace(/[ -]/g, "");
    let n = number.length;
    let i = 0;

    if (n < 4) return number;

    number = number.split("");

    while (n >= 4) {
        if (n === 4) {
            i += 2;
            number.splice(i, 0, "-");
            break;
        }

        if (n > 3) {
            i += 3;
            number.splice(i, 0, "-");
            n -= 3;
            i++;
        }
    }

    return number.join("");
};
