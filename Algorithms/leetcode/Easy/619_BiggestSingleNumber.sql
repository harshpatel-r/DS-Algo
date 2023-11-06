
--# 619. Biggest Single Number

/*
A single number is a number that appeared only once in the MyNumbers table.
Find the largest single number. If there is no single number, report null.

--> https://leetcode.com/problems/biggest-single-number/description/
*/


--> SOLUTION

SELECT MAX(number.num) AS num
FROM (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(num) = 1
) AS number;
