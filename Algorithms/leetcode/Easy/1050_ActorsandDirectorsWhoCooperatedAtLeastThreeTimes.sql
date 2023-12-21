
--# 1050. Actors and Directors Who Cooperated At Least Three Times

/*
Write a solution to find all the pairs (actor_id, director_id) where the actor has cooperated with the 
director at least three times.

Return the result table in any order.

The result format is in the following example.

--> https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/description/
*/


--> SOLUTION

SELECT actor_id, director_id FROM ActorDirector
GROUP BY actor_id, director_id
HAVING COUNT(*) > 2;
