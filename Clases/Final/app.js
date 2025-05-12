const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
//Manejar peticiones por medio de URL usando Post y Request.
app.use (bodyParser.urlencoded({extended:false}));

//Configuración de plantillas.

app.set('view engine','ejs');

//Conexión a la DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Olakase4',
    database: 'gestordetareas',
    port: 3306
})

//Validación de conexión a la DB
db.connect(err=>{
    if(err){
        console.error('Sin conexion a la DB', err)
    }else{
        console.log('Si jalo XDXDXD')
    }
})