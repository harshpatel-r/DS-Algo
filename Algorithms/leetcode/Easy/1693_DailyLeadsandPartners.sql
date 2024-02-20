
--# 1693. Daily Leads and Partners

/*
For each date_id and make_name, find the number of distinct lead_id's and distinct partner_id's.

Return the result table in any order.

The result format is in the following example.
--> https://leetcode.com/problems/daily-leads-and-partners/description/
*/


--> SOLUTION (MySQL(SQL))

SELECT date_id,
       make_name,
       COUNT(DISTINCT lead_id) AS unique_leads,
       COUNT(DISTINCT partner_id) AS unique_partners
FROM Dailysales
GROUP BY date_id, make_name;
