
//# Array Subset of another array

/*
Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. Task is to 
check whether a2[] is a subset of a1[] or not. Both the arrays can be sorted 
or unsorted. 
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} a1
 * @param {number[]} a2
 * @param {number} n
 * @param {number} m
 * @returns {string}
*/

class Solution {
    isSubset(a1, a2, n, m) {
        let res = a2.every((data) => {
            if (a1.indexOf(data) > -1) {
                return data == a1[a1.indexOf(data)];
            }
        });

        if (res == true) {
            return 'Yes'
        } else return 'No'
        
    }
}

