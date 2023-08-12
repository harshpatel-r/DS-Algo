
//# 605. Can Place Flowers

/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot 
be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an 
integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-
flowers rule and false otherwise.
*/

// SOLUTION

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0) return true;

    let count = 0;
    let res = 0;

    for (let i = 0; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && i === 0) {
            res += 1;
            continue;
        }

        if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            count += 1;
            if (count === 2) {
                res += 1;
                count = 0;
            }
        } else {
            count = 0;
        }

    }

    res += Math.ceil(count / 2);

    return res >= n ? true : false;
};