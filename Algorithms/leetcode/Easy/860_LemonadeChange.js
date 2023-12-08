
//# 860. Lemonade Change

/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order 
one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with 
either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net 
transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can 
provide every customer with the correct change, or false otherwise.
*/


// SOLUTION

/**
 * @param {number[]} bills
 * @return {boolean}
 */

var lemonadeChange = function (bills) {
    let notesOf5 = 0;
    let notesOf10 = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            notesOf5++;
            continue;
        }

        if (bills[i] === 10) {
            if (notesOf5 > 0) {
                notesOf5--;
                notesOf10++;
                continue;

            } else {
                return false;
            }
        }

        if (bills[i] === 20) {
            if (notesOf10 > 0 && notesOf5 > 0) {
                notesOf10--;
                notesOf5--;
            } else if (notesOf5 > 2) {
                notesOf5 -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};


console.log(lemonadeChange([5, 5, 5, 10, 20]));