
-- Q1
SELECT COUNT(id) AS count_actors_with_name_dan FROM actors WHERE full_name LIKE '%dan%';

-- Q2
SELECT COUNT(id) AS count_M_ben_actors FROM actors WHERE gender = 'M' AND full_name LIKE 'ben%';

-- Q3
SELECT * FROM CAST ORDER BY salary ASC LIMIT 5;

