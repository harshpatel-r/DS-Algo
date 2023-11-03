
--# 577. Employee Bonus

/*
Write a solution to report the name and bonus amount of each employee with a bonus less than 1000.

--> https://leetcode.com/problems/employee-bonus/description/
*/


--> SOLUTION

SELECT e.name, b.bonus
FROM Employee AS e
LEFT JOIN Bonus AS b ON e.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL;
