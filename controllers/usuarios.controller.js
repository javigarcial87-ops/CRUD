let usuarios = require('../data/usuarios');


//obtener usuarios
const getUsuarios = (req,res) =>{ 
    res.json(usuarios);
 };

//obtener usuario por nombre

const getUsuarioByNombre = (req,res) =>{
    const {nombre} = req.params;
    const usuario = usuarios.find (u=> u.nombre === nombre);

    if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado'});
    }
    res.json(usuario);
};

//crear usuario
const createUsuario = (req,res) =>{
    const {nombre, edad, lugarProcedencia} = req.body;

    if (!nombre || !edad || !lugarProcedencia) {
        return res.status(404).json({ mensaje: 'Faltan datos'});
    }

    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre,
        edad,
        lugarProcedencia
    };

    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
};



//PUT - Actualizar usuario
const updateUsuario = (req, res) =>{
const { nombre } = req.params;
const { edad, lugarProcedencia} = req.body;

const index = usuarios.findIndex(u=>u.nombre === nombre);

if(index === -1) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
}

if(edad) usuarios[index].edad = edad;
if(lugarProcedencia) usuarios[index].lugarProcedencia = lugarProcedencia;

res.json(usuarios[index]);

};



// Borrar usuarios

const deleteUsuario = (req,res) =>{
    const {nombre} = req.params;

    const existe = usuarios.some(u=>u.nombre !==nombre);

    if (!existe) {
        return res.status(404).json({ mensaje: 'usuario no encontrado'});
    }
    usuarios = usuarios.filter(u=>u.nombre !== nombre);

    res.json({ mensaje: `Usuario ${nombre} eliminado correctamente`});
};


module.exports = {
    getUsuarios,
    getUsuarioByNombre,
    createUsuario,
    updateUsuario,
    deleteUsuario
};