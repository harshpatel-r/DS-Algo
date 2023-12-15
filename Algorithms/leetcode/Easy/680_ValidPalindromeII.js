
//# 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.


// SOLUTION

/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function (s) {
    const isPalindrome = (start, end) => {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    };

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return isPalindrome(i + 1, j) || isPalindrome(i, j - 1);
        }
        i++;
        j--;
    }

    return true;
};