-- Q1
 SELECT COUNT(id) AS count_movies FROM movies;
-- Q2 
 SELECT COUNT(id) AS count_action_movies FROM movies WHERE genre='action';
-- Q3
 SELECT COUNT(id) AS count_non_action_movies FROM movies WHERE genre!='action';
-- Q4
SELECT year,COUNT(year) AS count_year FROM movies GROUP BY year;	
 -- Q5
 SELECT count(id) AS count_the_in_title FROM movies WHERE title LIKE "%the%";
 -- Q6
 SELECT count(id) AS count_the_start_title FROM movies WHERE title LIKE "the%";