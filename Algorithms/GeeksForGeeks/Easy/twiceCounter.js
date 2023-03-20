
//# Twice Counter

// Given a list of N words. Count the number of words that appear exactly twice in the list.

// SOLUTION


//User function Template for javascript
/**
 * @param {string[]} list
 * @param {number} n
 * @return {number}
 */
class Solution {
    countWords(list, n) {
        //code here
        let count = 0;

        let obj = list.reduce((accum, currElem) => {
            accum[currElem] = accum[currElem] ? accum[currElem] += 1 : 1;
            return accum;
        }, {});

        let arr = Object.keys(obj);

        arr.forEach((element) => {
            if (obj[element] == 2) {
                count++;
            }
        })

        return count;
    }
}
