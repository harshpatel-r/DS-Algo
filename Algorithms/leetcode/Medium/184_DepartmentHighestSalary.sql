
--# 184. Department Highest Salary

/*
Write a solution to find employees who have the highest salary in each of the departments.

Return the result table in any order.

The result format is in the following example.
--> https://leetcode.com/problems/department-highest-salary/description/
*/


--> SOLUTION 1: [MySQL(SQL)] (CTE: Common Table Expression)

WITH emp AS (
    SELECT MAX(salary) AS max_salary, departmentId 
    FROM Employee 
    GROUP BY departmentId
)

SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary 
FROM Employee AS e 
INNER JOIN Department AS d ON e.departmentid = d.id 
INNER JOIN emp AS em ON d.id = em.departmentId
WHERE e.salary = em.max_salary;

--> SOLUTION 2: [MySQL(SQL)] (Subquery)

SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary 
FROM Employee AS e 
INNER JOIN Department AS d ON e.departmentid = d.id 
WHERE e.salary = (SELECT MAX(c.salary) FROM Employee c WHERE c.departmentId = e.departmentId);
