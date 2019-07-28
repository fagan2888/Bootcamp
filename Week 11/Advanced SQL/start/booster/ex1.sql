USE imdb;

-- q1
SELECT 
    m.title AS movie
FROM
    actors AS act
        INNER JOIN
    cast AS c ON act.id = c.actor_id
        AND act.full_name = 'Kevin Bacon'
        INNER JOIN
    movies AS m ON m.id = c.movie_id;

-- q2

SELECT 
    full_name
FROM
    actors AS act
WHERE
    act.id IN (SELECT 
            cast.actor_id
        FROM
            actors AS act
                INNER JOIN
            cast AS c ON act.id = c.actor_id
                AND act.full_name = 'Kevin Bacon'
                INNER JOIN
            cast ON cast.movie_id = c.movie_id
                AND act.id <> cast.actor_id);
       
-- q3
SELECT 
    act.full_name, AVG(c.salary)
FROM
    actors AS act
        INNER JOIN
    cast AS c ON act.id = c.actor_id
ORDER BY salary DESC
LIMIT 1;
	
-- q4
SELECT 
    COUNT(a.full_name) AS actors_aliens
FROM
    actors AS a
        INNER JOIN
    cast AS c ON a.id = c.actor_id
        INNER JOIN
    movies AS m ON c.movie_id = m.id
WHERE
    m.title = 'Aliens';
