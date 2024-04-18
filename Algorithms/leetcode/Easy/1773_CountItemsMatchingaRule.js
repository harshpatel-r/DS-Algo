
//# 1773. Count Items Matching a Rule

/*
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, 
color, and name of the ith item. You are also given a rule represented by two strings, ruleKey
and ruleValue.

The ith item is said to match the rule if one of the following is true:

=> ruleKey == "type" and ruleValue == typei.
=> ruleKey == "color" and ruleValue == colori.
=> ruleKey == "name" and ruleValue == namei.

Return the number of items that match the given rule.
*/


// SOLUTION :

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

var countMatches = function (items, ruleKey, ruleValue) {
    let itemList = ["type", "color", "name"];
    let itemInd = itemList.indexOf(ruleKey);
    let ruleMatched = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i][itemInd] === ruleValue) ruleMatched++;
    }

    return ruleMatched;
};
