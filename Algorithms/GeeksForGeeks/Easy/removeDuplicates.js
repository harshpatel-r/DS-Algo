
//# Remove Duplicates

/*
Given a string without spaces, the task is to remove duplicates from it.

Note: The original order of characters must be kept the same. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {string} str
 * @returns {string}
*/

class Solution {
    removeDups(str) {
        //code here
        str = str.split("");
        let mySet = new Set(str);
        return [...mySet].join("")
    }
}