
//# 258. Add Digits

/*
Given an integer num, repeatedly add all its digits until the result has only one digit, 
and return it.
*/

// SOLUTION

/*
If you look at the digital root ( the thing this question asks viz - sum untill the sum 
is single digit ) for the first 100 digits. It comes out to be as follows

1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
---------
10 1
11 2
12 3
13 4
14 5
15 6
16 7
17 8
18 9
--------
19 1
20 2
21 3
22 4
23 5
24 6
25 7
26 8
27 9
-------
28 1
29 2
30 3
31 4
32 5
33 6
34 7
35 8
36 9
-------
37 1
38 2
39 3
40 4
41 5
42 6
43 7
44 8
45 9
------
46 1
47 2
48 3
49 4
50 5
51 6
52 7
53 8
54 9
--------
55 1
56 2
57 3
58 4
59 5
60 6
61 7
62 8
63 9
--------
64 1
65 2
66 3
67 4
68 5
69 6
70 7
71 8
72 9
--------
73 1
74 2
75 3
76 4
77 5
78 6
79 7
80 8
81 9
--------
82 1
83 2
84 3
85 4
86 5
87 6
88 7
89 8
90 9
-------
91 1
92 2
93 3
94 4
95 5
96 6
97 7
98 8
99 9
------
100 1


-> You can probably notice the cycle, that is the digit num starts from 0 and ends at 9

-> If you think about it, it is obvious as every time we are adding one to the modulus

-> Thus the ans is the remainder of the division of the number with 9

-> Unless remainder is 0 then the ans is 9

-> We need to be carefull of the 0 case, where the ans is 0
*/

/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
};
