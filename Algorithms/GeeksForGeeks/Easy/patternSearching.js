
//# Pattern Searching

// Given a text and a pattern, the task is to check if the pattern exists in the text or not.

// SOLUTION


//User function Template for javascript
/**
 * @param {string} text
 * @param {string} pat
 * @return {number}
 */
class Solution {
    search(text, pat) {
        if (text.includes(pat)) {
            return 1;
        } else {
            return 0;
        }
    }
}