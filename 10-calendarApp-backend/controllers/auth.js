const { response, request } = require('express');

const crearUsuario = (req = request, res = response) => {

    const {
        name,
        email,
        password
    } = req.body;

    if(name.length <= 0 ){
        return res.status(400).json({
            ok:false,
            msg: 'El nombre debe ser real'
        })
    }

    res.json({
        ok:true,
        msg: 'registro',
        name,
        email,
        password
    });
}

const loginUsuario = (req, res = response) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}

module.exports =  {
    crearUsuario,
    loginUsuario,
    revalidarToken
}