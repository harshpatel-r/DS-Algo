
//# Largest number with given sum

/*
Geek lost the password of his super locker. He remembers the number of digits N as well as the 
sum S of all the digits of his password. He know that his password is the largest number of N 
digits that can be made with given sum S. As he is busy doing his homework, help him retriev-
ing his password.
*/

// SOLUTION

//User function Template for javascript
/**
 * @param {number} n
 * @param {number} sum
 * @returns {string}
*/

class Solution {
    //Function to return the largest possible number of n digits
    //with sum equal to given sum.
    largestNumber(n, sum) {
        // code here
        let num = '';
        for (let i = 0; i < n; i++) {
            if (sum >= 9) {
                sum = sum - 9;
                num += 9;
                continue;
            }
            if (sum != 0 && sum < 9) {
                num += sum;
                sum = 0;
                continue;
            }
            if (sum == 0) {
                num += 0;
            }
        }
        
        return (sum == 0) ? num : -1;
    }
}