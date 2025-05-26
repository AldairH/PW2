//Importar Express.
const express = require('express');

//Generar una instanacia.
const app2 = express();

//Generar puerto.
const port2= 5026;

//Ruta de la petición (Configuración del Res).
app2.get('/', (req,res)=>{
    res.send('Hola mundo desde el segundo servidor :p');
});

app2.listen(port2);