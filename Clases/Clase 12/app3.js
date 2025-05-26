//Importar Express.
const express = require('express');

//Generar una instanacia.
const app3 = express();

//Generar puerto.
const port3= 5050;

//Ruta de la petición (Configuración del Res).
app3.get('/', (req,res)=>{
    res.send('Hola mundo desde el tercer servidor >:D');
});

app3.listen(port3);