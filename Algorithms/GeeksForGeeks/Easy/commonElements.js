
//# Common elements

/*
Given three arrays sorted in increasing order. Find the elements that are common 
in all three arrays.

Note: can you take care of the duplicates without using any additional Data Structure?
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @param {number} n1
 * @param {number} n2
 * @param {number} n3
 * @returns {number}
*/

class Solution {
    commonElements(arr1, arr2, arr3, n1, n2, n3) {
        let i = 0;
        let j = 0;
        let k = 0;
        let l = ans.length - 1
        let ans = []
        while (i < n1 && j < n2 && k < n3) {
            if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
                ans.push(arr1[i]);
                i++;
                j++
                k++
            }
            else if (arr1[i] < arr2[j]) {
                i++;

            }
            else if (arr2[j] < arr3[k]) {
                j++;
            }
            else {
                k++;
            }
        }

        for (let a = 0; a < l; a++) {
            if (ans[a] == ans[a + 1]) {
                ans.splice(a + 1, 1);
                --a;
                l--;
            }
        }
        return ans
    }
}

