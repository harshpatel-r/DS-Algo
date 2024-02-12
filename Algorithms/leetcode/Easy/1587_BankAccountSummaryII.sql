
--# 1587. Bank Account Summary II

/*
Write a solution to report the name and balance of users with a balance higher than 10000. The balance of an account is equal to the sum of the amounts of all transactions involving that account.

Return the result table in any order.

The result format is in the following example.
--> https://leetcode.com/problems/bank-account-summary-ii/description/
*/


--> SOLUTION (MySQL(SQL))

SELECT u.name, SUM(t.amount) AS balance
FROM Users AS u
INNER JOIN Transactions AS t ON u.account = t.account
GROUP BY u.name
HAVING balance > 10000;
