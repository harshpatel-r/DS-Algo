
--# 584. Find Customer Referee

/*
Find the names of the customer that are not referred by the customer with id = 2.

--> https://leetcode.com/problems/find-customer-referee/description/
*/


--> SOLUTION

SELECT name 
FROM Customer 
WHERE referee_id IS NULL OR referee_id != 2;
