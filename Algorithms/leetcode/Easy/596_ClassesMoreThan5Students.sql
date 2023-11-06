
--# 596. Classes More Than 5 Students

/*
Write a solution to find all the classes that have at least five students.

--> https://leetcode.com/problems/classes-more-than-5-students/description/
*/


--> SOLUTION

SELECT class FROM Courses
GROUP BY class
HAVING COUNT(class) >= 5;
