
//# Wave Array

/*
Given a sorted array arr[] of distinct integers. Sort the array into a wave-like 
array(In Place).
In other words, arrange the elements into a sequence such that :-
arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

If there are multiple solutions, find the lexicographically smallest one.
*/

// SOLUTION

//User function Template for javascript
class Solution {
    // arr: input array
    // n: size of array
    //Function to sort the array into a wave-like array.
    convertToWave(n, arr) {
        //your code here
        for (let i = 1; i < n; i += 2) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        }
        return arr;
    }
}
