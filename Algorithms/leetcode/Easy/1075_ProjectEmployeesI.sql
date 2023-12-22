
--# 1075. Project Employees I

/*
Write an SQL query that reports the average experience years of all the employees for each project, rounded to 2 digits.

Return the result table in any order.

The query result format is in the following example.
--> https://leetcode.com/problems/project-employees-i/description/
*/


--> SOLUTION

SELECT P.project_id, ROUND(AVG(E.experience_years), 2) AS average_years
FROM Project AS P
INNER JOIN Employee AS E ON P.employee_id = E.employee_id
GROUP BY P.project_id;
