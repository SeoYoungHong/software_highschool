const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// 데이터베이스 연결
db.connect((err) => {
    if (err) {
        console.error('DB 연결 실패:', err);
        return;
    }
    console.log('DB에 연결되었습니다.');
});

// Ping API 추가
app.get('/ping', (req, res) => {
    res.json({ message: 'ping' });
});


// 간단한 GET 라우트
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users'; // users 테이블에서 모든 데이터 선택
    db.query(sql, (err, results) => {
        
        if (err) {
            console.log(err)
            return res.status(500).json({ error: err.message });
        }
        console.log(results)
        res.json(results);
    });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
