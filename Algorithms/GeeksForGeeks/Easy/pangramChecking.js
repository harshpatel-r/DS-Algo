
//# Pangram Checking

/*
Given a string check if it is Pangram or not. A pangram is a sentence containing every letter in 
the English Alphabet (either lowercase or uppercase or both). For example, we say the letter A 
is present in the string if either 'a' is present or 'A' is present.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string} str
 * @returns {boolean}
*/

class Solution {
    //Function to check if a string is Pangram or not.
    checkPangram(str) {
        let count = 0;
        let arr = [];
        let reg = /[a-zA-Z]/;
        
        for (let i = 0; i < str.length; i++) {
            if (reg.test(str[i])) {
                if (!(arr.includes(str[i].toLowerCase()))) {
                    count += 1;
                    arr.push(str[i].toLowerCase());
                }
            }
        }

        return count === 26 ? true : false;
    }
}