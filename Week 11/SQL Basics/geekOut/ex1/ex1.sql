USE employees;

SELECT * FROM employees order by year(hire_date)  DESc;
select * from departments;
select * from dept_emp;
select * from salaries;
select * from titles;
-- q1

SELECT *, COUNT(*) AS count_employees_this_year FROM employees group by year(hire_date); 
-- q2

SELECT *, COUNT(*) AS count_employees_this_mount_per_year FROM employees group by year(hire_date),month(hire_date); 
-- q3

SELECT COUNT(emp_no) AS count_employees_in_department_per_year FROM dept_emp group by year(from_date),dept_no;
-- q4

SELECT AVG(salary) AS average_salary_each_emp FROM salaries group by emp_no;

-- q5
SELECT title,count(title) as count_title from titles group by title;

-- q6

SELECT count(emp_no) AS count_emp_people from titles;

-- q7
SELECT emp_no,sum(salary) As sum_salary_for_each_employee_make_in_company from salaries group by emp_no;

-- q8

SELECT COUNT(dept_no) AS maximum_amount_of_departments from dept_emp group by emp_no order by dept_no limit 1;

-- q9
SELECT distinct gender , count(emp_no) from employees group by gender;

-- q10
SELECT emp_no FROM employees order by birth_date DESC limit 10;