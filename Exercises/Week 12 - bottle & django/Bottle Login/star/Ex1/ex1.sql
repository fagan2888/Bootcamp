create database users;
use users;
CREATE TABLE users (
    name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (name , password)
)

insert into users (name,password) values("yakir","123");

select * from users;