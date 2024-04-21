// index.js

const express = require('express');
mysql = require('mysql2');
const app = express();
const port = 8000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'doctors_app',
    port: 3307,
    insecureAuth: true
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Routes
app.get('/patients', (req, res) => {
    connection.query('SELECT * FROM patients', (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
