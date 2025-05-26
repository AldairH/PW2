const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./logica/routes/userRoutes');

const app = express();

app.use(express.static(path.join(__dirname, 'styles')));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use('/', userRoutes);

const port = 3005;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
