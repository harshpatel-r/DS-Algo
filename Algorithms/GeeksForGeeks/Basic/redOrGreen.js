
// Red OR Green

/*
Given a string of length N, made up of only uppercase characters 'R' and 'G', 
where 'R' stands for Red and 'G' stands for Green.Find out the minimum number
of characters you need to change to make the whole string of the same colour.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number} n
 * @param {string} str
 * @returns {number}
*/

class Solution {
    RedOrGreen(n, str) {
        //code here
        let green = 0;
        let red = 0;

        for (let i = 0; i < n; i++) {
            if (str[i] == 'R') {
                red++;
            } else {
                green++;
            }
        }
        
        return Math.min(green, red);
    }
}
