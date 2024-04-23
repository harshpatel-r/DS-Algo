
//# 1869. Longer Contiguous Segments of Ones than Zeros

/*
Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than 
the longest contiguous segment of 0's in s, or return false otherwise.

For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest 
continuous segment of 0s has length 3.

Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a 
length 0. The same applies if there is no 1's.
*/


// SOLUTION:

var checkZeroOnes = function (s) {
    let max0 = 0, max1 = 0, count0 = 0, count1 = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count1++;
            count0 = 0;
            max1 = Math.max(max1, count1);
        } else {
            count0++;
            count1 = 0;
            max0 = Math.max(max0, count0);
        }
    }

    return max1 > max0;
};
