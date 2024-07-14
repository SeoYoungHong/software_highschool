-- 데이터베이스 선택
CREATE DATABASE IF NOT EXISTS your_database;

-- 데이터베이스 사용
USE your_database;

-- 테이블 생성
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- 값 삽입
INSERT INTO users (username, password) VALUES 
('user1', 'password1'),
('user2', 'password2');