const express = require('express');
const path = require('path');
const routes = require("./routes/routes.js"); //Importamos las rutas.

const app = express();
const port = 3024;
//Sirve para archivos estaticos en CSS, img, etc.
app.use(express.static(path.join(__dirname,"public")));
app.use("/",routes);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});