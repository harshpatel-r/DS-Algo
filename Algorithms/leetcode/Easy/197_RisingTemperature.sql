
--# 197. Rising Temperature

/*
Write a solution to find all dates' Id with higher temperatures compared to its previous dates (yesterday).
Return the result table in any order.

--> https://leetcode.com/problems/rising-temperature/description/
*/


--> SOLUTION

SELECT w1.id
FROM Weather AS w1
JOIN Weather AS w2 ON w1.recordDate = DATE_ADD(w2.recordDate, INTERVAL 1 DAY)
WHERE w1.temperature > w2.temperature
ORDER BY w1.id;
