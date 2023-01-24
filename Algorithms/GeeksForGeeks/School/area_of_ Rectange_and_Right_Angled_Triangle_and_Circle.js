
//# Area of Rectange, Right Angled Triangle and Circle

/*
Given the length of rectangle, width of rectangle, base of right angled triangle, 
perpendicular of right angled triangle and radius of circle respectively. 
Calculate the area of rectangle, right angled triangle and circle.
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number} L
 * @param {number} W
 * @param {number} B
 * @param {number} H
 * @param {number} R
 * @returns {number[]}
*/

class Solution {
    getAreas(L, W, B, H, R) {
        //code here
        let rectangle = Math.floor(L * W);
        let triangle = Math.floor(0.5 * B * H);
        let circle = Math.floor(3.14 * (R ** 2));
        return [rectangle, triangle, circle];
    }
}
