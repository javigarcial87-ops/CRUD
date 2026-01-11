const notFound = (req,res) => {
    res.status(404).json({
        mensaje: 'ruta no encontrada'
    });
};
module.exports = notFound;