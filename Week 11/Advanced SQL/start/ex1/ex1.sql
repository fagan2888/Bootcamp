CREATE DATABASE SQL_ADVACED;
USE SQL_ADVACED;
CREATE TABLE Participant (
    ParticipantID INT UNIQUE,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    gender VARCHAR(1) NOT NULL,
    level_of_english INT NOT NULL,
    citizenship BOOLEAN NOT NULL,
    PRIMARY KEY (ParticipantID)
);

CREATE TABLE Payment (
    PaymentID INT NOT NULL,
    ParticipantID INT NOT NULL,
    Sum INT NOT NULL,
    PaymentMethod ENUM('PayPal', 'Cash', 'Wire') NOT NULL DEFAULT 'PayPal',
    authorization_code VARCHAR(30) NOT NULL,
    PRIMARY KEY (PaymentID),
    FOREIGN KEY (ParticipantID)
        REFERENCES Participant (ParticipantID)
        ON UPDATE CASCADE ON DELETE RESTRICT
);

INSERT INTO Participant VALUES(1,"Gilad","Abu","Israel","M",9,true),(2,"Shimi","Sason","USA","M",10,false);
INSERT INTO Payment VALUES (11,1,3000,'paypal',"1234"),(12,2,4000,"cash","2345");

--  insert to table Payment ParticipantID that not exit in Participant Table
-- INSERT INTO Payment VALUES (15,4,5999,'wire',"3445");

