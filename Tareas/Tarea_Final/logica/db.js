const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Olakase4',
    database: 'gestordetareas',
    port: 3306
});

db.connect(err => {
    if (err) console.error('Error al conectar DB:', err);
    else console.log('Si jala XD');
});

module.exports = db;