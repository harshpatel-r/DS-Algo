
//# 1184. Distance Between Bus Stops

/*
A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs 
of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.
==> https://leetcode.com/problems/distance-between-bus-stops/description/
*/


// SOLUTION:

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */

var distanceBetweenBusStops = function (distance, start, destination) {
    let n = distance.length;
    let min = Math.min(start, destination);
    let max = Math.max(start, destination);
    let clockwise = 0;
    let totalDistance = 0;

    for (let i = 0; i < n; i++) {
        totalDistance += distance[i];

        if (i >= min && i < max) {
            clockwise += distance[i];
        }
    }

    let counterclockwise = totalDistance - clockwise;
    return Math.min(clockwise, counterclockwise);
};
