
--# 181. Employees Earning More Than Their Managers

/*
Write a solution to find the employees who earn more than their managers.

--> https://leetcode.com/problems/employees-earning-more-than-their-managers/description/
*/


--> SOLUTION 

SELECT emp1.name as Employee
FROM Employee as emp1
INNER JOIN Employee as emp2 ON emp1.managerId = emp2.id
WHERE emp1.salary > emp2.Salary;
