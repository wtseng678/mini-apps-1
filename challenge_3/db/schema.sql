-- DROP DATABASE IF EXISTS chat;

-- CREATE DATABASE chat;

-- USE chat;

-- DROP TABLE IF EXISTS messages;
    
-- CREATE TABLE messages (
--   id INT NOT NULL AUTO_INCREMENT,
--   userid INT NOT NULL,
--   text VARCHAR(255) NOT NULL,
--   roomname VARCHAR(255),
--   PRIMARY KEY (id)
-- );

DROP DATABASE IF EXISTS data;

CREATE DATABASE data;

USE data;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  add_1 VARCHAR(255),
  add_2 VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  expiry VARCHAR(255),
  card INT,
  zip INT,
  cvv INT,
  bill_zip INT,
  PRIMARY KEY (id)
);