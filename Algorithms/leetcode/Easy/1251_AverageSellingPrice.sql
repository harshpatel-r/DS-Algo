
--# 1251. Average Selling Price

/*
Write a solution to find the average selling price for each product. average_price should be rounded to 
2 decimal places.

Return the result table in any order.

The result format is in the following example.
--> https://leetcode.com/problems/average-selling-price/description/
*/


--> SOLUTION

SELECT
    p.product_id,
    COALESCE(ROUND(SUM(u.units* p.price) / SUM(u.units), 2), 0) AS average_price
FROM Prices AS p
LEFT JOIN
    UnitsSold AS u ON p.product_id = u.product_id
                  AND u.purchase_date >= p.start_date
                  AND u.purchase_date <= p.end_date
GROUP BY p.product_id;
