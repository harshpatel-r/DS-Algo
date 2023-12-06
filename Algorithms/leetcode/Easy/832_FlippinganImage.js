
//# 832. Flipping an Image

/*
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

-> To flip an image horizontally means that each row of the image is reversed.
-For example, flipping [1,1,0] horizontally results in [0,1,1].

-> To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
-For example, inverting [0,1,1] results in [1,0,0].
*/


// SOLUTION

/**
 * @param {number[][]} image
 * @return {number[][]}
 */

var flipAndInvertImage = function (image) {
    let res = [];
    let n = image.length;

    for (let i = 0; i < n; i++) {
        let arr = [];

        for (let j = 0; j < n; j++) {
            arr.unshift(image[i][j] ? 0 : 1);
        }

        res.push(arr);
    }

    return res;
};
