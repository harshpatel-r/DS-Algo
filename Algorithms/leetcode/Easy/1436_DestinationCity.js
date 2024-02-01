
//# 1436. Destination City

/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from 
cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one 
destination city.
*/


// SOLUTION

/**
 * @param {string[][]} paths
 * @return {string}
 */

var destCity = function (paths) {
    let citySet = new Set();

    for (let i = 0; i < paths.length; i++) {
        citySet.add(paths[i][0]);
    }

    for (let i = 0; i < paths.length; i++) {
        if (!citySet.has(paths[i][1])) return paths[i][1];
    }
};
