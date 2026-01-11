const express = require('express');
const app = express();

const usuariosRoutes = require('./routes/usuarios.routes');
const { notFound } = require('./middlewares');

//middlewares globales

app.use(express.json());
app.use(express.urlencoded({extended : true}));

//rutas

app.use('/usuarios', usuariosRoutes);


//error 404

app.use(notFound);

//servidor

app.listen(3000, ()=>{
    console.log('Servidor funcionando en http://localhost:3000');
});








