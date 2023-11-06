
--# 610. Triangle Judgement

/*
Report for every three line segments whether they can form a triangle.

--> https://leetcode.com/problems/triangle-judgement/
*/


--> SOLUTION

SELECT x, y, z, 
    IF(x + y > z AND x + z > y AND y + z > x, 'Yes', 'No') AS triangle
FROM Triangle;
