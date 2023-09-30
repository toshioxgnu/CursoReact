const { response } = require('express');
const Evento = require('../models/Evento');


const getEventos = async (req, res=response ) => {

    const eventos = await Evento.find()
                                .populate('user','name');
    
    res.json({
        ok: true,
        eventos: eventos.length,
        objects: eventos
    });

}

const crearEvento = async (req, res=response ) => {
    
    const evento = new Evento(req.body);
    console.log(evento);
    
    try {
        evento.user = req.uid;

        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const actualizarEvento = async (req, res=response ) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);
        console.log({evento})

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if( evento.user.toString()   !== uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true});

        res.json({
            ok: true,
            evento: eventoActualizado
        });



    } catch (error) {

        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });

    }
    
    

}

const eliminarEvento = async (req, res=response ) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);
        console.log({evento})

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        if( evento.user.toString()   !== uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este evento'
            });
        }
        const eventoActualizado = await Evento.findByIdAndDelete(eventoId);

        res.json({
            ok: true,
            evento: eventoId
        });



    } catch (error) {

        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });

    }

}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}
