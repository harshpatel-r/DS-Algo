
--# 1667. Fix Names in a Table

/*
Write a solution to fix the names so that only the first character is uppercase and the rest are lowercase.

Return the result table ordered by user_id.

The result format is in the following example.
--> https://leetcode.com/problems/fix-names-in-a-table/description/
*/


--> SOLUTION (MySQL(SQL))

SELECT user_id, CONCAT(UPPER(SUBSTR(name, 1, 1)), LOWER(SUBSTR(name, 2))) AS name 
FROM Users 
ORDER BY user_id;
