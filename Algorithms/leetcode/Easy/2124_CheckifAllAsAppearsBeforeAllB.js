
//# 2124. Check if All A's Appears Before All B's

/*
Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before 
every 'b' in the string. Otherwise, return false.
*/


// SOLUTION:

/**
 * @param {string} s
 * @return {boolean}
 */

var checkString = function (s) {
    let endOfA = s.lastIndexOf("a");
    let startOfB = s.indexOf("b");

    if (startOfB === -1) return true;
    return endOfA < startOfB;
};
