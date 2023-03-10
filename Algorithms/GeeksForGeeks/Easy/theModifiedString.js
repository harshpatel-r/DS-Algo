
// The Modified String

/*
Ishaan is playing with strings these days. He has found a new string. He wants to modify it as per the 
following rules to make it valid:

    -> The string should not have three consecutive same characters (Refer example for explanation).
    -> He can add any number of characters anywhere in the string. 

Find the minimum number of characters which Ishaan must insert in the string to make it valid.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {string} a
 * @returns {number}
*/
class Solution {
    //Function to find minimum number of characters which Ishaan must insert  
    //such that string doesn't have three consecutive same characters.
    modified(a) {
        let n = a.length - 1;
        let count = 0;
        let result = 0;

        for (let i = 0; i < n; i++) {
            if (a[i] === a[i + 1]) {
                count++;
            } else {
                count = 0;
            }

            if (count == 2) {
                result++;
                count = 0;
            }
        }
        
        return result;
    }
}

