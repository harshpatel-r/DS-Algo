
--# 1084. Sales Analysis III

/*
Write a solution to report the products that were only sold in the first quarter of 2019. That is, 
between 2019-01-01 and 2019-03-31 inclusive.

Return the result table in any order.

The result format is in the following example.
--> https://leetcode.com/problems/sales-analysis-iii/description/
*/


--> SOLUTION

SELECT P.product_id, P.product_name 
FROM Product AS P
INNER JOIN Sales AS S ON P.product_id = S.product_id 
WHERE S.product_id NOT IN (
    SELECT product_id FROM Sales 
    WHERE sale_date NOT BETWEEN '2019-01-01' AND '2019-03-31'
)
GROUP BY P.product_id;
