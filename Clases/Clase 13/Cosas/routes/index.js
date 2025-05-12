const express = require('express');
const router = express.Router();
const path = require('path');

//Definicion de las rutas y manejadores.

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../index.html"));
})

router.get("/Hola",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../hola.html"));
})

router.get("/Mundo",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../mundo.html"));
})

router.get("/XD",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../xd.html"));
})

module.exports=router;