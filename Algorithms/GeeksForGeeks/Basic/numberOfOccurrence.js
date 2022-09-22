
//# Number of occurrence

/*
Given a sorted array Arr of size N and a number X, you need to find the number 
of occurrences of X in Arr.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number}
*/

class Solution {
    count(arr, n, x) {
        //code here
        let count = 0;
        if (!(arr.includes(x))) return 0;
        let i = 0;
        while (true) {
            let inx = arr.indexOf(x, i)
            if (inx == -1) break;
            if (inx != -1) {
                count++;
                i = inx;
                i++;
            }
        }
        return count;
    }
}