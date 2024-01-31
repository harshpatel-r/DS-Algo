
//# 1431. Kids With the Greatest Number of Candies

/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of 
candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/


// SOLUTION

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function (candies, extraCandies) {
    let firstNum = Math.max(...candies);
    let res = [];

    for (let i = 0; i < candies.length; i++) {
        res.push(candies[i] + extraCandies >= firstNum);
    }

    return res;
};
