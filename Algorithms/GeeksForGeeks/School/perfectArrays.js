
//# Perfect Arrays

/*
Given an array of size N and you have to tell whether the array is perfect 
or not. An array is said to be perfect if it's reverse array matches the 
original array. If the array is perfect then print "PERFECT" else print 
"NOT PERFECT".
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {bool}
*/

class Solution {
    IsPerfect(arr, n) {
        //code here
        let newStr = "";
        let ans = false;
        for (let i = n - 1; i >= 0; i--) {
            newStr += arr[i];
            if (i != 0) newStr += " ";
        }
        
        let str = arr.join(' ');
        if (str == newStr) ans = true;
        return ans;
    }
}


