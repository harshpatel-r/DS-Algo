
//# 1779. Find Nearest Point That Has the Same X or Y Coordinate

/*
You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). 
You are also given an array points where each points[i] = [ai, bi] represents that a point exists at 
(ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current 
location. If there are multiple, return the valid point with the smallest index. If there are no valid 
points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).
*/


// SOLUTION : 

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */

var nearestValidPoint = function (x, y, points) {
    let dist = Infinity;
    let smallestInd = -1;

    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            let distOfX = Math.abs(x - points[i][0]);
            let distOfY = Math.abs(y - points[i][1]);
            let totalDist = distOfX + distOfY;

            if (dist > totalDist) {
                dist = totalDist;
                smallestInd = i;
            }
        }
    }

    return smallestInd;
};
