DROP TABLE if exists tasks;




CREATE TABLE tasks
(
    id SERIAL PRIMARY KEY ,
    title VARCHAR(30) NOT NULL,
    completed boolean
);

