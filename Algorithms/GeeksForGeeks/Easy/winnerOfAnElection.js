
//# Winner of an election

/*
Given an array of names (consisting of lowercase characters) of candidates in an election. A candidate name 
in array represents a vote casted to the candidate. Print the name of candidate that received Max votes. If
there is tie, print lexicographically smaller name.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string[]}
*/

class Solution {
    //Function to return the name of candidate that received maximum votes.
    winner(arr, n) {
        // code here
        let count = 1;
        let res = [0, 0];
        let max = 0;
        arr.sort();
        
        for (let i = 0; i < n; i++) {
            if (arr[i] == arr[i + 1]) {
                count++;
            } else {
                if (max < count) {
                    res[0] = arr[i];
                    res[1] = count;
                    max = count;
                }
                count = 1;
            }
        }
        return res;
    }
}
