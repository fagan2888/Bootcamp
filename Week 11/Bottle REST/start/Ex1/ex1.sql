use bootcamp;
drop table cohrts;
drop table students;

CREATE TABLE students (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) not null,
    last_name varchar(30) not null,
	PRIMARY KEY (id)
);
insert into students (first_name,last_name) values ("Yakir","Ifrah"),("Shimi","Mazoz"),("Natan","Perezh"),("Ran","Shahak"),("Rami","Gershon"),("Matan","Cohen"),("Mike","Shemo"),("Ben","Avrahmi"),("Limor","Toledano"),("Miri","Choen"),("Sapir","tzatok");
CREATE TABLE cohrts (
    cohrt_id INT NOT NULL AUTO_INCREMENT,
    cohrt_name VARCHAR(30),
    PRIMARY KEY (cohrt_id)
);
insert into cohrts (cohrt_name) values ("Pyton"),("C++"),("C++"),("React"),("React"),("JavaScript"),("JavaScript"),("Python"),("C++");
select * from students;
select * from cohrts;