const { response } = require('express');

const getEventos = (req, res=response ) => {
    
    res.json({
        ok: true,
        msg: 'Eventos listados'
    });

}

const crearEvento = (req, res=response ) => {
    
    res.json({
        ok: true,
        msg: 'crear Evento'
    });

}


const actualizarEvento = (req, res=response ) => {
    
    res.json({
        ok: true,
        msg: 'Actualizar Evento'
    });

}

const eliminarEvento = (req, res=response ) => {
    
    res.json({
        ok: true,
        msg: 'Actualizar Evento'
    });

}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}
