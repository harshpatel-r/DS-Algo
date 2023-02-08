
//# Shop in Candy Store

/*
In a candy store, there are N different types of candies available and the prices of all the N 
different types of candies are provided to you.
You are now provided with an attractive offer.
You can buy a single candy from the store and get at most K other candies ( all are different
types ) for free.
Now you have to answer two questions. Firstly, you have to find what is the minimum amount of
money you have to spend to buy all the N different candies. Secondly, you have to find what is
the maximum amount of money you have to spend to buy all the N different candies.

In both the cases you must utilize the offer i.e. you buy one candy and get K other candies for
free.
*/

// SOLUTION

// NOTE :- Solution is correct and shortest but gfg compiler is providing a buggy array as input 
// in js compiler!

let n = 10;
let k = 1;
let candies = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10];

candies = candies.sort((a, b) => a - b);
let min = 0;
let max = 0;
let i = 0,
    j = n - 1,
    m = n - 1,
    l = 0;
while (i <= j || l <= m) {
    min += candies[i];
    j = j - k;
    i++;
    max += candies[m];
    l = l + k;
    m--;
}
console.log([min, max]);
