
//# Print Pattern

/*
Print a sequence of numbers starting with N where A[0] = N, without using loop, in which A[i+1] = A[i] - 5, 
until A[i] > 0. After that A[i+1] = A[i] + 5  repeat it until A[i] = N.
*/


// SOLLUTION

// } Driver Code Ends
//User function Template for javascript
/**
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    pattern(n) {
        //code here
        let a = n;
        let arr = [];

        const print2 = (a) => {
            if (a == n) {
                arr.push(a);
                return;
            }
            arr.push(a);
            print2(a + 5);
        }

        const print1 = (a) => {
            if (a <= 0) {
                arr.push(a);
                print2(a + 5);
                return;
            }
            arr.push(a);
            print1(a - 5)
        }

        print1(a);
        return arr;
    }
}
