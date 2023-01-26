
//# Case-specific Sorting of Strings

/*
Given a string S consisting of only uppercase and lowercase characters. The 
task is to sort uppercase and lowercase letters separately such that if the
ith place in the original string had an Uppercase character then it should 
not have a lowercase character after being sorted and vice versa.
*/

// SOLUTION

//User function Template for javascript

class Solution {
    caseSort(str, n) {
        // code here
        let str1 = str.toLowerCase();
        let uCase = '';
        let lCase = '';

        for (let i = 0; i < n; i++) {
            if (str1[i] === str[i]) {
                lCase += str[i];
            } else {
                uCase += str[i];
            }
        }

        lCase = lCase.split('').sort().join('');
        uCase = uCase.split('').sort().join('');

        let l = 0;
        let u = 0;
        let res = '';

        for (let j = 0; j < n; j++) {
            if (str1[j] == str[j]) {
                res += lCase[l];
                l++;
            } else {
                res += uCase[u];
                u++;
            }
        }
        
        return res;
    }
}
