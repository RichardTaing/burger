DROP DATABASE IF EXISTS b6s1jrqnj56mwul3;
-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
-- USE burgers_db;
CREATE DATABASE b6s1jrqnj56mwul3;
USE b6s1jrqnj56mwul3;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT, 
burger_name VARCHAR
    (500) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0, 
PRIMARY KEY
    (id)
);

    SELECT *
    FROM burgers;
