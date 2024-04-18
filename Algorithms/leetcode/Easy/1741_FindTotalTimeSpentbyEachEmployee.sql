
--# 1741. Find Total Time Spent by Each Employee

/*
Write a solution to calculate the total time in minutes spent by each employee on each day at the office. 
Note that within one day, an employee can enter and leave more than once. The time spent in the office 
for a single entry is out_time - in_time.

Return the result table in any order.

The result format is in the following example.
==> https://leetcode.com/problems/find-total-time-spent-by-each-employee/description/
*/


--> SOLUTION (MySQL(SQL))

SELECT event_day AS day, emp_id, SUM(out_time - in_time) AS total_time 
FROM Employees 
GROUP BY event_day, emp_id;
