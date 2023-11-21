
--# 620. Not Boring Movies

/*
Write a solution to report the movies with an odd-numbered ID and a description that is not "boring".

Return the result table ordered by rating in descending order.

--> https://leetcode.com/problems/not-boring-movies/description/
*/


--> SOLUTION

SELECT * FROM Cinema 
WHERE (id % 2) != 0 AND description != "boring"
ORDER BY rating DESC;
