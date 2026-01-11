const express = require('express');
const router = express.Router();

const {
    getUsuarios,
    getUsuarioByNombre,
    createUsuario,
    updateUsuario,
    deleteUsuario

} = require ('../controllers/usuarios.controller');

//endpoints

router.get('/',getUsuarios);
router.get('/:nombre', getUsuarioByNombre);
router.post('/', createUsuario);
router.put('/:nombre', updateUsuario);
router.delete('/:nombre', deleteUsuario);

module.exports = router;





