const express = require('express');
const path = require('path');

const app= express();

const port = 5030;
app.get("/", (req, res)=>{
    //res.setEncoding("Hola mundo!");
    //res.sendFile("C:/Users/aldai/Desktop/PW2/Clases/Clase 13/index.html");
    res.sendFile( path.join(__dirname+"/index.html"));
})

app.listen(port, ()=>{
    console.log(`http://127.0.0.1:`+port);
})