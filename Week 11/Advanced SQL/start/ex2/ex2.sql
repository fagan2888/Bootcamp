USE employees;
-- q1
SELECT gender,COUNT(emp_no) as count_employees from employees group by gender;

-- q2
SELECT count(distinct title) as count_dif_title from titles;
-- q3
SELECT 
    emp.first_name, t.title
FROM
    employees AS emp
        INNER JOIN
    titles AS t ON emp.emp_no = t.emp_no 
WHERE
    year(t.from_date) = 1993;
 
 
-- q4
SELECT 
    emp.first_name, emp.last_name,sal.salary
FROM
    employees AS emp
        INNER JOIN
    titles AS t ON t.emp_no = emp.emp_no and t.title = 'Staff'
        INNER JOIN
    salaries AS sal ON sal.emp_no = t.emp_no order by sal.salary asc limit 10;
    
-- q5
SELECT 
    t.title, AVG(sal.salary) AS avg_salary
FROM
    titles AS t
        INNER JOIN
    salaries AS sal ON t.emp_no = sal.emp_no
GROUP BY title
ORDER BY sal.salary DESC; 
