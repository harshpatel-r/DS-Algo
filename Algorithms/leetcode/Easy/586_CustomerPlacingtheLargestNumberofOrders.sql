
--# 586. Customer Placing the Largest Number of Orders

/*
Write a solution to find the customer_number for the customer who has placed the largest number of orders.

--> https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/description/
*/


--> SOLUTION

SELECT customer_number 
FROM Orders 
GROUP BY customer_number 
ORDER BY COUNT(order_number) DESC 
LIMIT 1;
