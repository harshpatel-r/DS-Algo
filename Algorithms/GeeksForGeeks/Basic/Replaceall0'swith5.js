
//# Replace all 0's with 5

// You are given an integer N. You need to convert all zeroes of N to 5. 

// SOLUTION

//User function Template for javascript

/**
 * @param {number} num
 * @returns {number}
*/
class Solution {
    convertFive(num) {
        num = num.toString();
        num = num.split("");

        if (num.includes("0")) {
            for (let i = 0; i < num.length; i++) {
                if (num[i] == "0") num[i] = "5"
            }
        } else return num.join("");
        return num.join("");
    }
}

