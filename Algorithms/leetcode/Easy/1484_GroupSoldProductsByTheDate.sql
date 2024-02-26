
--# 1484. Group Sold Products By The Date

/*
Write a solution to find for each date the number of different products sold and their names.

The sold products names for each date should be sorted lexicographically.

Return the result table ordered by sell_date.

The result format is in the following example.
--> https://leetcode.com/problems/group-sold-products-by-the-date/description/
*/


--> SOLUTION (MySQL(SQL))

select 
    sell_date, 
    count(distinct(product)) as num_sold, 
    GROUP_CONCAT(distinct(product)) as products 
from Activities
group by sell_date 
order by sell_date, product;
