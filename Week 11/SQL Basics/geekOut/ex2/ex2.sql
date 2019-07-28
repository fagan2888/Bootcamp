SET SQL_SAFE_UPDATES=0;
CREATE DATABASE myDB;
USE myDB;
CREATE TABLE foods (
    ID INT,
    Name VARCHAR(30),
    Do_I_like_it BOOLEAN
);

INSERT INTO foods VALUES (1,"Pizza",true),(2,"broccoli",true),(3,"ice-cream",true);

SELECT foods.name from foods  where foods.Do_I_like_it = true order by ID asc;

UPDATE foods SET Do_I_like_it= false where name = 'Pizza';
DELETE from foods where name='Pizza';