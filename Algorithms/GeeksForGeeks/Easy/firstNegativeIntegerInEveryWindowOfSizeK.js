
//# First negative integer in every window of size k

/*
Given an array A[] of size N and a positive integer K, find the first negative integer for 
each and every window(contiguous subarray) of size K.
*/

// SOLUTION

class Solution {
    /**
    * @param number n
    * @param number k
    * @param number[] arr
    
    * @returns number[]
    */
    printFirstNegativeInteger(n, k, arr) {
        // code here
        let res = [];
        let indList = [];
        for (let k = 0; k < n; k++) {
            if (arr[k] < 0) {
                indList.push(k)
            }
        }

        let i = 0;
        let j = 0;
        let plus = k - 1;
        while (i <= n - k) {
            if (indList[j] < i) {
                j++;
            }

            if (indList[j] > plus || indList[j] == undefined) {
                res.push(0);
            }

            if (indList[j] >= i && indList[j] <= plus) {
                res.push(arr[indList[j]]);
            }
            i++;
            plus++;
        }

        return res;
    }
}
