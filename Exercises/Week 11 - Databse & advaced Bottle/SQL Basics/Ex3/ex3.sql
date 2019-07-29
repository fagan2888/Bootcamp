
USE employees;
-- Q1
SELECT 
    dept_name
FROM
    departments;
-- Q2
SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Elvis' AND gender = 'F';
-- Q3
SELECT 
    *
FROM
    employees
WHERE
    last_name IN ('Merlo' , 'Smith',
        'Albin',
        'Unno',
        'Baba',
        'Luft',
        'Ozeri',
        'Dalton',
        'Peck');
-- Q4
SELECT 
    *
FROM
    employees
WHERE
    YEAR(hire_date) IN (1995 , 1996)
ORDER BY hire_date ASC;
-- Q5
SELECT 
    *
FROM
    employees
WHERE
    first_name LIKE 'A%'
        AND last_name LIKE '%z';
        
-- Q6
SELECT 
    *
FROM
    salaries
ORDER BY salary DESC
LIMIT 5;

-- Q7
SELECT 
    *
FROM
    employees
WHERE
    hire_date > (SELECT DISTINCT
            hire_date
        FROM
            employees
        WHERE
            first_name = 'Jagoda' AND last_name="Nannarelli");
            
            


