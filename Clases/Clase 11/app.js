//Importar el modulo de http que viene incluido en Node.js
const serverCreadoHTTP = require('http');
const { text } = require('stream/consumers');

//Definimos el puerto donde va a tener salida nuestro servidor.
const puertoSalida = 4022;

//Crear el servidor.
const servidorCreado = serverCreadoHTTP.createServer((req,res)=>{
    //Encabezado de respuesta.
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hola mundo desde Node.js con el modulo http');
});

// servidorCreado.listen(puertoSalida);

servidorCreado.listen(puertoSalida, ()=>{
    console.log(`Servidor en escucha desde: http://127.0.0.1:${puertoSalida}`);
})