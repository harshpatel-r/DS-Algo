
--# 182. Duplicate Emails

/*
--> https://leetcode.com/problems/duplicate-emails/description/

Write a solution to report all the duplicate emails. Note that it's guaranteed that the email 
field is not NULL.

Return the result table in any order.
*/


--> SOLUTION

SELECT email FROM Person GROUP BY email HAVING COUNT(email) > 1;
