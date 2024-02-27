
--# 1581. Customer Who Visited but Did Not Make Any Transactions

/*
Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.

Return the result table sorted in any order.

The result format is in the following example.
--> https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/description/
*/


--> SOLUTION (MySQL(SQL))

SELECT v.customer_id, COUNT(v.customer_id) AS count_no_trans
FROM Visits AS v
LEFT JOIN Transactions AS t ON v.visit_id = t.visit_id
WHERE t.transaction_id IS NULL
GROUP BY v.customer_id;
