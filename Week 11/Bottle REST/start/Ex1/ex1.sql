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
    student_id INT,
    cohrt_name VARCHAR(30),
    PRIMARY KEY (cohrt_id),
    FOREIGN KEY (student_id)
        REFERENCES students (id)
        ON UPDATE CASCADE ON DELETE RESTRICT
);
insert into cohrts (student_id,cohrt_name) values (1,"Pyton"),(2,"C++"),(3,"C++"),(4,"React"),(5,"React"),(6,"JavaScript"),(7,"JavaScript"),(8,"Python"),(9,"C++");
