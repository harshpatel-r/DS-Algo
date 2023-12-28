
--# 1211. Queries Quality and Percentage

/*
We define query quality as:
    -The average of the ratio between query rating and its position.

We also define poor query percentage as:
    -The percentage of all queries with rating less than 3.

Write a solution to find each query_name, the quality and poor_query_percentage.

Both quality and poor_query_percentage should be rounded to 2 decimal places.

Return the result table in any order.

The result format is in the following example.
-> https://leetcode.com/problems/queries-quality-and-percentage/description/
*/


--> SOLUTION

SELECT
    query_name,
    ROUND(AVG(rating / position), 2) AS quality,
    ROUND(SUM(rating < 3) / COUNT(*) * 100, 2) AS poor_query_percentage
FROM Queries
WHERE query_name IS NOT NULL
GROUP BY query_name;
