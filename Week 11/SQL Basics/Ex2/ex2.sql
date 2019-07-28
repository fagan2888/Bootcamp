CREATE DATABASE bootcamp;
USE bootcamp;
CREATE TABLE students (
student_id INT,
first_name VARCHAR(30),
last_name VARCHAR(30),
been_dismissed BOOLEAN,
cohort INT
);

CREATE TABLE grades (
    student_id INT,
    exam_id INT,
    date_taken DATE,
    grade INT
);

INSERT INTO students VALUES (1,"Seed","Dawod",true,1),(2,"Yakir","Ifrah",false,2),(3,"Ziv","Davidi",true,3);


select * from students;

SET SQL_SAFE_UPDATES=0;

UPDATE students 
SET 
    first_name = 'Moshe'
WHERE
    last_name = 'Dawod';
    
DELETE FROM students WHERE first_name ="Ziv";
