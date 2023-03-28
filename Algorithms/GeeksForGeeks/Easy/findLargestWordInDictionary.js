
//# Find largest word in dictionary

/*
Given a string and a string dictionary, find the longest string in the dictionary that can be formed 
by deleting some characters of the given string. If there are more than one possible results, return 
the longest word with the smallest lexicographical order. If there is no possible result, return the 
empty string.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string} s
 * @param {string[]} d
 * @returns {string}
*/

class Solution {
    findLongestWord(s, d) {
        //code here
        let prevInd = 0
        let length = Math.max();
        let ans;

        for (let i = 0; i < d.length; i++) {

            let count = 0
            prevInd = 0;
            let str = s;

            for (let j = 0; j < d[i].length; j++) {

                let ind = str.indexOf(d[i][j], prevInd);

                if (ind != -1 && prevInd <= ind) {
                    count++;
                    str = str.replace(str[ind], "");
                    prevInd = ind;
                } else {
                    count = undefined;
                    j += d[i].length;
                }
            }

            if (length < count) {
                length = count;
                ans = d[i];

            }

            if (length == count) {
                if (ans > d[i]) {
                    ans = d[i];

                }
            }

        }
        
        return ans;
    }
}
