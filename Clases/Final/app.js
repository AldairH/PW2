const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const e = require('express');

const app = express();
//Manejar peticiones por medio de URL usando Post y Request por medio de la url.
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

//Iniciar el servidor
const port= 3005
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});

//Mostrar en lista.
app.get('/', (req,res)=>{
    //Consulta a la DB.
    const consulta ='SELECT * FROM users';
    //Usamos la "db" para conectarnos a la base de datos.
    db.query(consulta,(err,results)=>{ //Results almacena los datos de la DB
        if(err){
            console.error('No se encontro el user: ', err);
            res.send("Error. Comunicate con soporte XDXDXD");
        }else{
            res.render('index',{users: results});
        }
    });
});

//Agregar usuario.
app.post('/add', (req, res)=>{
    const {name, email}=req.body;
    const insertarRegistroUsuarios = 'INSERT INTO users (usuario, correo) VALUES (?,?)';
    db.query(insertarRegistroUsuarios,[name, email],(err)=>{
        if(err){
            console.error('No se inserto el registro', err);
        }else{
            res.redirect('/')
        }
    });
});

//Editar usuario.
app.get('/edit/:id',(req,res)=>{
    const {id} = req.params;
    const editar = 'SELECT * FROM users WHERE id = ?';
    db.query(editar,[id],(err,results)=>{
        if(err){
            console.error('Error', err);
        }else{
            res.render('edit',{user: results[0]});
        }
    });    
});

//Update.
app.post('/update/:id', (req,res)=>{
    const {id} = req.params;
    const {name, email} = req.body;
    const actualizarUser = 'UPDATE users SET usuario=?, correo=? WHERE id=?';
    db.query(actualizarUser,[name,email,id],(err)=>{
        if(err){
            console.err("Sin actualizar usuario: ", err);
            res.send("Error de Update")
        }else{
            res.redirect('/');
        }
    });

});

//Eliminar usuario.

app.get('/delete/:id',(req,res)=>{
    const {id} = req.params;
    const eliminar='DELETE FROM users WHERE id=?';
    db.query(eliminar,[id],(err)=>{
        if(err){
            console.err("Error al eliminar:", err);
            res.send("Error al eliminar.");
        }else{
            res.redirect('/');
        }
    });
});