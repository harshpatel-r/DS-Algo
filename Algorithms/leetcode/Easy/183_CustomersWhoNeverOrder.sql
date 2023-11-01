
--# 183. Customers Who Never Order

/*
Write a solution to find all customers who never order anything.

--> https://leetcode.com/problems/customers-who-never-order/description/
*/


--> SOLUTION 1

SELECT customers.name as Customers
FROM Customers
WHERE customers.id NOT IN (SELECT Orders.customerId FROM Orders);


--> SOLUTION 2

SELECT c.name as Customers
FROM Customers as c
LEFT JOIN Orders as o ON c.id = o.customerId
WHERE o.customerId IS NULL;
