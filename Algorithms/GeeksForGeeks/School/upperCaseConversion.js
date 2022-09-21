
//# Upper case conversion

// Given a string str, convert the first letter of each word in the string to uppercase. 

// SOLUTION

//User function Template for javascript

/**
 * @param {string} s
 * @returns {string}
*/

class Solution {
    transform(s) {
        //code here
        s = s.split(" ");
        for (let i = 0; i < s.length; i++) {
            s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
        }
        s = s.join(" ");
        return s;
    }
}
//solution end

// s = s.split(" ");
        // let ans = "" ;
        // for(let i = 0 ; i < s.length ; i++){
        //  let a = "";
        //  a = s[i];
        //  a = a[0].toUpperCase() + a.slice(1)
        //   ans += a;
        // if(i!= s.length-1) ans+= " "
        // }
        // return ans;
        