
//# 1784. Check if Binary String Has at Most One Segment of Ones

/*
Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. 
Otherwise, return false.
*/


// SOLUTION : 

/**
 * @param {string} s
 * @return {boolean}
 */

var checkOnesSegment = function(s) {
    return s.indexOf("01") === -1;
};
