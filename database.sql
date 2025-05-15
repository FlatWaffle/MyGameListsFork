-- Here lies the SQL code i used in the MariaDB database

-- First make the database
CREATE DATABASE mygamelistsdb;

-- users for registration/login
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- userlist
CREATE TABLE userlist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    game_name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,  -- Playing, Completed, Plan to Play, Dropped
    score INT,  -- 1-10
    FOREIGN KEY (user_id) REFERENCES users(id)
);