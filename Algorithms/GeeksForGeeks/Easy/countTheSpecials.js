
//# Count the Specials

/*
Given an array A (may contain duplicates) of N elements and a positive integer K. The task is to count the number 
of elements that occurs exactly floor(N/K) times in the array.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} sizeOfArr
 * @param {number} K
 * @return {number}
*/

class Solution {

    countSpecials(arr, sizeOfArr, K) {
        //code here
        let count = 0;
        let mid = Math.floor(sizeOfArr / K);

        let newArr = new Array(Math.max(...arr) + 1).fill(0);
        
        for (let i = 0; i < sizeOfArr; i++) {
            newArr[arr[i]]++;
        }

        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === mid) {
                count += 1;
            }
        }

        return count;
    }
}
