
//# Rearrange Geek and his Classmates

/* 
Geek and his classmates are playing a prank on their Computer Science teacher. They change places every time the teacher
turns to look at the blackboard. 

Each of the N students in the class can be identified by a unique roll number X and each desk has a number i associated 
with it. Only one student can sit on one desk. 

Each time the teacher turns her back, a student with roll number X sitting on desk number i gets up and takes the place 
of the student with roll number i.

If the current position of N students in the class is given to you in an array, such that i is the desk number and a[i] 
is the roll number of the student sitting on the desk, can you modify a[ ] to represent the next position of all the 
students?

Note: The array a[ ] will be a permutation of the array : {0, 1, 2, 3, ...., n-1}.
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number[]} a
 * @param {number} n
*/

class Solution {
    prank(a, n) {
        //code here

        let val;
        let arr = JSON.parse(JSON.stringify(a));

        for (let i = 0; i < n; i++) {
            val = arr[arr[i]];
            a[i] = val;
        }

        arr = 0;

        return a;
    }
}