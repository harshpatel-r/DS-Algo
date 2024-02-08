
//# 1496. Path Crossing

/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, 
south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the 
path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location 
you have previously visited. Return false otherwise.
*/


// SOLUTION

/**
 * @param {string} path
 * @return {boolean}
 */

var isPathCrossing = function (path) {
    let x = 0;
    let y = 0;
    let set = new Set();
    set.add('0,0');

    for (let i = 0; i < path.length; i++) {
        if (path[i] === "N") {
            x++;
        } else if (path[i] === "S") {
            x--;
        } else if (path[i] === "E") {
            y++;
        } else {
            y--;
        }

        let currentVal = `${x},${y}`;

        if (set.has(currentVal)) {
            return true;
        } else {
            set.add(currentVal);
        }
    }

    return false;
};
