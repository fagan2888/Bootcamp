use employees;
-- q1
SELECT 
    emp.first_name
FROM
    employees AS emp
        INNER JOIN
    titles AS t ON t.emp_no = emp.emp_no
        AND t.title = 'Assistant Engineer'
ORDER BY t.from_date ASC
LIMIT 10;

-- q2
SELECT 
    emp.first_name
FROM
    employees AS emp
        INNER JOIN
    titles AS t ON t.emp_no = emp.emp_no
        AND t.title = 'Senior Engineer'
ORDER BY t.from_date ASC
LIMIT 10 , 20;

-- q3
-- 3. What are the departments who have the largest amount of engineers (of any kind)?

SELECT 
    dept.dept_name, COUNT(t.title)
FROM
    departments AS dept
        INNER JOIN
    dept_emp ON dept_emp.dept_no = dept.dept_no 
    inner join 
    titles as t
    on t.emp_no= dept_emp.emp_no
        where t.title LIKE '%Engineer%'
        group by dept.dept_name
ORDER BY dept_emp.dept_no DESC
LIMIT 1;	
-- q4
SELECT 
    first_name,
    last_name,
    dept.dept_name,
    MAX(sal.salary) AS 'max salary in dept'
FROM
    departments AS dept
        INNER JOIN
    dept_manager AS dept_m ON dept_m.dept_no = dept.dept_no
        INNER JOIN
    employees AS emp ON emp.emp_no = dept_m.emp_no
        INNER JOIN
    salaries AS sal ON sal.emp_no = emp.emp_no
GROUP BY dept_name
ORDER BY salary DESC;

