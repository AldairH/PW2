//Importar Express.
const express = require('express');

//Generar una instanacia.
const app = express();

//Generar puerto.
const port= 5025;

//Ruta de la petición (Configuración del Res).
app.get('/', (req,res)=>{
    res.send('Hola mundo desde el server main 0_o');
});

app.listen(port);