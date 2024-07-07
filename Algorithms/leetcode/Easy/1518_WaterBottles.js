
//# 1518. Water Bottles

/*
There are numBottles water bottles that are initially full of water. You can exchange numExchange empty 
water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can 
drink.
*/


// SOLUTION:

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

var numWaterBottles = function (numBottles, numExchange) {
    let canDrink = numBottles;

    while (numBottles >= numExchange) {
        let newBottles = Math.floor(numBottles / numExchange);
        numBottles = numBottles % numExchange;
        numBottles += newBottles;
        canDrink += newBottles;
    }

    return canDrink;
};
