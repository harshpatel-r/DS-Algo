
//# Check if it is possible to survive on Island

/*
Ishika got stuck on an island. There is only one shop on this island and it is open on all days of the week 
except for Sunday. Consider following constraints:

    N – The maximum unit of food you can buy each day.
    S – Number of days you are required to survive.
    M – Unit of food required each day to survive.

Currently, it’s Monday, and she needs to survive for the next S days.

Find the minimum number of days on which you need to buy food from the shop so that she can survive the next 
S days, or determine that it isn’t possible to survive. 
*/

// SOLUTION


//User function Template for javascript
/**
 * @param {number} S
 * @param {number} N
 * @param {number} M
 * @return {number}
 */
class Solution {
    minimumDays(S, N, M) {
        //code here
        if (N < M) return -1;

        let holiday = Math.floor(S / 7);
        let regular = S - holiday;
        let stock = N / M;
        let orderCount = S / stock;
        let result = Math.ceil(orderCount);

        return result > regular ? -1 : result
    }
}