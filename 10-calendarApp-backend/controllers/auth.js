const { response, request } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req = request, res = response) => {


    const {
        name,
        email,
        password
    } = req.body;

   

    res.status(201).json({
        ok:true,
        msg: 'registro',
        name,
        email,
        password
    });
}

const loginUsuario = (req, res = response) => {

    const { 
        email, 
        password 
    } = req.body;

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