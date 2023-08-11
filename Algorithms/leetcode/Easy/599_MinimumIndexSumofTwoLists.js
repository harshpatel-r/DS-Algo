
//# 599. Minimum Index Sum of Two Lists

/*
Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at -list1[i] 
and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.
*/

// SOLUTION


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

var findRestaurant = function (list1, list2) {
    let compare = {};
    
    for (let i = 0; i < list1.length; i++) {
        compare[list1[i]] = i;
    }
    
    let minInd = Infinity;
    let res = [];

    for (let i = 0; i < list2.length; i++) {
        if (compare[list2[i]] !== undefined) {
            let sum = compare[list2[i]] + i;

            if (minInd > sum) {
                minInd = sum;
                res = [];
                res.push(list2[i]);
            } else if (minInd === sum) {
                res.push(list2[i])
            }

        }
    }

    return res;
};
