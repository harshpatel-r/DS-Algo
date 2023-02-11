
//# Nearest multiple of 10

/*
Given a string  N representing a positive number. The task is to round N to the nearest multiple of 10.
Note: If you are having two multiple equally apart from N then we will choose the smallest element among them.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string} N
 * @return {string}
 */
class Solution {
    roundToNearest(N) {
        //code here
        if (N <= 5) return '0';
        if (N > 5 && N < 10) return '10'

        let arr = [];
        let num = N.split('');
        let j;

        for (let i = num.length - 1; i >= 0; i--) {

            if (i == (num.length - 1)) {
                if (parseInt(num[i]) <= 5) {
                    arr.unshift(0);
                    continue;
                }
                if (parseInt(num[i]) > 5) {
                    arr.unshift(0);
                    j = i - 1;
                    continue;
                }
            }

            if (j == i) {
                if ((parseInt(num[i]) + 1 == 10) && i != 0) {
                    arr.unshift(0);
                    j = j - 1;
                    continue;
                }
                if ((parseInt(num[i]) + 1 == 10) && i !== 0) {
                    arr.unshift(10);
                    continue;
                }
                arr.unshift(parseInt(num[i]) + 1);
                continue;
            }

            arr.unshift(num[i])

        }

        return arr.join('');
    }
}
