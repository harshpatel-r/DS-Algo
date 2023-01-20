
//# Compete the skills

/*
A and B are good friend and programmers. They are always in a healthy competition
 with each other. They decide to judge the best among them by competing. They 
 do so by comparing their three skills as per their values. Please help them 
 doing so as they are busy.

Set for A are like [a1, a2, a3]
Set for B are like [b1, b2, b3]

Compare ith skill of A with ith skill of B
if a[i] > b[i] , A's score increases by 1
if a[i] < b[i] , B's score increases by 1
if a[i] = b[i] , nothing happens
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 */

class Solution {
    constructor() {
        this.ca = 0;
        this.cb = 0;
    }
    scores(a, b) {
        //store the scores at this.ca and this.cb
        //code here
        for (let i in a) {
            if (a[i] > b[i]) {
                this.ca++;
            }
            if (b[i] > a[i]) {
                this.cb++;
            };
        }
    }
}