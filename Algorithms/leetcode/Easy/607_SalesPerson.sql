
--# 607. Sales Person

/*
Write a solution to find the names of all the salespersons who did not have any orders related to the 
company with the name "RED".

--> https://leetcode.com/problems/sales-person/description/
*/


--> SOLUTION

SELECT name FROM SalesPerson
WHERE name NOT IN (
    SELECT s.name FROM SalesPerson AS s
    INNER JOIN Orders AS o ON s.sales_id = o.sales_id
    INNER JOIN Company AS c ON c.com_id = o.com_id
    WHERE c.name = 'RED'
);
