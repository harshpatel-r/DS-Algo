
--# 1378. Replace Employee ID With The Unique Identifier

/*
Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null.

Return the result table in any order.

The result format is in the following example.
--> https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/description/
*/


--> SOLUTION

SELECT eu.unique_id, e.name
FROM Employees AS e
LEFT JOIN EmployeeUNI AS eu ON e.id = eu.id;
