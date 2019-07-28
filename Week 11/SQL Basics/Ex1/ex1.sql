
CREATE DATABASE ITC;
USE ITC;
CREATE TABLE users (
    UseId INT,
    FirstName VARCHAR(30),
    LastName VARCHAR(30),
    Gender VARCHAR(1),
    Age INT,
    Address VARCHAR(50),
    City VARCHAR(50),
    Country VARCHAR(20)
);

INSERT INTO users VALUES(5989342,"Yakir","Ifrah","M",29,"Dado 426/1","Ofakim","Israel");