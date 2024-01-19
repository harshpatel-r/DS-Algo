
--# 1407. Top Travellers

/*
Write a solution to report the distance traveled by each user.

Return the result table ordered by travelled_distance in descending order, if two or more users 
traveled the same distance, order them by their name in ascending order.

The result format is in the following example.
--> https://leetcode.com/problems/top-travellers/description/
*/


--> SOLUTION

SELECT u.name, SUM(COALESCE(r.distance, 0)) AS travelled_distance
FROM Users AS u
LEFT JOIN Rides AS r ON u.id = r.user_id
GROUP BY r.user_id
ORDER BY travelled_distance DESC, u.name ASC;
