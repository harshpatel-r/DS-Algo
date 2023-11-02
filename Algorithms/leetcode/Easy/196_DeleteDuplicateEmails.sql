
--# 196. Delete Duplicate Emails

/*
Write a solution to delete all duplicate emails, keeping only one unique email with the smallest id.

For SQL users, please note that you are supposed to write a DELETE statement and not a SELECT one.

--> https://leetcode.com/problems/delete-duplicate-emails/description/
*/


--> SOLUTION

DELETE FROM Person 
WHERE id NOT IN (
    SELECT min_id 
    FROM (
        SELECT MIN(id) AS min_id 
        FROM Person 
        GROUP BY email
    ) AS minId
);
