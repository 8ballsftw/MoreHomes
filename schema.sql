DROP DATABASE IF EXISTS home_data;

CREATE DATABASE home_data;

USE home_data;

CREATE TABLE home_info (
  home_id int NOT NULL,
  title VARCHAR(255),
  home_type VARCHAR(255),
  beds int,
  rating DECIMAL(3, 2),
  rating_num int,
  price int,
  is_plus int,
  PRIMARY KEY (home_id)
);

CREATE TABLE photo_info (
  id int NOT NULL AUTO_INCREMENT,
  home_id int,
  file_url VARCHAR(255),
  PRIMARY KEY (id)
);