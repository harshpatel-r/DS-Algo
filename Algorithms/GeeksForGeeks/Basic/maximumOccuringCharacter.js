
//# Maximum Occuring Character

/*
Given a string str. The task is to find the maximum occurring character in the 
string str. If more than one character occurs the maximum number of time then 
print the lexicographically smaller character.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string} str
 * @returns {string}
*/
class Solution {
    //Function to find the maximum occurring character in a string.
    getMaxOccuringChar(str) {
        str = str.split("").sort()
        let arr = new Array(str.length).fill(0);
        let num = 0;

        for (let i = 0; i < str.length - 1; i++) {
            num = 1;
            for (let j = 1 + i; j < str.length; j++) {
                if (str[i] == str[j]) num++;
            }
            arr[i] = num;
        }

        str = str.join("");

        let n = arr.indexOf(Math.max(...arr));
        return str.charAt(n);
    }
}