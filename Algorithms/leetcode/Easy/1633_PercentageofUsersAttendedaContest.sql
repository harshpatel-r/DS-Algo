
--# 1633. Percentage of Users Attended a Contest

/*
Write a solution to find the percentage of the users registered in each contest rounded to two decimals.

Return the result table ordered by percentage in descending order. In case of a tie, order it by ]
contest_id in ascending order.

The result format is in the following example.
--> https://leetcode.com/problems/percentage-of-users-attended-a-contest/description/
*/


--> SOLUTION (MySQL(SQL))

SELECT contest_id,
ROUND(COUNT(DISTINCT user_id) * 100 / (SELECT COUNT(user_id) FROM Users), 2) as percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage desc, contest_id